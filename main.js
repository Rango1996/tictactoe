const GameBoard = (() => {
    let board = Array(9).fill(null);

    const getBoard = () => board; 

    const setMark = (index, mark) => {
        if (index >= 0 && index < board.length && !board[index]) {
            board[index] = mark; 
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        board = Array(9).fill(null);
    };

    return {
        getBoard,
        setMark,
        resetBoard
    };
})();

const Player = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;

    return {
        getName, 
        getMark
    };
;}

const GameController = (() => {
    let player1 = Player('Player 1', 'X');
    let player2 = Player('Player 2', 'O');
    let currentPlayer = null; 

    const startGame = () => {
        currentPlayer = player1; 
    };

    const resetGame = () => {
        GameBoard.resetBoard();
    };

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const getCurrentPlayer = () => currentPlayer;

    return {
        startGame,
        resetGame,
        switchPlayer,
        getCurrentPlayer,
    };
})();