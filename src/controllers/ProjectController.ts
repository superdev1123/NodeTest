import { Request, Response } from 'express';

export const createProject = (req: Request, res: Response) => {
  res.json({id:"111111111111", step: 1});
};