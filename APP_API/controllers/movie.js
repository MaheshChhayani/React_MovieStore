const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');


const getMovies = function (req, res){
    Movie.find().exec(function(err, moviedata){
        if(err){
            res.status(404).json(err);
            return;
        }
        res.status(200).json(moviedata);
    });
};

const createMovie = function(req, res){
    Movie.create({
        title:req.body.title,
        writer:req.body.writer,
        rating:req.body.rating,
        date:req.body.date,
        production:req.body.production
    }, (err, moviedata)=>{
        if(err){
            res.status(404).json(err);
        }else{
            res.status(200).json(moviedata);
        }        
    });
};

const getSingleMovie = function(req, res){
    Movie.findById(req.params.movieid).exec((err, moviedata)=>{
        if(!moviedata){
            return res.status(404).json({"Message":"Movie not found!"});
        }else if(err){
            return res.status(404).json(err);
        }
        res.status(200).json(moviedata);
    });
};

const updateMovie = function(req, res){
    if(!req.params.movieid){
        res.status(404).json({"Message":"Not found!, movieid is required!"});
        return;
    }
    Movie.findById(req.params.movieid).exec((err, moviedata)=>{
        if(!moviedata){
            res.status(404).json({"Message":"movieid not found!"});
            return;
        }else if(err){
            res.status(400).json(err);
            return;
        }
        moviedata.title=req.body.title,
        moviedata.writer=req.body.writer,
        moviedata.rating=req.body.rating,
        moviedata.date=req.body.date,
        moviedata.production=req.body.production
        moviedata.save((err, moviedata)=>{
            if(err){
                res.status(404).json(err);
            }else{
                res.status(200).json(moviedata);
            }
        });
    });
};

const deleteMovie = function(req, res){
    const movieid=req.params.movieid;

    if(movieid){
        Movie.findByIdAndRemove(movieid).exec((err, moviedata)=>{
            if(err){
                res.status(404).json(err);
                return;
            }
            res.status(204).json(null);
        });
    }else{
        res.status(404).json({"Message": "No movieid!"});
    }
};

module.exports = {
    getMovies,
    createMovie,
    getSingleMovie,
    updateMovie,
    deleteMovie
};