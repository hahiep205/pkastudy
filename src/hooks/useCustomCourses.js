import { useState } from 'react';

const CUSTOM_KEY = 'pka_custom_courses';

const cloneCourses = (courses) => JSON.parse(JSON.stringify(courses));
const createId = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
const getInitialCourses = () => {
    try {
        return JSON.parse(localStorage.getItem(CUSTOM_KEY)) || [];
    } catch {
        return [];
    }
};

const getLatestCourses = () => {
    try {
        return JSON.parse(localStorage.getItem(CUSTOM_KEY)) || [];
    } catch {
        return [];
    }
};

export function useCustomCourses() {
    const [customCourses, setCustomCourses] = useState(getInitialCourses);

    const loadCourses = () => {
        try {
            const data = JSON.parse(localStorage.getItem(CUSTOM_KEY)) || [];
            setCustomCourses(data);
            return data;
        } catch {
            setCustomCourses([]);
            return [];
        }
    };

    const saveCourses = (courses) => {
        setCustomCourses(courses);
        localStorage.setItem(CUSTOM_KEY, JSON.stringify(courses));
    };

    // --- Helpers --- //
    const isTopicNameTaken = (name, excludeId = null) => {
        const courses = getLatestCourses();
        const normalized = name.trim().toLowerCase();
        return courses.some(t => t.title.trim().toLowerCase() === normalized && t.id !== excludeId);
    };

    // --- TOPIC CRUD --- //
    const createTopic = ({ title, description, lang }) => {
        if (isTopicNameTaken(title)) {
            return { error: 'Tên chủ đề đã tồn tại. Vui lòng chọn tên khác.' };
        }
        const courses = [...getLatestCourses()];
        const newTopic = {
            id: createId('custop'),
            title,
            description,
            lang: lang || 'en',
            words: []
        };
        courses.push(newTopic);
        saveCourses(courses);
        return newTopic;
    };

    const updateTopic = (topicId, updates) => {
        if (updates.title && isTopicNameTaken(updates.title, topicId)) {
            return { error: 'Tên chủ đề đã tồn tại. Vui lòng chọn tên khác.' };
        }
        const coursesCopy = cloneCourses(getLatestCourses());
        const topic = coursesCopy.find(t => t.id === topicId);
        if (topic) {
            Object.assign(topic, updates);
            saveCourses(coursesCopy);
        }
        return topic;
    };

    const deleteTopic = (topicId) => {
        const filtered = getLatestCourses().filter(t => t.id !== topicId);
        saveCourses(filtered);
    };

    // --- WORD CRUD --- //
    const addWordToTopic = (topicId, wordData) => {
        const coursesCopy = cloneCourses(getLatestCourses());
        const topic = coursesCopy.find(t => t.id === topicId);
        if (topic) {
            // Check duplicate word in same topic
            const exists = topic.words.some(
                w => w.word && wordData.word && w.word.trim().toLowerCase() === wordData.word.trim().toLowerCase()
            );
            if (exists) {
                return { error: `Từ "${wordData.word}" đã tồn tại trong chủ đề này.` };
            }
            topic.words.push({
                id: createId('cuswd'),
                ...wordData,
                language: wordData.language || topic.lang || 'en' // [LANGUAGE] inherited
            });
            saveCourses(coursesCopy);
        }
        return {};
    };

    const updateWordInTopic = (topicId, wordId, updates) => {
        const coursesCopy = cloneCourses(getLatestCourses());
        const topic = coursesCopy.find(t => t.id === topicId);
        if (topic) {
            const w = topic.words.find(x => x.id === wordId);
            if (w) {
                Object.assign(w, updates);
                saveCourses(coursesCopy);
            }
        }
    };

    const deleteWordFromTopic = (topicId, wordId) => {
        const coursesCopy = cloneCourses(getLatestCourses());
        const topic = coursesCopy.find(t => t.id === topicId);
        if (topic) {
            topic.words = topic.words.filter(w => w.id !== wordId);
            saveCourses(coursesCopy);
        }
    };

    const addManyWordsToTopic = (topicId, wordArray) => {
        const coursesCopy = cloneCourses(getLatestCourses());
        const topic = coursesCopy.find(t => t.id === topicId);
        if (!topic) return { added: 0, skipped: 0 };

        const existingNorm = new Set(topic.words.map(w => (w.word || '').trim().toLowerCase()));
        let added = 0;
        let skipped = 0;

        wordArray.forEach(wd => {
            const norm = (wd.word || '').trim().toLowerCase();
            if (!norm || existingNorm.has(norm)) {
                skipped++;
                return;
            }
            existingNorm.add(norm);
            topic.words.push({
                id: createId('cuswd'),
                ...wd,
                language: wd.language || topic.lang || 'en'
            });
            added++;
        });

        saveCourses(coursesCopy);
        return { added, skipped };
    };

    return {
        customCourses,
        createTopic,
        updateTopic,
        deleteTopic,
        addWordToTopic,
        updateWordInTopic,
        deleteWordFromTopic,
        addManyWordsToTopic,
        refresh: loadCourses
    };
}
