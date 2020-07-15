class WinService {
  /**
   * get disorder numbers in a draw
   * @param  currentLotteryDraw
   * @param  userplay
   * @returns {number}
   */
  private getDisorderNumbers = async (
    currentLotteryDraw: Array<number>,
    userplay: Array<number>
  ) => {
    let ret = 0;
    userplay.forEach((element) => {
      if (currentLotteryDraw.indexOf(element) != -1) {
        ret++;
      }
    });
    return ret;
  };

  /**
   * get order numbers in a draw
   * @param  currentLotteryDraw
   * @param  userplay
   * @returns {number}
   */
  private getOrderNumbers = async (
    currentLotteryDraw: Array<number>,
    userplay: Array<number>,
    superbol?: number
  ) => {
    if (currentLotteryDraw.length == 7) {
      return 0;
    }
    let occurence = 0;
    let ret = 0;
    for (let i = 0; i < currentLotteryDraw.length; i++) {
      if (currentLotteryDraw[i] == userplay[i]) {
        occurence++;
      } else {
        if (occurence > ret) {
          ret = occurence;
        }
        occurence = 0;
      }
      if (occurence > ret) {
        ret = occurence;
      }
    }
    return ret;
  };

  /**
   * get win type related to order or disorder(Grand,Major,...)
   * @param  currentLotteryDraw
   * @param  userplay
   * @returns {number}
   */
  getWinType = async (
    currentLotteryDraw: Array<number>,
    userplay: Array<number>,
    superbol?: number
  ) => {
    if (superbol) {
      if (superbol != 0) {
        currentLotteryDraw.push(superbol);
      }
    }
    let order: number = await this.getOrderNumbers(
      currentLotteryDraw,
      userplay
    );
    let disorder: number = await this.getDisorderNumbers(
      currentLotteryDraw,
      userplay
    );
    if (order == 6) {
      return 1; //Grand
    } else if (order == 5) {
      return 2; //Major
    } else if (order == 4) {
      return 3; // Minor
    } else if (disorder == 6) {
      return 4; //Mini
    } else if (disorder == 5) {
      return 5; //super mini
    } else if (order == 3) {
      return 6; // bonus 1
    } else if (disorder == 4) {
      return 7; // bonus 2
    } else if (disorder == 3) {
      return 8; // bonus 3
    }
    return 0; //no gain
  };
}
export default new WinService();
