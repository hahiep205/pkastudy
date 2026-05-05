CREATE DATABASE IF NOT EXISTS pkastudy;
USE pkastudy;

CREATE TABLE IF NOT EXISTS Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS User_Progress (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  current_xp INT NOT NULL DEFAULT 0,
  level INT NOT NULL DEFAULT 1,
  current_streak INT NOT NULL DEFAULT 0,
  last_study_date DATE NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_user_progress_user FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(100) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  description TEXT DEFAULT NULL,
  language VARCHAR(20) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Topics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT DEFAULT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_topics_course FOREIGN KEY (course_id) REFERENCES Courses(id) ON DELETE CASCADE,
  INDEX idx_topics_course_id (course_id)
);

CREATE TABLE IF NOT EXISTS Flashcards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  topic_id INT NOT NULL,
  word VARCHAR(255) NOT NULL,
  meaning VARCHAR(255) NOT NULL,
  example TEXT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_flashcards_topic FOREIGN KEY (topic_id) REFERENCES Topics(id) ON DELETE CASCADE,
  INDEX idx_flashcards_topic_id (topic_id)
);

INSERT INTO Courses (slug, title, description, language, sort_order)
SELECT 'toeic-basic', 'TOEIC Basic', 'Foundational TOEIC vocabulary and themes.', 'en', 1
WHERE NOT EXISTS (SELECT 1 FROM Courses WHERE slug = 'toeic-basic');

DELETE FROM Courses WHERE slug = 'topik1-basic';

DELETE t
FROM Topics t
JOIN Courses c ON c.id = t.course_id
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '📄 Lesson 1: Contracts', 'Từ vựng TOEIC theo chủ đề Contracts trong ngữ cảnh công việc và giao tiếp thực tế.', 1
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '📣 Lesson 2: Marketing', 'Từ vựng TOEIC theo chủ đề Marketing trong ngữ cảnh công việc và giao tiếp thực tế.', 2
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, 'Lesson 3: Warranties', 'Từ vựng TOEIC theo chủ đề Warranties trong ngữ cảnh công việc và giao tiếp thực tế.', 3
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, 'Lesson 4: Business Planning', 'Từ vựng TOEIC theo chủ đề Business Planning trong ngữ cảnh công việc và giao tiếp thực tế.', 4
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🎤 Lesson 5: Conferences', 'Từ vựng TOEIC theo chủ đề Conferences trong ngữ cảnh công việc và giao tiếp thực tế.', 5
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '💻 Lesson 6: Computers', 'Từ vựng TOEIC theo chủ đề Computers trong ngữ cảnh công việc và giao tiếp thực tế.', 6
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, 'Lesson 7: Office Technology', 'Từ vựng TOEIC theo chủ đề Office Technology trong ngữ cảnh công việc và giao tiếp thực tế.', 7
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '📋 Lesson 8: Office Procedures', 'Từ vựng TOEIC theo chủ đề Office Procedures trong ngữ cảnh công việc và giao tiếp thực tế.', 8
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🔌 Lesson 9: Electronics', 'Từ vựng TOEIC theo chủ đề Electronics trong ngữ cảnh công việc và giao tiếp thực tế.', 9
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '✉️ Lesson 10: Correspondence', 'Từ vựng TOEIC theo chủ đề Correspondence trong ngữ cảnh công việc và giao tiếp thực tế.', 10
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '📢 Lesson 11: Job Advertising & Recruiting', 'Từ vựng TOEIC theo chủ đề Job Advertising & Recruiting trong ngữ cảnh công việc và giao tiếp thực tế.', 11
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '📝 Lesson 12: Applying & Interviewing', 'Từ vựng TOEIC theo chủ đề Applying & Interviewing trong ngữ cảnh công việc và giao tiếp thực tế.', 12
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '👥 Lesson 13: Hiring & Training', 'Từ vựng TOEIC theo chủ đề Hiring & Training trong ngữ cảnh công việc và giao tiếp thực tế.', 13
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '💵 Lesson 14: Salaries & Benefits', 'Từ vựng TOEIC theo chủ đề Salaries & Benefits trong ngữ cảnh công việc và giao tiếp thực tế.', 14
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🏆 Lesson 15: Promotions & Awards', 'Từ vựng TOEIC theo chủ đề Promotions & Awards trong ngữ cảnh công việc và giao tiếp thực tế.', 15
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, 'Lesson 16: Shopping', 'Từ vựng TOEIC theo chủ đề Shopping trong ngữ cảnh công việc và giao tiếp thực tế.', 16
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '📦 Lesson 17: Ordering Supplies', 'Từ vựng TOEIC theo chủ đề Ordering Supplies trong ngữ cảnh công việc và giao tiếp thực tế.', 17
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🚚 Lesson 18: Shipping', 'Từ vựng TOEIC theo chủ đề Shipping trong ngữ cảnh công việc và giao tiếp thực tế.', 18
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🧾 Lesson 19: Invoices', 'Từ vựng TOEIC theo chủ đề Invoices trong ngữ cảnh công việc và giao tiếp thực tế.', 19
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '📚 Lesson 20: Inventory', 'Từ vựng TOEIC theo chủ đề Inventory trong ngữ cảnh công việc và giao tiếp thực tế.', 20
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🏦 Lesson 21: Banking', 'Từ vựng TOEIC theo chủ đề Banking trong ngữ cảnh công việc và giao tiếp thực tế.', 21
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '📊 Lesson 22: Accounting', 'Từ vựng TOEIC theo chủ đề Accounting trong ngữ cảnh công việc và giao tiếp thực tế.', 22
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '📈 Lesson 23: Investments', 'Từ vựng TOEIC theo chủ đề Investments trong ngữ cảnh công việc và giao tiếp thực tế.', 23
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🧮 Lesson 24: Taxes', 'Từ vựng TOEIC theo chủ đề Taxes trong ngữ cảnh công việc và giao tiếp thực tế.', 24
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🏢 Lesson 25: Property & Departments', 'Từ vựng TOEIC theo chủ đề Property & Departments trong ngữ cảnh công việc và giao tiếp thực tế.', 25
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🪑 Lesson 26: Board Meetings', 'Từ vựng TOEIC theo chủ đề Board Meetings trong ngữ cảnh công việc và giao tiếp thực tế.', 26
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '✅ Lesson 27: Quality Control', 'Từ vựng TOEIC theo chủ đề Quality Control trong ngữ cảnh công việc và giao tiếp thực tế.', 27
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🧪 Lesson 28: Product Development', 'Từ vựng TOEIC theo chủ đề Product Development trong ngữ cảnh công việc và giao tiếp thực tế.', 28
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🔑 Lesson 29: Renting & Leasing', 'Từ vựng TOEIC theo chủ đề Renting & Leasing trong ngữ cảnh công việc và giao tiếp thực tế.', 29
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, 'Lesson 30: Selecting a Restaurant', 'Từ vựng TOEIC theo chủ đề Selecting a Restaurant trong ngữ cảnh công việc và giao tiếp thực tế.', 30
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🍴 Lesson 31: Eating Out', 'Từ vựng TOEIC theo chủ đề Eating Out trong ngữ cảnh công việc và giao tiếp thực tế.', 31
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🥪 Lesson 32: Ordering Lunch', 'Từ vựng TOEIC theo chủ đề Ordering Lunch trong ngữ cảnh công việc và giao tiếp thực tế.', 32
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '👨Lesson 33: Cooking as a Career', 'Từ vựng TOEIC theo chủ đề Cooking as a Career trong ngữ cảnh công việc và giao tiếp thực tế.', 33
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🎉 Lesson 34: Events', 'Từ vựng TOEIC theo chủ đề Events trong ngữ cảnh công việc và giao tiếp thực tế.', 34
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '✈️ Lesson 35: General Travel', 'Từ vựng TOEIC theo chủ đề General Travel trong ngữ cảnh công việc và giao tiếp thực tế.', 35
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🛫 Lesson 36: Airlines', 'Từ vựng TOEIC theo chủ đề Airlines trong ngữ cảnh công việc và giao tiếp thực tế.', 36
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🚆 Lesson 37: Trains', 'Từ vựng TOEIC theo chủ đề Trains trong ngữ cảnh công việc và giao tiếp thực tế.', 37
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🏨 Lesson 38: Hotels', 'Từ vựng TOEIC theo chủ đề Hotels trong ngữ cảnh công việc và giao tiếp thực tế.', 38
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🚗 Lesson 39: Car Rentals', 'Từ vựng TOEIC theo chủ đề Car Rentals trong ngữ cảnh công việc và giao tiếp thực tế.', 39
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🎬 Lesson 40: Movies', 'Từ vựng TOEIC theo chủ đề Movies trong ngữ cảnh công việc và giao tiếp thực tế.', 40
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🎭 Lesson 41: Theater', 'Từ vựng TOEIC theo chủ đề Theater trong ngữ cảnh công việc và giao tiếp thực tế.', 41
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🎵 Lesson 42: Music', 'Từ vựng TOEIC theo chủ đề Music trong ngữ cảnh công việc và giao tiếp thực tế.', 42
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, 'Lesson 43: Museums', 'Từ vựng TOEIC theo chủ đề Museums trong ngữ cảnh công việc và giao tiếp thực tế.', 43
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '📰 Lesson 44: Media', 'Từ vựng TOEIC theo chủ đề Media trong ngữ cảnh công việc và giao tiếp thực tế.', 44
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🩺 Lesson 45: Doctor’s Office', 'Từ vựng TOEIC theo chủ đề Doctor’s Office trong ngữ cảnh công việc và giao tiếp thực tế.', 45
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🦷 Lesson 46: Dentist’s Office', 'Từ vựng TOEIC theo chủ đề Dentist’s Office trong ngữ cảnh công việc và giao tiếp thực tế.', 46
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '💳 Lesson 47: Health Insurance', 'Từ vựng TOEIC theo chủ đề Health Insurance trong ngữ cảnh công việc và giao tiếp thực tế.', 47
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🏥 Lesson 48: Hospitals', 'Từ vựng TOEIC theo chủ đề Hospitals trong ngữ cảnh công việc và giao tiếp thực tế.', 48
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '💊 Lesson 49: Pharmacy', 'Từ vựng TOEIC theo chủ đề Pharmacy trong ngữ cảnh công việc và giao tiếp thực tế.', 49
FROM Courses c
WHERE c.slug = 'toeic-basic';

INSERT INTO Topics (course_id, title, description, sort_order)
SELECT c.id, '🔄 Lesson 50: Review', 'Từ vựng TOEIC theo chủ đề Review trong ngữ cảnh công việc và giao tiếp thực tế.', 50
FROM Courses c
WHERE c.slug = 'toeic-basic';
