var express = require('express');
var router = express.Router();
const ctrlMain = require('../controller/main');
const ctrlMovie = require('../controller/movie');
const ctrlAbout = require('../controller/about');

router.get('/', ctrlMain.dataFunction);
router.get('/movies', ctrlMovie.movieList);
router.get('/about', ctrlAbout.about);
/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
//});

router.get('/movies/:movieid', ctrlMovie.movieInfo);
router.route('/new').get(ctrlMovie.addNewMovie).post(ctrlMovie.doAddNewMovie);

module.exports = router;
