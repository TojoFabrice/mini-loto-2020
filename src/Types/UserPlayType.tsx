export interface UserPlayServiceParams {
  url: string;
  data: UserPlayServiceDataParams;
}

export interface UserPlayServiceDataNull {
  url: string;
  data: {};
}

export interface UserPlayServiceDataParams {
  "@id": string;
  firstNumber: string;
  secondNumber: string;
  thirdNumber: string;
  fourthNumber: string;
  fifthNumber: string;
  sixthNumber: string;
  playedAt: Date;
  player: string;
  lotteryDraw: string;
  // superbol: number;
  // megabolFirstNumber: number;
  // megabolSecondNumber: number;
}
