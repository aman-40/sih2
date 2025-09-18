import { body } from 'express-validator';

export const timelineCreateValidation = [
  body('userId').isInt().withMessage('userId must be an integer'),
  body('event').notEmpty().withMessage('Event is required'),
  body('date').isISO8601().withMessage('Date must be a valid ISO date'),
];

export const timelineUpdateValidation = [
  body('event').optional().isString(),
  body('date').optional().isISO8601().withMessage('Date must be a valid ISO date'),
];
