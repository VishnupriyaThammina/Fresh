const express = require('express');
const router = express.Router();
const Care = require('../models/care');

router.get('/care', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Care.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/care', (req, res, next) => {
  if (req.body.action) {
    Care.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/care/:id', (req, res, next) => {
  Care.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;