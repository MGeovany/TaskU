import  express from'express';
const router = express.Router();

import {authMethods, login, register} from '../controllers/auth.controller';

router.get('/', authMethods.login);


//router.post('/register', register);

export default router;