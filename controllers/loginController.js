const Cadastro = require('../database/Cadastro');
const byscript = require('bcryptjs');

exports.index = (req, res) => {
    res.render('login')
};

exports.login = async (req, res) => {
    let email = req.body.email;
    let senha = req.body.senha;

    try {

        await Cadastro.findOne({ where: { email }})
            .then(async user => {
            if(user !== undefined) {
                let correctPassword = await byscript.compareSync(senha, user.senha)
                if(correctPassword) {
                    req.session.user = {
                        id: user.id,
                        email: user.email
                    }
                    
                    res.redirect('/home')
                } else {
                    res.render('login')
                } 
            }
        })
    } catch(e) {
        console.log(e)
    }

};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};