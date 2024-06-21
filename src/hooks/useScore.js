import { useEffect, useMemo, useState } from "react";

const fetchRealWeatherData = async (city) => {
    const { lat, lng } = city;
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`
    )
        .then(response => response.json())
        .then(data => {
            const realTemp = Math.round(data?.main?.temp)
            const guessed = Math.abs((+city.userAnswer) - realTemp) <= 5
            return {
                ...city,
                guessed,
                realTemp,
            }
        })
}

export const useScore = (userAnswers) => {
    const [userScore, setUserScore] = useState([]);
    const guessedNumber = useMemo(() => userScore.filter(item => item.guessed).length, [userScore])

    useEffect(() => {
        const promises = userAnswers.map((userAnswer) => fetchRealWeatherData(userAnswer));
        Promise.all(promises).then(result => setUserScore(result));
    }, []);

    return { userScore, guessedNumber }
}