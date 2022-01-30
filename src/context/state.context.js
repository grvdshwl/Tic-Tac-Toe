import { createContext, useCallback, useEffect, useState } from "react";
import { findBestMove, findWinner } from "./state.utils";

export const StateContext = createContext({
  userIcon: "",
  computerIcon: "",
  cells: "",
  playerTurn: true,
  handleCellClick: () => {},
  handleSelectIcon: () => {},
});

export const StateContextProvider = ({ children }) => {
  const [userIcon, setUserIcon] = useState("");
  const [computerIcon, setComputerIcon] = useState("");
  const [playerTurn, setPlayerTurn] = useState(true);
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [gameStatusMessage, setGameStatusMessage] = useState("");
  const [cells, setCells] = useState(new Array(9).fill(""));

  const checkGameStatus = useCallback(
    (board) => {
      const winner = findWinner(board);
      if (winner === userIcon && gameStatusMessage === "") {
        setPlayerWins((prevWins) => prevWins + 1);
        setGameStatusMessage("You Win");
        resetGame();
      }
      if (winner === computerIcon && gameStatusMessage === "") {
        setComputerWins((prevWins) => prevWins + 1);
        setGameStatusMessage("You Lose");
        resetGame();
      }

      if (winner === "draw" && gameStatusMessage === "") {
        setGameStatusMessage("Draw");
        resetGame();
      }
    },
    [computerIcon, userIcon, gameStatusMessage]
  );

  const computerPlays = useCallback(
    (board) => {
      const move = findBestMove(board, computerIcon);
      const array = [...board];

      if (!!board[`${move}`]) {
        return;
      }

      if (!playerTurn) {
        array[`${move}`] = computerIcon;
        setPlayerTurn(true);
      }

      checkGameStatus(array);
      setCells(array);
    },
    [computerIcon, checkGameStatus, playerTurn]
  );

  useEffect(() => {
    if (!playerTurn) {
      computerPlays(cells);
    }
  }, [cells, computerPlays, playerTurn]);

  const handleCellClick = (event) => {
    const array = [...cells];
    const { id } = event.target;
    if (!!cells[`${id}`]) {
      return;
    }

    if (!!playerTurn) {
      array[`${id}`] = userIcon;
      setPlayerTurn(false);
    }

    checkGameStatus(array);
    setCells(array);
  };

  const handleSelectIcon = (event) => {
    const { innerHTML } = event.target;

    const compIcon = innerHTML === "X" ? "O" : "X";

    setUserIcon(innerHTML);
    setComputerIcon(compIcon);
  };

  const resetGame = () => {
    setPlayerTurn(true);

    setTimeout(() => {
      setCells(new Array(9).fill(""));
      setGameStatusMessage("");
    }, [1000]);
  };

  let context = {
    userIcon,
    computerIcon,
    cells,
    playerTurn,
    handleCellClick,
    handleSelectIcon,
    playerWins,
    computerWins,
    gameStatusMessage,
  };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
};
