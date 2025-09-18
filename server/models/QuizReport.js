import mongoose from 'mongoose';

const quizReportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answers: { type: Object, required: true },
  aiConclusion: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('QuizReport', quizReportSchema);
