import { Router } from 'express';
import AdminController from './app/controllers/AdminController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World'});
})
routes.post('/admin', AdminController.store);

export default routes;
