var dataFunction = function(req, res, next){
    res.render('index',{title:'Movie List'});
}
module.exports = {dataFunction};
