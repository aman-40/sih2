
import express from 'express';
import { getQuizReports, getQuizReport, createQuizReport, deleteQuizReport } from '../controllers/quizController.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../utils/validate.js';
import { quizCreateValidation } from './quiz.validation.js';
const router = express.Router();

router.get('/', authenticate, getQuizReports);
router.get('/:id', authenticate, getQuizReport);
router.post('/', authenticate, validate(quizCreateValidation), createQuizReport);
router.delete('/:id', authenticate, deleteQuizReport);

export default router;
