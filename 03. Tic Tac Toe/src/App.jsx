import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="😒" />
          <Player initialName="Player 2" symbol="😂" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
