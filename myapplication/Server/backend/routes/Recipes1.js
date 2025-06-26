const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/recipes', (req, res) => {
  db.query('SELECT * FROM recipes', (err, results) => {
    if (err) return res.status(400).send(err);
    res.json(results);
  });
});

module.exports = router;
