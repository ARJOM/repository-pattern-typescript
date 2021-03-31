import { Router } from 'express';
import UserRoutes from './UserRoutes';

const routes = Router();

routes.use(UserRoutes);

export default routes;