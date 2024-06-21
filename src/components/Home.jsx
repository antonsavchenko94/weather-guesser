import React from 'react';
import {Playground} from "./Playground.jsx";

export const Home = () => {
    const [gameStarted, setGameStarted] = React.useState(false);
    const handleGameStarted = () => {
        setGameStarted(true);
    }

    return (
        <div className="container">
            {gameStarted ? (
                <Playground/>
            ) : (
                <button className="btn" onClick={handleGameStarted}>Start Game</button>
            )}
        </div>
    );
};
