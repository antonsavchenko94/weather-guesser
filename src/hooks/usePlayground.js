import { useMemo, useState } from "react";
import citiesData from "../cities.json";
import { getRandomElements, createGameHash } from "../utils/index.js";

export const usePlayground = () => {
    const [gameHash, setGameHash] = useState(createGameHash());
    const cities = useMemo(() => {
        return getRandomElements(citiesData);
    }, [gameHash]);
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
    const playAgain = () => {
        setShowResult(false)
        setCurrentCityIndex(0);
        setUserAnswers([]);
        setGameHash(createGameHash);
    }

    return {
        hasMore,
        goForward,
        playAgain,
        showResult,
        userAnswers,
        currentCity: cities[currentCityIndex]
    }
}
