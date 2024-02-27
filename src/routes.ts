import { Router } from 'express';

import ClientesController from './controllers/ClientesController';
import ProdutosController from './controllers/ProdutosController';

const routes = Router();

routes.get('/clientes', ClientesController.index);
routes.get('/clientes/:id', ClientesController.show);
routes.post('/clientes', ClientesController.create);

routes.get('/produtos', ProdutosController.index);
routes.get('/produtos/:id', ProdutosController.show);
routes.post('/produtos', ProdutosController.create);

export default routes;