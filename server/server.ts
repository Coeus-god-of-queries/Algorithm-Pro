import express, { Request, Response, NextFunction, RequestHandler } from 'express';
const app = express();
import path from 'path';
import { ServerError } from '../types';

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')));

// server build folder on development mode
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on development mode
app.get('/', (req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});


// catch all
app.use('*', (req: Request, res: Response) => res.status(404).send('This is not the page you\'re looking for...'));

// global error handler
app.use('/', (err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

if(process.env.NODE_ENV === 'production'){
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req: Request, res: Response) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(PORT); //listens on port 3000 -> http://localhost:3000/
