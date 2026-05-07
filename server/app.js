const express = require('express');
const cors = require('cors');
const progressRoutes = require('./routes/progressRoutes');
const toeicUploadRoutes = require('./routes/toeicUploadRoutes');
const authRoutes = require('./routes/authRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const topicsRoutes = require('./routes/topicsRoutes');
const srsRoutes = require('./routes/srsRoutes');
const { notFoundHandler, globalErrorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/topics', topicsRoutes);
app.use('/api/srs', srsRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/toeic-upload', toeicUploadRoutes);

app.use(notFoundHandler);
app.use(globalErrorHandler);

module.exports = app;
