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
