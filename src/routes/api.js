import express from 'express';

import customer from './customer/customer.routes.js';


const apiRouter = express.Router();

apiRouter.use('/customer', customer);
export default apiRouter;