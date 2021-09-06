const { response } = require('express');
const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

const _renderListpage=(req,res,responseBody)=>{
    res.render('listdisplay',{
        movies:responseBody,
        title:"Movies"
    });
};

const movieList=(req,res)=>{
    const path='/api/movies';
    const requestOptions={
        url:apiOptions.server+path,
        method:'GET',
        json:{}
    };
    request(requestOptions, (err, response, body)=>{
        _renderListpage(req,res,body);
    });
};

const _renderDetailPage=(req,res,responseBody)=>{
    res.render('movie-details',{
        currentMovie: responseBody
    });
};

const movieInfo=(req,res)=>{
    const path=`/api/movies/${req.params.movieid}`;
    const requestOptions={
        url:apiOptions.server+path,
        method:"GET",
        json:{}
    };
    request(requestOptions,(err,response,body)=>{
        _renderDetailPage(req,res,body);
    });
};

const _renderCreatePage = function(req,res){
    res.render('create-new-movie',{
        title:"Create New Movie"
    });
};

const addNewMovie = function(req,res){
    _renderCreatePage(req,res);
}

const doAddNewMovie = function(req,res){
    const path='/api/movies';
    const postdata = {
        title:req.body.title,
        writer:req.body.writer,
        rating:req.body.rating,
        date:req.body.date,
        production:req.body.production        
    };
    const requestOptions = {
        url: apiOptions.server+path,
        method:'POST',
        json:postdata
    };
    request(
        requestOptions,
        (err, response,body)=>{
            if(response.statusCode===201){
                res.redirect('/movies');
            }
        }
    );
};

module.exports = {
    movieList,
    movieInfo,
    addNewMovie,
    doAddNewMovie
};