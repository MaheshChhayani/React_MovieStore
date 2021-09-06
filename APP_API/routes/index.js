var express = require('express');
var router = express.Router();

const ctrlMovie = require('../controllers/movie');

router.get('/movies', ctrlMovie.getMovies);
router.post('/movies', ctrlMovie.createMovie);
router.get('/movies/:movieid', ctrlMovie.getSingleMovie);
router.put('/movies/:movieid', ctrlMovie.updateMovie);
router.delete('/movies/:movieid', ctrlMovie.deleteMovie);

module.exports = router;