import { useState, useEffect } from "react";
import { database_query, database_store } from "../services/database";
import { useGet } from "./useApi";
import moment from "moment";

interface MinimunLottery {
  id: number;
  drawnAt: string;
  played: boolean;
}

const _lottery: MinimunLottery | null = null;
const arr: any[] = [];

export function useNextLottery() {
  const [loading, setLoading] = useState(true);
  const [lottery, setLottery] = useState(_lottery);
  const [lotterySeq, setLotterSeq] = useState(arr);
  const nextLotteryDraw = useGet(
    `/lottery_draws?played=false&drawnAt[strictly_after]=${moment().toISOString()}`,
    [],
    { autoFetch: false }
  );

  useEffect(() => {
    getNextLottery();
  }, []);

  const getNextLottery = async () => {
    setLoading(true);
    let nextLottery = await database_query("nextLottery");

    if (
      nextLottery &&
      moment().diff(moment(nextLottery.drawnAt), "minutes") < 0
    ) {
      setLoading(false);
      setLottery(nextLottery);
    } else {
      nextLottery = await nextLotteryDraw.fetch();
      if (nextLottery && nextLottery.length > 0) {
        setLottery(nextLottery[0]);
        await database_store({ nextLottery: nextLottery[0] });
      }
    }

    const toSeq = [nextLottery];
    for (let i = 1; i <= 3; i++) {
      toSeq.push({
        ...nextLottery,
        id: nextLottery.id + i,
        drawnAt: moment(nextLottery.drawnAt).add(5 * i, "minutes"),
      });
    }

    setLotterSeq(toSeq);
    setLoading(false);
    return nextLottery;
  };

  return {
    loading,
    lottery,
    lotterySeq,
    error: nextLotteryDraw.error,
  };
}
