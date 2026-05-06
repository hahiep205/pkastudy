const {
  getTopicBySlug,
  getFlashcardsByTopicId,
} = require('../models/topicModel');

async function fetchFlashcardsByTopicSlug(topicSlug) {
  const topic = await getTopicBySlug(topicSlug);
  if (!topic) {
    const error = new Error('Topic not found');
    error.status = 404;
    throw error;
  }

  return getFlashcardsByTopicId(topic.id);
}

module.exports = {
  fetchFlashcardsByTopicSlug,
};
