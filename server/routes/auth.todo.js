import  express from'express';
const router = express.Router();

//const {login, register} = require ('../controllers/auth.controller')

router.get('/', (req,res) => {
  res.send('Worked');
});

//router.post('/register', register);

export default router;