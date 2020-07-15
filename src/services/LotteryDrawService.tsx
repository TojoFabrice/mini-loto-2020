import Http from "./Http";
import { LotteryDrawServiceDataNull } from '../types/LotteryDrawType';

class LotteryDrawService {
    get = async (params: LotteryDrawServiceDataNull) => await Http.get(params);
}

export default new LotteryDrawService();