import { body } from 'express-validator';

export const collegeCreateValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('location').optional().isString(),
  body('type').optional().isString(),
  body('website').optional().isURL().withMessage('Website must be a valid URL'),
];

export const collegeUpdateValidation = [
  body('name').optional().isString(),
  body('location').optional().isString(),
  body('type').optional().isString(),
  body('website').optional().isURL().withMessage('Website must be a valid URL'),
];
