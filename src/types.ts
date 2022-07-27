import { Request, Response, NextFunction } from 'express';



// export type BoardContent =  
// [[BoardText, BoardText, BoardText],
// [BoardText, BoardText, BoardText],
// [BoardText, BoardText, BoardText]]

export type ServerError = {
  log: string,
  status: number,
  message: {err: string}
}

export interface UserController {
  createUser: (req : Request, res: Response, next: NextFunction) => void,
  verifyUser: (req : Request, res: Response, next: NextFunction) => void,
  // userProblems: (req : Request, res: Response, next: NextFunction) => void,
}