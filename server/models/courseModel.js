const pool = require('../db');

async function getAllCourses() {
  const [rows] = await pool.query(
    `SELECT
      id,
      slug,
      title,
      description,
      language,
      sort_order AS sortOrder,
      created_at AS createdAt,
      updated_at AS updatedAt
    FROM Courses
    ORDER BY sort_order ASC, id ASC`
  );

  return rows;
}

async function getCourseBySlug(slug) {
  const [rows] = await pool.query(
    `SELECT
      id,
      slug,
      title,
      description,
      language,
      sort_order AS sortOrder,
      created_at AS createdAt,
      updated_at AS updatedAt
    FROM Courses
    WHERE slug = ?
    LIMIT 1`,
    [slug]
  );

  return rows[0] || null;
}

async function getTopicsByCourseId(courseId) {
  const [rows] = await pool.query(
    `SELECT
      t.id,
      t.slug,
      t.course_id AS courseId,
      t.title,
      t.description,
      t.sort_order AS sortOrder,
      COUNT(f.id) AS vocabularyCount,
      t.created_at AS createdAt,
      t.updated_at AS updatedAt
    FROM Topics t
    LEFT JOIN Flashcards f ON f.topic_id = t.id
    WHERE t.course_id = ?
    GROUP BY
      t.id,
      t.slug,
      t.course_id,
      t.title,
      t.description,
      t.sort_order,
      t.created_at,
      t.updated_at
    ORDER BY t.sort_order ASC, t.id ASC`,
    [courseId]
  );

  return rows;
}

module.exports = {
  getAllCourses,
  getCourseBySlug,
  getTopicsByCourseId,
};
