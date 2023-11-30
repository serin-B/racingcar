import RacingcarGame from "./controller/RacingcarGame.js";

class App {
  async play() {
    const game = new RacingcarGame();
    await game.start();
  }
}

export default App;
