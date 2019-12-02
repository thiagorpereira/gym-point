import { Router } from 'express';

import AdminController from './app/controllers/AdminController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/admins', AdminController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/admins', AdminController.update);

routes.post('/students', StudentController.store);
routes.put('/students', StudentController.update);

export default routes;
