import { Router } from 'express';

import AdminController from './app/controllers/AdminController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();


routes.post('/admins', AdminController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/', (req, res) => {
  return res.json({ msg : " Hello World" });
});

export default routes;
