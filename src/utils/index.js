export const getRandomElements = (arr, count = 5) => {
    let arrayCopy = arr.slice();

    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }

    return arrayCopy.slice(0, count);
}


export const createGameHash = () => Date.now() + '-game';