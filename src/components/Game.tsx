import { useState, useEffect, type FunctionComponent } from "react";

import topWords from "../top-words.txt?raw";

/**
 * Selects random words from the top words list
 * @param count Number of words to select
 * @returns Array of randomly selected words
 */
const getRandomWords = (count: number = 20): string[] => {
    // Split the content into lines and remove any comments or empty lines
    const wordList = topWords.split('\n')

    const result: string[] = [];
    const wordCount = wordList.length;

    // Get unique random words
    while (result.length < count) {
        const randomIndex = Math.floor(Math.random() * wordCount);
        const word = wordList[randomIndex];

        if (!result.includes(word)) {
            result.push(word);
        }
    }

    return result;
};

interface GameProps {
}

const Game: FunctionComponent<GameProps> = () => {
    const [words, setWords] = useState<string[]>([]);

    useEffect(() => {
        setWords(getRandomWords(20));
    }, []);

    const refreshClicked = () => {
        setWords(getRandomWords(20));
    }

    return (
        <div>
            <div>
                {words.map((word) => (
                    <>{word} </>
                ))}
            </div>
            <button onClick={refreshClicked}>Refresh</button>
        </div>
    );
}

export default Game;