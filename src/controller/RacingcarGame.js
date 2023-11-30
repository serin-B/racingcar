import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { isValidTryNumber, isValidCarNames } from "../utils/Validate.js";
import Car from "../model/Car.js";

class RacingcarGame {
  #cars;
  #tryNumber;

  async start() {
    await this.#getValidCars();
    await this.#getValidTryNumber();

    OutputView.printRaceResultTitle();

    for (let i = 0; i < this.#tryNumber; i++) {
      this.#race();
      OutputView.printRaceResult(this.#cars);
    }

    OutputView.printWinner(this.#getWinner());
  }

  async #getValidCars() {
    const carNames = isValidCarNames(await InputView.getCarNames());
    this.#cars = carNames.map((el) => new Car(el));
  }

  async #getValidTryNumber() {
    this.#tryNumber = isValidTryNumber(await InputView.getTryNumber());
  }

  #race() {
    this.#cars.forEach((car) => {
      car.chooseGoOrStop();
    });
  }

  #getWinner() {
    let max = 0;
    let winner = [];

    this.#cars.forEach((car) => {
      if (max === car.getRaceResult()) {
        winner.push(car.getName());
      }
      if (max < car.getRaceResult()) {
        max = car.getRaceResult();
        winner = [car.getName()];
      }
    });

    return winner;
  }
}

export default RacingcarGame;
