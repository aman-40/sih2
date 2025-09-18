
import express from 'express';
import { getTimelines, getTimeline, createTimeline, updateTimeline, deleteTimeline } from '../controllers/timelineController.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../utils/validate.js';
import { timelineCreateValidation, timelineUpdateValidation } from './timeline.validation.js';
const router = express.Router();

router.get('/', getTimelines);
router.get('/:id', getTimeline);
router.post('/', authenticate, validate(timelineCreateValidation), createTimeline);
router.put('/:id', authenticate, validate(timelineUpdateValidation), updateTimeline);
router.delete('/:id', authenticate, deleteTimeline);

export default router;
