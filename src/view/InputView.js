import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/Messages.js";

const InputView = {
  async getCarNames() {
    try {
      return await Console.readLineAsync(MESSAGE.GET_CAR_NAMES);
    } catch (error) {
      throw error;
    }
  },

  async getTryNumber() {
    try {
      return await Console.readLineAsync(MESSAGE.GET_TRY_NUMBER);
    } catch (error) {
      throw error;
    }
  },
};

export default InputView;
