import express from 'express';
var app = express();
import path from 'path';
var PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')));
// server build folder on development mode
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on development mode
app.get('/', function (req, res) {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
// catch all
app.use('*', function (req, res) { return res.status(404).send('This is not the page you\'re looking for...'); });
// global error handler
app.use('/', function (err, req, res, next) {
    var defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' },
    };
    var errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
if (process.env.NODE_ENV === 'production') {
    // statically serve everything in the build folder on the route '/build'
    app.use('/build', express.static(path.join(__dirname, '../build')));
    // serve index.html on the route '/'
    app.get('/', function (req, res) {
        return res.status(200).sendFile(path.join(__dirname, '../index.html'));
    });
}
app.listen(PORT); //listens on port 3000 -> http://localhost:3000/
