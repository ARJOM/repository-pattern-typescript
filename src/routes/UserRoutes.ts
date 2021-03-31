import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const routes = Router();

routes.post('/users', UserController.save)

export default routes;