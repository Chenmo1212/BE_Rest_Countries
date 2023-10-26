const fs = require('fs');

const requestLogger = (req, res, next) => {
    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}`;
    fs.appendFile('log/access.log', logMessage + '\n', (err) => {
      if (err) {
        console.error('Error writing to access.log:', err);
      }
    });
    next();
  };
  
  module.exports = requestLogger;
  