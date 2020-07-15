import { UserPlayServiceDataParams } from "../types/UserPlayType";
import UserPlayService from "../services/UserPlayService";
import store from "../store";
import {
  setUserPlays,
  setCurrentUserPlay,
  setUserPlaySixNumbers,
  setButtonValidationLoadingState,
} from "../store/actions/UserPlay";
import { sixRandomArray, isObjectNull } from "../services/Utils";
import { getCurrentLotteryDraw } from "../services/store/reducers/LotteryDrawReducerService";
import { getCurrentUser } from "../services/store/reducers/AccountsReducerService";
import { getUserPlays } from "../services/store/reducers/UserPlayReducerService";
import { LotteryDrawServiceDataParams } from "../Types/LotteryDrawType";
import { setLastUserPlays } from "../store/actions/UserPlay";

const dispatch = store.dispatch;
const state = store.getState();

//--------------------------------------------------------//
//------------ UserPlays controller ----------------------//
//--------------------------------------------------------//

/**
 * Get lastUserPlays
 * @param userPlays
 * @param currentUser
 * @param currentLotteryDraw
 * @returns {Array}
 */
const getFourLastUserPlays = (
  userPlays: Array<UserPlayServiceDataParams>,
  currentUser: any,
  currentLotteryDraw: any
) => {
  const lastUserPlays =
    userPlays &&
    userPlays.filter((userPlay: UserPlayServiceDataParams) =>
      filterByUserPlayerLotteryDraw(userPlay, currentUser, currentLotteryDraw)
    );
  if (!isObjectNull(lastUserPlays)) {
    const fourLastUserPlays: Array<UserPlayServiceDataParams> = lastUserPlays.slice(
      Math.max(lastUserPlays.length - 4, 0)
    );
    dispatch(setLastUserPlays(fourLastUserPlays));
  }
  return true;
};

/**
 * Add userPlay
 * @param params
 * @returns {boolean}
 */
const UserPlayAdd = async (params: UserPlayServiceDataParams) => {
  dispatch(setButtonValidationLoadingState(true));
  const response = await UserPlayService.post({
    url: "/user_plays",
    data: params,
  });
  if (response && response.status === 201) {
    const userPlay = response.data;
    let userPlays = getUserPlays(state);
    userPlays.push(userPlay);
    dispatch(setCurrentUserPlay(userPlay));
    dispatch(setUserPlays(userPlays));
    dispatch(setButtonValidationLoadingState(false));
    return false;
  } else {
    return true;
  }
};

/**
 * Get userPlays
 *
 * @returns {boolean}
 */
const UserPlayGetAll = async () => {
  const response = await UserPlayService.get({
    url: "/user_plays",
    data: {},
  });
  if (response && response.status === 200) {
    const userPlays = response.data["hydra:member"];
    dispatch(setUserPlays(userPlays));
    return false;
  } else {
    return true;
  }
};

/**
 * add sixNumbers
 * @param
 * @returns {Array<number>}
 */
const sixNumbersAdd = async () => {
  const numbers: Array<number> = sixRandomArray(6);
  dispatch(setUserPlaySixNumbers(numbers));
  return numbers;
};

/**
 * get an UserPlay object by sixNumbers
 * @param  sixNumbers
 * @returns {UserPlayServiceDataParams}
 */
const GetUserPlay = async (sixNumbers: Array<number>) => {
  const state = store.getState();
  const currentLotteryDraw = getCurrentLotteryDraw(state) || null;
  const currentUser = getCurrentUser(state) || null;
  return {
    firstNumber: sixNumbers[0].toString(),
    secondNumber: sixNumbers[1].toString(),
    thirdNumber: sixNumbers[2].toString(),
    fourthNumber: sixNumbers[3].toString(),
    fifthNumber: sixNumbers[4].toString(),
    sixthNumber: sixNumbers[5].toString(),
    playedAt: new Date(),

    player: currentUser["@id"],
    lotteryDraw: currentLotteryDraw["@id"],
  };
};

/**
 * add number to sixNumbers array
 * @param numberToAdd
 * @param sixNumbers
 * @returns {Array<number>}
 */
const AddNumber = async (numberToAdd: number, sixNumbers: Array<number>) => {
  let index = sixNumbers.indexOf(numberToAdd);
  if (index != -1) {
    sixNumbers[index] = 0;
  } else {
    let indexOfZero = sixNumbers.indexOf(0);
    sixNumbers[indexOfZero] = numberToAdd;
  }
  dispatch(setUserPlaySixNumbers(sixNumbers));
  return sixNumbers;
};

//--------------------------------------------------------//
//------------------- UserPlays utils ----------------------//
//--------------------------------------------------------//

const filterByUserPlayerLotteryDraw = (
  userPlays: UserPlayServiceDataParams,
  currentUser: UserPlayServiceDataParams,
  currentLotteryDraw: LotteryDrawServiceDataParams
) => {
  return (
    currentUser["@id"] === userPlays.player ||
    currentLotteryDraw["@id"] === userPlays.lotteryDraw
  );
};

export {
  getFourLastUserPlays,
  UserPlayAdd,
  UserPlayGetAll,
  sixNumbersAdd,
  AddNumber as addNumber,
  GetUserPlay as getUserPlay,
};
