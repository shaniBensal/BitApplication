import React, { Component } from 'react';

const MoveList = (props) => {    
    if (props.contact && props.userMoves !== []) {
        const userMoves = props.userMoves.filter(move => move.contactId === props.contact._id)
    }
    if (props.userMoves.length > 0) {
        const move = props.userMoves.map((move, i) => {
            return (
                <li key={move.at}>
                    At: {move.at}  
                     Amount: {move.amount} Coins
                  </li>
            )
        });
        return (
            <div className="move-list">
                <ul>
                    {move}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="move-list">
                <h1>No Moves To Display</h1>
            </div>
        )
    }
}

export default MoveList;