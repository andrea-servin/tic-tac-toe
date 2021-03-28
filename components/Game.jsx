import React, { useState } from 'react'
import calculateWinner from '../utils/calculateWinner'
import Board from './Board'

const Game = () => {

    const [board, setboard] = useState(Array(9).fill(null))
    const [nextX, setnextX] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = () => {

    }

    const jumpTo = () => {
        
    }

    const renderMoves = () => {
        
    }

    return (
            <Board squares={board} onClick={handleClick} />
    )
}

export default Game
