const Cadastro = require("../database/Cadastro");
const bycript = require('bcryptjs');
const validator = require('validator');

exports.index = (req, res) => {
    res.render('cadastro');
};

exports.createAccount =  async (req, res) => {
   let email = req.body.email;
   let senha = req.body.senha;

   let errors = [];
   let success;

   if(!validator.isEmail(email)) {
    errors.push('E-mail inválido')
    return res.render('cadastro', { errors })
   }
   if(senha.length < 3 || senha.length > 50)  {
    errors.push('Senha deve ter entre 3 e 50 caracteres.')
    return res.render('cadastro', { errors })
}

   const cadastrado = await Cadastro.findOne({where: { email } }) 
    
    if(cadastrado) {
        errors.push('E-mail já cadastrado')
        return res.render('cadastro', { errors })
    }

    const salt = bycript.genSaltSync();
    const hash = bycript.hashSync(senha, salt)
    
    Cadastro.create({
        email,
        senha: hash
   })
   .then(() => {
       success = 'Cadastro realizado com sucesso!';
        return res.render('cadastro', { success});
    })
   .catch(e => console.log(e))
};