export interface LotteryDrawsService {
    url: string;
    data: LotteryDrawServiceDataParams
}

export interface LotteryDrawServiceDataNull {
    url: string;
    data: {}
}

export interface LotteryDrawServiceDataParams {
    '@id': string,
    firstResult: number,
    secondResult: number,
    thirdResult: number,
    fourthResult: number,
    fifthResult: number,
    sixthResult: number,
    drawnAt: Date,
    current: boolean,
    superBol: boolean
}
