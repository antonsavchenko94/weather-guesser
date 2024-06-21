import React from 'react';
import { AnswerForm } from "./AnswerForm.jsx";
import { Score } from "./Score.jsx";
import { usePlayground } from "../hooks/usePlayground.js";

export const Playground = () => {
    const {
        hasMore,
        goForward,
        playAgain,
        showResult,
        userAnswers,
        currentCity,
    } = usePlayground();

    return (
        <div>
            {!showResult ? (
                <>
                    <h2>{currentCity.name}</h2>
                    <AnswerForm onSubmit={goForward} hasMore={hasMore}/>
                    <div className="guessList">
                        {!!userAnswers.length && (
                            <>
                                <h3>Your answers</h3>
                                <ul className="guesses">
                                    {userAnswers.map((answer) => (
                                        <li key={answer.city}>
                                            {`${answer.city}: ${answer.userAnswer}°C`}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                </>
            ) : (
                <Score userAnswers={userAnswers} playAgain={playAgain}/>
            )}
        </div>
    );
};


