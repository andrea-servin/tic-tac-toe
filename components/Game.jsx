import React, { useState } from 'react'
import calculateWinner from '../utils/calculateWinner'
import Board from './Board'
const style = {
    width: "200px",
    margin: "20px auto"
}
const Game = () => {

    const [board, setboard] = useState(Array(9).fill(null))
    const [nextX, setnextX] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (i) => {
        const boardCopy = [...board]
        if (winner || boardCopy[i]) return
        boardCopy[i] = nextX ? 'X' : 'O'
        setboard(boardCopy)
        setnextX(!nextX)
    }

    const jumpTo = () => {

    }

    const renderMoves = () => {
        return <button style={{ width: "80px", height: "30px", background: "lightblue", color: "blue", outline: "none" }} onClick={() => setboard(Array(9).fill(null))}>Start Game</button>
    }

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={style}>
                <p>{winner ? "Winner: " + winner : "Next Player: " + (nextX ? "X" : "O")}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game
