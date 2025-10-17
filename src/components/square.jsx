import React from "react";
import Square from "./square";
import { useState } from 'react'
const Board  = () => {
const [state, setState] = useState(Array(9).fill(null)) ;
const [isTurn, setTurn] = useState(true) ;


const checkWinner = () => {
    const winnerlogic = [
        [0,1,2],[3,4,5], [6,7,8], // Row-wise
        [0,3,6],[1,4,7],[2,5,8],  // Col-wise
        [0,4,8],[2,4,6]          // Diagonal-wise
    ];
    for(let logic of winnerlogic) {
        const [a,b,c] = logic ;
        if (state[a] !== null && state[b] !== null && state[c] !== null) {
            if (state[a] === state[b] && state[a] === state[c]) {
               return state[a] ;
            }
        }
    }
    return false ;
}

const isWinner = checkWinner() ;
const isDraw = state.every((value) => value !== null);

const handleclick = (index) => {
const copystate = [...state];
if (copystate[index] !== null) return ;
copystate[index] = (isTurn ? "X" : "O")  ;
setState(copystate);
setTurn(!isTurn) ; 
}

const handlerestart = () => {
    setState(Array(9).fill(null)) ;
    setTurn(true) ;
};

return (
    <div className="board-container">
        {isWinner ? (
            <>
                Player {isWinner} has won 
                <button onClick={() => handlerestart()}>Play Again</button>
            </>
        ) : isDraw ? (
            <>
                Game is Draw 
                <button onClick={() => handlerestart()}>Play Again</button>
            </>
        ) : (
            <>
                <h3>Player {isTurn ? "X" : "O"}, please play your move.</h3>
                <div className="board-row">
                    <Square onClick={() => handleclick(0)} value={state[0]} />
                    <Square onClick={() => handleclick(1)} value={state[1]} />
                    <Square onClick={() => handleclick(2)} value={state[2]} />
                </div>
                <div className="board-row">
                    <Square onClick={() => handleclick(3)} value={state[3]} />
                    <Square onClick={() => handleclick(4)} value={state[4]} />
                    <Square onClick={() => handleclick(5)} value={state[5]} />
                </div>
                <div className="board-row">
                    <Square onClick={() => handleclick(6)} value={state[6]} />
                    <Square onClick={() => handleclick(7)} value={state[7]} />
                    <Square onClick={() => handleclick(8)} value={state[8]} />
                </div>
            </>
        )}
    </div>
);

} 
export default Board ;