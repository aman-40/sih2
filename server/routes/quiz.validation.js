import { body } from 'express-validator';

export const quizCreateValidation = [
  body('answers').notEmpty().withMessage('Answers are required'),
  body('aiConclusion').notEmpty().withMessage('AI conclusion is required'),
];
