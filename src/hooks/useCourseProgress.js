import { useState } from 'react';
import { syncRememberedWordProgress } from '../utils/dashboardProgress';

const STORAGE_KEY = 'pka_remembered';

function getInitialRememberedWords() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

export function useCourseProgress() {
    const [remembered, setRemembered] = useState(getInitialRememberedWords);

    const saveRemembered = (newMap) => {
        const previousMap = remembered;
        setRemembered(newMap);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newMap));
        syncRememberedWordProgress(previousMap, newMap);
    };

    const toggleWord = (wordId) => {
        const newMap = { ...remembered };
        if (newMap[wordId]) {
            delete newMap[wordId];
        } else {
            newMap[wordId] = true;
        }
        saveRemembered(newMap);
    };

    const markWordRemembered = (wordId, isRemembered = true) => {
        const newMap = { ...remembered };
        if (isRemembered) {
            newMap[wordId] = true;
        } else {
            delete newMap[wordId];
        }
        saveRemembered(newMap);
    };

    const replaceRememberedInTopic = (topicWordIds, selectedWordIds) => {
        const newMap = { ...remembered };
        const selectedSet = new Set(selectedWordIds);

        topicWordIds.forEach((wordId) => {
            if (selectedSet.has(wordId)) {
                newMap[wordId] = true;
            } else {
                delete newMap[wordId];
            }
        });

        saveRemembered(newMap);
    };

    return {
        remembered,
        toggleWord,
        markWordRemembered,
        replaceRememberedInTopic,
    };
}
