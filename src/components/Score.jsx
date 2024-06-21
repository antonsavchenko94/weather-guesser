import React from 'react';
import { useScore } from "../hooks/useScore.js";

export const Score = ({ userAnswers }) => {
    const { guessedNumber, userScore} = useScore(userAnswers);

    return (
        <div>
            {userScore.length > 0 ? (
                <>
                    <h2>Score {guessedNumber}</h2>
                    <ul className="results">
                        {
                            userScore.map((score) => (
                                <li key={score.city} className={score.guessed ? 'correct' : 'incorrect'}>
                                    {`${score.city}: Your value ${score.userAnswer}°C, real temperature ${score.realTemp}°C`}
                                </li>
                            ))
                        }
                    </ul>
                    <button className="btn">Play again</button>
                </>
            ) : 'loading'}
        </div>
    );
};
