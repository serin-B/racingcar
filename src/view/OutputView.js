import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/Messages.js";

const OutputView = {
  printRaceResultTitle() {
    Console.print(MESSAGE.RACE_RESULT);
  },

  printRaceResult(cars) {
    cars.forEach((car) => {
      Console.print(
        `${car.getName()} : ${MESSAGE.RACE_MARK.repeat(car.getRaceResult())}`
      );
    });
    Console.print("");
  },

  printWinner(winner) {
    Console.print(`${MESSAGE.WINNER}${winner.join(", ")}`);
  },
};

export default OutputView;
