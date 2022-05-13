import  express from'express';
const router = express.Router();

import {authMethods, getPost } from '../controllers/auth_controller.js';

router.get('/', authMethods);

router.get('/users', getPost);

export default router;