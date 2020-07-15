import { getData } from "../../Utils";

export function getLotteryDraws(state: any, errorIfNotFound = false) {
    return getData(
        state,
        'LotteryDraw.allLoterryDraw',
        errorIfNotFound && 'Not data found'
    );
}

export function getCurrentLotteryDraw(state: any, errorIfNotFound = false){
    return getData(
        state,
        'LotteryDraw.currentLotteryDraw',
        errorIfNotFound && 'No Current Lottery draw found'
    );
}