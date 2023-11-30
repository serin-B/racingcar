import { REGEX_FOR_TRY_NUMBER } from "../constants/Regex.js";
import { ERROR_MESSAGE } from "../constants/Messages.js";

const isValidCarNames = (carNames) => {
  const cars = carNames.split(",");
  if (carNames.length === 0) {
    throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME);
  }
  if (cars.length !== [...new Set(cars)].length) {
    throw new Error(ERROR_MESSAGE.DUPLICATION_CAR_NAME);
  }

  return cars;
};

const isValidTryNumber = (tryNumber) => {
  if (!REGEX_FOR_TRY_NUMBER.test(tryNumber)) {
    throw new Error(ERROR_MESSAGE.INVALID_TRY_NUMBER);
  }

  return Number(tryNumber);
};

export { isValidCarNames, isValidTryNumber };
