import UserPlayService from "../../UserPlayService";
import { setUserPlays } from "../../../store/actions/UserPlay";
import { dateToHour, dateToString } from '../../../services/Utils';
import moment from "moment";

//--------------------------------------------------------//
//----------------- loading UserPlays -----------------//
//--------------------------------------------------------//

/**
 * on enter Home Screen
 * @param store
 * @returns {Function}
 */
const onEnterHomeUserPlays = async(store: any) => {
	const getState = store.getState;
    const state = getState();
    const dispatch = store.dispatch;

    //----------------- loading UserPlays -----------------//
    const url = `lottery_draws?played=true&isEnabled=true&drawnAt%5Bbefore%5D=${encodeURIComponent('')}`;
    const responseUserPlays = await UserPlayService.get({
        url,
        data: {},
    });

    if (responseUserPlays && responseUserPlays.status === 200) {
        const userPlays = responseUserPlays.data['hydra:member'];
        dispatch(setUserPlays(userPlays));
    }  
    return true;
}

export default onEnterHomeUserPlays;