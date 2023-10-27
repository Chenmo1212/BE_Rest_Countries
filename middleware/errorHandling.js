const errorHandling = (err, req, res) => {
    res.status(500).json({ error: 'Internal server error' });
  };
  
  module.exports = errorHandling;
  