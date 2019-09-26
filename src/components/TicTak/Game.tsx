import * as React from 'react';
import Board from './Board';

interface State {
    history: Array<{ squares: Array<string> }>,
    stepNumber: number,
    xIsNext: boolean
}

const Game = () => {
    const [history, setHistory] = React.useState([
        {
            squares: Array(9).fill(null)
        }
    ]);
    const [stepNumber, setStepNumber] = React.useState(0);
    const [xIsNext, setXIsNext] = React.useState(true);
    const calculateWinner = (squares:Array<string>) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    const handleClick = (i: number) => {
        const histories = history.slice(0, stepNumber + 1);
        const current = histories[histories.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? "X" : "O";

        setHistory(histories.concat([
            {
                squares: squares
            }
        ]));
        setStepNumber(histories.length);

        setXIsNext(!xIsNext);
    }

    const jumpTo = (step: number) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }
    let winner: string = '', moves: any;
    let status:string;
    const init = () => {
       
            winner = calculateWinner(history[stepNumber].squares);

            moves = history.map((step, move) => {
                const desc = move ?
                    'Go to move #' + move :
                    'Go to game start';
                return (
                    <li key={move}>
                        <button onClick={() => jumpTo(move)}>{desc}</button>
                    </li>
                );
            });

            if (winner) {
                status = "Winner: " + winner;
            } else {
                status = "Next player: " + (xIsNext ? "X" : "O");
            }
    }
    // React.useEffect(() => {
    //     init();
    // }, []);

    init();
    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={history[stepNumber].squares}
                    onClick={i => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );

}
export default Game;