import LotteryDrawService from "../../LotteryDrawService";
import { setLotteryDrawsState, setCurrentLotteryDrawState } from '../../../store/actions/LotteryDraw';

//--------------------------------------------------------//
//----------------- loading Lottery Draw -----------------//
//--------------------------------------------------------//

/**
 * on enter Home Screen
 * @param store
 * @returns {Function}
 */
const onEnterHomeLotteryDraws = async(store: any) => {
	const getState = store.getState;
    const state = getState();
    const dispatch = store.dispatch;

    //----------------- loading LotteryDraws -----------------//
    const responseLotteryDraws = await LotteryDrawService.get({
        url: 'lottery_draws',
        data: {},
    });

    if (responseLotteryDraws && responseLotteryDraws.status === 200) {
        const lotteryDraws = responseLotteryDraws.data['hydra:member'];
        dispatch(setLotteryDrawsState(lotteryDraws));
    } 

    //----------------- loading LotteryDraw -----------------//
    const responseLotteryDraw = await LotteryDrawService.get({
        url: 'lottery_draws?current=true',
        data: {},
    });
    
    if (responseLotteryDraw && responseLotteryDraw.status === 200) {
        const currentLotteryDraw = responseLotteryDraw.data['hydra:member'];
        dispatch(setCurrentLotteryDrawState(currentLotteryDraw[0]));
    } 
    return true;
}

export default onEnterHomeLotteryDraws;