import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { UserController } from '../../types';
import db from '../db';


const userController : UserController = {
    
  createUser: async function(req: Request, res: Response, next: NextFunction) {
    try {
        const { username, password } = req.body;
        console.log(req.body)
        // const hashedPassword = await bcrypt.hash(password, saltRounds);
        const text = `INSERT INTO users (username, password) VALUES ($1, $2)`
        const params = [username, password];
        const result = await db.query(text, params)
        res.locals.user = result;
        // .then((data : Response) => data.json())
        // .then((data : string[] | number[]) => res.locals.user = data)
        return next();
    }
    catch (err) {
        console.log(err);
        next({
            log: 'userController.createUser middleware error',
            status: 400,
            message: { err: 'Cannot create user' },
        })
    }
  },

  verifyUser: async function(req: Request, res: Response, next: NextFunction) {
      try {
          const { username, password } = req.body;
          // console.log(req.body, '<--req.body')
          const text = 'SELECT username, password from users WHERE username = $1 AND password = $2'
          const params = [username, password];
          const result = await db.query(text, params)
          console.log(result, "<-- result");
          res.locals.user = result.rows;
          return next();          
          // const dbPassword = userData.password;
          // const compare = bcrypt.compare(password, dbPassword)
          // if (compare) {
          //     res.locals.user = {
          //         _id: userData._id,
          //         username: userData.username
          //     }
          // }
          // else {
          //     return next({
          //         log: 'incorrect information in userController.verifyUser middleware',
          //         status: 401,
          //         message: { err: 'Incorrect username and/or password'}
          //     })
          // }
      }
      catch (err) {
          next({
              log: 'userController.verifyUser middleware error',
              status: 404,
              message: { err: 'cannot verify user' },
          })
      }
  }
};


export default userController;