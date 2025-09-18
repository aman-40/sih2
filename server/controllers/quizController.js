import QuizReport from '../models/QuizReport.js';

export const getQuizReports = async (req, res) => {
  try {
    const reports = await QuizReport.find({ userId: req.user.id });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quiz reports', details: err.message });
  }
};

export const getQuizReport = async (req, res) => {
  try {
    const report = await QuizReport.findOne({ _id: req.params.id, userId: req.user.id });
    if (!report) return res.status(404).json({ error: 'Quiz report not found' });
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quiz report', details: err.message });
  }
};

export const createQuizReport = async (req, res) => {
  try {
    const { answers, aiConclusion } = req.body;
    const report = await QuizReport.create({ userId: req.user.id, answers, aiConclusion });
    res.status(201).json(report);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create quiz report', details: err.message });
  }
};

export const deleteQuizReport = async (req, res) => {
  try {
    const report = await QuizReport.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!report) return res.status(404).json({ error: 'Quiz report not found' });
    res.json({ message: 'Quiz report deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete quiz report', details: err.message });
  }
};
