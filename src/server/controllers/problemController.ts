import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { ProblemController } from '../../types';
import db from '../db';


const problemController : ProblemController = {
    
  getAllProblem: async function(req: Request, res: Response, next: NextFunction) {
    try {
        const text = `SELECT * FROM problems`;
        const result = await db.query(text);
        res.locals.problems = result.rows;
        return next();
    }
    catch (err) {
        console.log(err);
        next({
            log: ' problemController.getProblem middleware error',
            status: 400,
            message: { err: 'Cannot get problems' },
        })
    }
  },

  getOneProblem: async function(req: Request, res: Response, next: NextFunction) {
    try {
        const { name } = req.params;
        const text = `SELECT * FROM problems WHERE name = $1`;
        const values = [name];
        const result = await db.query(text, values);
        res.locals.problems = result.rows;
        return next();
    }
    catch (err) {
        console.log(err);
        next({
            log: ' problemController.getProblem middleware error',
            status: 400,
            message: { err: 'Cannot get problems' },
        })
    }
  }


};


export default problemController;