const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Job
      .find(req.query)
      .then(dbJob => res.json(dbJob))
  }
}