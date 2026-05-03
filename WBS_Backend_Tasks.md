# Bảng Phân Rã Công Việc Siêu Chi Tiết (Ultra-detailed WBS)
Dự án: **PKAstudy Backend** | Stack: **Node.js + MySQL** | Thời gian: **1 Tháng** | Quy mô: **3 Thành viên**

> [!NOTE]
> Tài liệu này đóng vai trò như một "Bản thiết kế thi công". Các thành viên chỉ cần bám sát các luồng Logic, Input và Output dưới đây để viết code bằng **Node.js (Express)** và tương tác với **MySQL**.

---

## 👤 THÀNH VIÊN 1: CORE, AUTH & INFRASTRUCTURE

### Task 1: Khởi tạo Project & Infrastructure (Hạn: 06/05)
- [ ] **1.1 Khởi tạo Project:**
  - *Mô tả:* Chạy `npm init -y`, cài đặt `express`, `nodemon`. Tạo nhánh Git `main` và `dev`.
  - *Cấu trúc thư mục:* Tạo các folder `src/controllers`, `src/models`, `src/routes`, `src/services`, `src/middlewares`, `src/utils`.
- [ ] **1.2 Global Error Handler (Bắt lỗi toàn cục):**
  - *Logic:* Viết 1 error-handling middleware trong Express `app.use((err, req, res, next) => {...})`. Mọi lỗi `next(err)` đều lọt vào đây.
  - *Output mong muốn:* `{ "success": false, "status_code": 500, "message": "Nội dung lỗi" }`.
- [ ] **1.3 Cấu hình CORS:**
  - *Logic:* Cài `npm install cors`. Setup `app.use(cors({ origin: 'http://localhost:5173', credentials: true }))`.

### Task 2: Database & Storage (Hạn: 10/05)
- [ ] **2.1 Kết nối MySQL Database:**
  - *Logic:* Dùng thư viện `mysql2` hoặc ORM như **Prisma** / **Sequelize**. Khởi tạo connection pool. Đọc chuỗi kết nối từ file `.env` (`DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`).
- [ ] **2.2 Media Storage:**
  - *Logic:* Viết service upload. Cài thư viện `multer` để nhận file (Audio TOEIC/Ảnh) và lưu vào thư mục local `public/uploads` hoặc up thẳng lên Cloudinary.

### Task 3: Authentication System (Hạn: 17/05)
- [ ] **3.1 API Đăng ký (`POST /api/auth/register`)**
  - *Input Body:* `{ "email": "user@gmail.com", "password": "123456", "name": "Nguyễn Văn A" }`
  - *Validation:* Dùng thư viện `Joi` hoặc `Zod` để check email đúng format, pass > 6 ký tự.
  - *Logic:* 
    1. Lệnh SQL `SELECT` email -> Nếu có trả 400.
    2. Cài `npm install bcrypt`, gọi `bcrypt.hash(password, 10)`.
    3. Lệnh SQL `INSERT INTO Users...`.
- [ ] **3.2 API Đăng nhập (`POST /api/auth/login`)**
  - *Input Body:* `{ "email": "...", "password": "..." }`
  - *Logic:*
    1. Lấy user từ DB theo email -> Nếu null trả 404.
    2. Gọi `bcrypt.compare()`. -> Nếu sai trả 401.
    3. Cài `npm install jsonwebtoken`, tạo JWT Token chứa `{ id: user.id }` hạn 7 ngày.
  - *Output:* `{ "token": "...", "user": { "id": 1, "name": "A" } }`
- [ ] **3.3 Auth Middleware (Bảo vệ API)**
  - *Logic:* Middleware Express: Đọc header `Authorization: Bearer <token>`. Gọi `jwt.verify()`. Thành công: gán `req.userId = decoded.id; next()`. Thất bại: `res.status(401)`.

---

## 👤 THÀNH VIÊN 2: SPACED REPETITION (SRS) & FLASHCARD

### Task 4: Content Management APIs (Hạn: 10/05)
- [ ] **4.1 Lấy danh sách Khóa học (`GET /api/courses`)**
  - *Output:* `[{ "id": 1, "title": "TOEIC 600", "thumbnail": "url" }]`
- [ ] **4.2 Lấy danh sách Chủ đề (`GET /api/courses/:course_id/topics`)**
  - *Logic:* Lệnh SQL `SELECT * FROM Topics WHERE course_id = ?`. Có thể `JOIN Flashcards` để `COUNT` số từ vựng.
- [ ] **4.3 Lấy danh sách Từ vựng (`GET /api/topics/:topic_id/flashcards`)**
  - *Logic:* Lệnh SQL `SELECT * FROM Flashcards WHERE topic_id = ?`.

### Task 5: Thuật toán SM-2 (Hạn: 13/05)
- [ ] **5.1 SM-2 Service (Thuật toán cốt lõi)**
  - *Input params:* `quality (1-4)`, `interval (int)`, `ef (float)`, `repetition (int)`.
  - *Logic (Mã JS):*
    ```javascript
    const calculateSM2 = (quality, interval, ef, repetition) => {
      if (quality < 3) return { repetition: 0, interval: 1, ef, next_review_date: ... };
      if (repetition === 0) interval = 1;
      else if (repetition === 1) interval = 6;
      else interval = Math.round(interval * ef);
      
      ef = ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
      if (ef < 1.3) ef = 1.3;
      
      const nextReview = new Date();
      nextReview.setDate(nextReview.getDate() + interval);
      return { interval, ef, repetition: repetition + 1, next_review_date: nextReview };
    }
    ```

### Task 6: API Ôn tập / Reviews (Hạn: 19/05)
- [ ] **6.1 Lấy thẻ cần ôn (`GET /api/srs/due`)**
  - *Middleware:* Phải có `authMiddleware`. Lấy `req.userId`.
  - *Logic SQL:* `SELECT * FROM SRS_Reviews r JOIN Flashcards f ON r.flashcard_id = f.id WHERE r.user_id = ? AND r.next_review_date <= CURDATE()`.
- [ ] **6.2 Nộp kết quả ôn tập (`POST /api/srs/review`)**
  - *Input:* Array `[{ "flashcard_id": 101, "quality": 4 }, ...]`.
  - *Logic:* Duyệt mảng. Chạy hàm `calculateSM2()`. Dùng SQL `INSERT ... ON DUPLICATE KEY UPDATE` (Upsert trong MySQL) để lưu/đè kết quả mới.

---

## 👤 THÀNH VIÊN 3: GAMIFICATION & TOEIC SYSTEM

### Task 7: Gamification System (Hạn: 17/05)
- [ ] **7.1 API Lấy Tiến độ (`GET /api/progress`)**
  - *Logic SQL:* `SELECT current_xp, level, current_streak FROM User_Progress WHERE user_id = ?`.
- [ ] **7.2 Service Check Streak (Hàm chạy lúc login/học)**
  - *Logic:* So sánh `last_study_date` với `new Date()`. Nếu = hôm qua: `streak++`. Nếu >= 2 ngày: `streak = 0`. Dùng SQL `UPDATE User_Progress SET streak = ?, last_study_date = CURDATE()`.
- [ ] **7.3 API Cộng XP (`POST /api/progress/add-xp`)**
  - *Logic:* Cộng XP. Tính `newLevel = Math.floor(totalXP / 1000) + 1`. Nếu lên cấp, trả về cờ `levelUp: true` để Frontend bắn pháo hoa.

### Task 8: Hệ thống luyện thi TOEIC (Hạn: 27/05)
- [ ] **8.1 Data Seeding (TOEIC Schema)**
  - *Lưu ý MySQL:* Sử dụng kiểu dữ liệu `JSON` cho bảng TOEIC để lưu mảng đáp án A, B, C, D (hoặc tách ra nhiều bảng `Questions` và `Answers`).
- [ ] **8.2 Lấy chi tiết đề thi (`GET /api/toeic/tests/:test_id`)**
  - *Logic RẤT QUAN TRỌNG:* Trong Nodejs, nhớ gỡ bỏ key `correct_answer` ra khỏi object trước khi `res.json(data)`.
- [ ] **8.3 Logic Chấm điểm TOEIC (`POST /api/toeic/submit`)**
  - *Input:* `[{ "question_id": 1, "selected": "A" }, ...]`.
  - *Logic:*
    1. SQL `SELECT id, correct_answer FROM Questions WHERE test_id = ?`.
    2. Viết vòng lặp tính số câu đúng Reading/Listening.
    3. Quy đổi điểm theo thang chuẩn (Dùng mảng/object mapping điểm trong JS).
    4. SQL `INSERT INTO Test_Records`.
    5. Gọi trực tiếp hàm nội bộ `addXpService(req.userId, 500)` thưởng điểm.

---

## 🏆 Cả Nhóm: Tuần Cuối Cùng (Hạn: 31/05)
- [ ] **9.1 Integration:** Gọi API Node.js bằng thư viện `axios` trên React. Thay URL bằng biến môi trường `import.meta.env.VITE_API_URL`.
- [ ] **9.2 Test & Fix Bug:** Check kỹ lỗi chặn CORS, lỗi 401 Unauthorized do token hết hạn.
