// Centralized error handler
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack || err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    details: err.details || undefined
  });
};
