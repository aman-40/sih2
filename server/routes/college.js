
import express from 'express';
import { getColleges, getCollege, createCollege, updateCollege, deleteCollege } from '../controllers/collegeController.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../utils/validate.js';
import { collegeCreateValidation, collegeUpdateValidation } from './college.validation.js';
const router = express.Router();

router.get('/', getColleges);
router.get('/:id', getCollege);
router.post('/', authenticate, validate(collegeCreateValidation), createCollege);
router.put('/:id', authenticate, validate(collegeUpdateValidation), updateCollege);
router.delete('/:id', authenticate, deleteCollege);

export default router;
