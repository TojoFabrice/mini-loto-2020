export default function LotteryDraw(state = {
    lotteryDraws: [],
    currentLotteryDraw: {}
}, 
action: any){
    switch(action.type){
        case 'SET_LOTTERY_DRAWS':
            return {
                ...state,
                lotteryDraws: action.lotteryDraws,
            };
        case 'SET_CURRENT_LOTTERY_DRAW':
            return {
                ...state,
                currentLotteryDraw: action.currentLotteryDraw,
            };
        default:
            return state;
    }
}