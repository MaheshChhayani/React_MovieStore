var mongoose = require('mongoose');
// var dbUri = 'mongodb+srv://mahesh:1234@cluster0.lhirn.mongodb.net/movieDB?retryWrites=true&w=majority';
var dbUri = 'mongodb+srv://raman:12345@cluster0.lhirn.mongodb.net/movieDB?retryWrites=true&w=majority';

mongoose.connect(dbUri);


mongoose.connection.on('connected', function(){
    console.log("Application is connected with database");
})

mongoose.connection.on('error', function(error){
    console.log("Application is giving error with database", error);
})

mongoose.connection.on('disconnected', function(){
    console.log("Application is disconnected with database");
})

const gracefulShutdown = (msg,callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});  


require('./movie');