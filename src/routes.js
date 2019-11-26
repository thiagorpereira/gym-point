import { Router } from 'express';
import AdminController from './app/controllers/AdminController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();


routes.post('/admins', AdminController.store);
routes.post('/sessions', SessionController.store);

export default routes;
