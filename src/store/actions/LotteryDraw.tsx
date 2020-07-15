const  setLotteryDrawsState = (lotteryDraws: any) => {
    return (dispatch: (arg0: { type: string; lotteryDraws: any; }) => void, getState: any) => {
        dispatch({
            type: 'SET_LOTTERY_DRAWS',
            lotteryDraws
        });
    }
}

const  setCurrentLotteryDrawState = (currentLotteryDraw: Object) => {
    return (dispatch: (arg0: { type: string; currentLotteryDraw: Object; }) => void, getState: any) => {
        dispatch({
            type: 'SET_CURRENT_LOTTERY_DRAW',
            currentLotteryDraw
        });
    }
}

export { setLotteryDrawsState, setCurrentLotteryDrawState }