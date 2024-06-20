import React, { useState } from 'react';

export const AnswerForm = ({ onSubmit, hasMore }) => {
    const [answer, setAnswer] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(answer);
        setAnswer('')
    }

    const handleInputChange = (event) => {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit}>
                <label htmlFor="search-input">Your prediction</label>
                <input
                    type="number"
                    value={answer}
                    onChange={handleInputChange}
                />
                <button className="btn"  type="submit" disabled={!answer}> {hasMore ? 'Next City' : 'Reveal result'}</button>
            </form>
        </div>
    );
};
