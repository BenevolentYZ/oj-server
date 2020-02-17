const express = require('express');
const router = express.Router();

const problemService = require('../services/problemService');

router.get('/problems', (req, res) => {
    problemService.getProblems()
        .then(problems => res.json(problems))
})

//get single problem
router.get('/problems/:id', (req, res) => {
    const id = req.params.id;
    problemService.getProblems(+id)
        .then(problem => res.json(problem));
})

//add a problem


module.exports = router;