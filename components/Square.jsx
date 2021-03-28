import React from 'react'

const style = {
    background: "lightblue",
    border: "2px solid blue",
    fontSize: "30px",
    fontWeight: "bold",
    cursor: "pointer",
    outline: "none"
}

const Square = ({ value, onClick }) => {
    return (
        <button style={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square
