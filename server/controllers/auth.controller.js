
const authMethods = {

}

const userModels = require('../models/userModels');

authMethods.register = async (req, res) =>{

  const {} = req.body
}

authMethods.login = async (req, res)=>{

  return res.json('hola');

}

module.exports = authMethods;