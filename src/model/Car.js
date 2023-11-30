import { REGEX_FOR_CAR_NAME } from "../constants/Regex.js";
import { ERROR_MESSAGE } from "../constants/Messages.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { PICK_NUMBER_VALUE } from "../constants/Values.js";

class Car {
  #name;
  #raceResult;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
    this.#raceResult = 0;
  }

  #validate(name) {
    if (!REGEX_FOR_CAR_NAME.test(name.length)) {
      throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME);
    }
  }

  chooseGoOrStop() {
    const number = MissionUtils.Random.pickNumberInRange(
      PICK_NUMBER_VALUE.MIN,
      PICK_NUMBER_VALUE.MAX
    );
    if (number >= PICK_NUMBER_VALUE.GO) {
      this.#raceResult += 1;
      return true;
    }
    return false;
  }

  getName() {
    return this.#name;
  }

  getRaceResult() {
    return this.#raceResult;
  }
}

export default Car;
