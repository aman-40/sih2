import College from '../models/College.js';

export const getColleges = async (req, res) => {
  try {
    const colleges = await College.findAll();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch colleges', details: err.message });
  }
};

export const getCollege = async (req, res) => {
  try {
    const college = await College.findByPk(req.params.id);
    if (!college) return res.status(404).json({ error: 'College not found' });
    res.json(college);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch college', details: err.message });
  }
};

export const createCollege = async (req, res) => {
  try {
    const college = await College.create(req.body);
    res.status(201).json(college);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create college', details: err.message });
  }
};

export const updateCollege = async (req, res) => {
  try {
    const college = await College.findByPk(req.params.id);
    if (!college) return res.status(404).json({ error: 'College not found' });
    await college.update(req.body);
    res.json(college);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update college', details: err.message });
  }
};

export const deleteCollege = async (req, res) => {
  try {
    const college = await College.findByPk(req.params.id);
    if (!college) return res.status(404).json({ error: 'College not found' });
    await college.destroy();
    res.json({ message: 'College deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete college', details: err.message });
  }
};
