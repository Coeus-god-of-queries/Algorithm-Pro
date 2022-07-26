import express, { Request, Response, NextFunction } from 'express';


export type ServerError = {
  log: string,
  status: number,
  message: {err: string}
}