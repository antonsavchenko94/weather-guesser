import { useMemo, useState } from "react";
import citiesData from "../cities.json";

function getRandomElements(arr, count = 5) {
    let arrayCopy = arr.slice();

    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }

    return arrayCopy.slice(0, count);
}

export const usePlayground = () => {
    const cities = useMemo(() => {
        return getRandomElements(citiesData, 5);
    }, []);
    const [currentCityIndex, setCurrentCityIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const hasMore = currentCityIndex < cities.length - 1;

    const goForward = (answer) => {
        const allAnswers = [...userAnswers];
        const {name: city, lat, lng} = cities[currentCityIndex]
        allAnswers[currentCityIndex] = {
            city,
            lat,
            lng,
            userAnswer: answer,
        };

        setUserAnswers(allAnswers);

        if (hasMore) {
            setCurrentCityIndex((prevState) => prevState + 1);
        } else {
            setShowResult(true);
        }
    }
    // TODO: play again button
    const playAgain = () => {
        setShowResult(false)
        setCurrentCityIndex(0);
        setUserAnswers([]);
    }

    return {
        hasMore,
        goForward,
        showResult,
        userAnswers,
        currentCity: cities[currentCityIndex]
    }
}
