import UserModelInterface from '../../Model/User/Interface/UserModelInterface';

declare global {
  namespace Express {
    export interface Request {
      user: UserModelInterface; 
    }
  }
}

