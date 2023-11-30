const MESSAGE = Object.freeze({
  GET_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  GET_TRY_NUMBER: "시도할 횟수는 몇 회인가요?\n",
  RACE_RESULT: "\n실행 결과",
  RACE_MARK: "-",
  WINNER: "최종 우승자 : ",
});

const ERROR_MESSAGE = Object.freeze({
  INVALID_CAR_NAME: `[ERROR] 자동차 이름이 잘못된 형식입니다.`,
  DUPLICATION_CAR_NAME: `[ERROR] 자동차 이름은 중복될 수 없습니다.`,
  INVALID_TRY_NUMBER: `[ERROR] 시도 횟수가 잘못된 형식입니다.`,
});

export { MESSAGE, ERROR_MESSAGE };
