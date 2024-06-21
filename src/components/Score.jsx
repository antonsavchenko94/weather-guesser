import React from 'react';
import { useScore } from "../hooks/useScore.js";

export const Score = ({ userAnswers, playAgain }) => {
    const { guessedNumber, userScore} = useScore(userAnswers);

    return (
        <div>
            {userScore.length > 0 ? (
                <>
                    <h2>Score {guessedNumber}</h2>
                    <p>{`You ${guessedNumber > 2 ? 'win' : 'lost'}`}</p>
                    <ul className="results">
                        {
                            userScore.map((score) => (
                                <li key={score.city} className={score.guessed ? 'correct' : 'incorrect'}>
                                    {`${score.city}: Your value ${score.userAnswer}°C, real temperature ${score.realTemp}°C`}
                                </li>
                            ))
                        }
                    </ul>
                    <button className="btn" onClick={playAgain}>Play again</button>
                </>
            ) : 'loading...'}
        </div>
    );
};
