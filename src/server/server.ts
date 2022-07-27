import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import { ServerError } from '../types';
import path from 'path';
import userController  from './controllers/userController';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client')));


app.post('/login', userController.verifyUser, (req: Request, res: Response) => {
  res.status(200).json(res.locals.user);
})

// app.use('/search')

// catch all error handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('Page not found');
});

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
})

app.listen(3000, () => console.log('server is listening on port 3000'));