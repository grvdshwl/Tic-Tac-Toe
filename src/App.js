import { useContext } from "react";
import "./App.css";
import ModalBackground from "./components/ModalBackground/ModalBackground.component";
import SelectModal from "./components/SelectModal/SelectModal";
import StatusModal from "./components/StatusModal/StatusModal";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import { StateContext } from "./context/state.context";

function App() {
  const { userIcon, handleSelectIcon, gameStatusMessage } =
    useContext(StateContext);

  return (
    <div className="App">
      <>
        <ModalBackground hide={!!userIcon}>
          <SelectModal onClick={handleSelectIcon} />
        </ModalBackground>
        <ModalBackground hide={!gameStatusMessage}>
          <StatusModal message={gameStatusMessage} />
        </ModalBackground>

        <TicTacToe />
      </>
    </div>
  );
}

export default App;
