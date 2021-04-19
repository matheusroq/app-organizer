const Task = require('../database/Task');

exports.login = (req, res) => {
    res.render('login')
};

exports.home = (req, res) => {
    let userId = req.session.user.id;
    Task.findAll({raw: true, where: { cadastroId: userId }, order: [
        ['id', 'DESC']
    ]}).then(tarefas => {
        res.render('index', {
            tarefas
        });
    });
};
