const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const findWinner = (board) => {
  for (let pattern of winningPattern) {
    let firstIndex = pattern[0];
    let secondIndex = pattern[1];
    let thirdIndex = pattern[2];
    let conditionOne = board[`${firstIndex}`] === board[`${secondIndex}`];
    let conditionTwo = board[`${thirdIndex}`] === board[`${secondIndex}`];
    let conditionThree = board[`${firstIndex}`] !== "";
    if (conditionOne && conditionTwo && conditionThree) {
      return board[`${firstIndex}`];
    }
  }

  if (!board.includes("")) {
    return "draw";
  }

  return null;
};

export const findBestMove = (board, compIcon) => {
  let bestScore = -Infinity;
  let bestMove;

  for (let index in board) {
    if (board[index] === "") {
      let newBoard = [...board];
      newBoard[`${index}`] = compIcon;

      const score = miniMaxAI(newBoard, 0, false, compIcon);

      if (score > bestScore) {
        bestMove = index;
      }

      bestScore = Math.max(+bestScore, +score);
    }
  }
  return bestMove;
};

const miniMaxAI = (board, depth, isMaximizing, compIcon) => {
  const userIcon = compIcon === "X" ? "O" : "X";
  const gameMap = {
    [compIcon]: 1,
    [userIcon]: -1,
    draw: 0,
  };
  const winner = findWinner(board);

  if (!!winner) {
    return gameMap[winner];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;

    for (let index in board) {
      if (board[index] === "") {
        let newBoard = [...board];
        newBoard[`${index}`] = compIcon;

        const score = miniMaxAI(newBoard, depth + 1, false, compIcon);

        bestScore = Math.max(+bestScore, +score);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;

    for (let index in board) {
      if (board[index] === "") {
        let newBoard = [...board];
        newBoard[`${index}`] = userIcon;

        const score = miniMaxAI(newBoard, depth + 1, true, compIcon);

        bestScore = Math.min(+bestScore, +score);
      }
    }
    return bestScore;
  }
};
