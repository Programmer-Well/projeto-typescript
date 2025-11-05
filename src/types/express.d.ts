import UserModelInterface from '../../Model/User/Interface/UserModelInterface';

export interface AuthenticatedRequest extends Request {
  user?: UserModelInterface;
}
