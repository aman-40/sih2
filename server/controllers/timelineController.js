import Timeline from '../models/Timeline.js';

export const getTimelines = async (req, res) => {
  try {
    const timelines = await Timeline.findAll();
    res.json(timelines);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch timelines', details: err.message });
  }
};

export const getTimeline = async (req, res) => {
  try {
    const timeline = await Timeline.findByPk(req.params.id);
    if (!timeline) return res.status(404).json({ error: 'Timeline not found' });
    res.json(timeline);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch timeline', details: err.message });
  }
};

export const createTimeline = async (req, res) => {
  try {
    const timeline = await Timeline.create(req.body);
    res.status(201).json(timeline);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create timeline', details: err.message });
  }
};

export const updateTimeline = async (req, res) => {
  try {
    const timeline = await Timeline.findByPk(req.params.id);
    if (!timeline) return res.status(404).json({ error: 'Timeline not found' });
    await timeline.update(req.body);
    res.json(timeline);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update timeline', details: err.message });
  }
};

export const deleteTimeline = async (req, res) => {
  try {
    const timeline = await Timeline.findByPk(req.params.id);
    if (!timeline) return res.status(404).json({ error: 'Timeline not found' });
    await timeline.destroy();
    res.json({ message: 'Timeline deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete timeline', details: err.message });
  }
};
