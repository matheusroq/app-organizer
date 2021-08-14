const Task = require('../database/Task');

exports.new =  (req, res) => {
    res.render('new');
};

exports.save = (req, res) =>{
    let id = req.session.user.id;
    const {title, body, date} = req.body

     Task.create({
        cadastroId: id,
        title,
        body,
        task_date: date
    }).then(() => {
        res.redirect('/home');
    }) 
};

exports.delete = (req, res) => {
    let id = req.body.id;
    if(id !== undefined) {
        if(!isNaN(id)) {
            Task.destroy({
                where: {
                    id
                }
            }).then(() => {
                res.redirect('/home')
            })
        } else {
            res.redirect('/home')
        }
    } else {
        res.redirect('/home')
    }
};

exports.edit = (req, res) => {
    let id = req.params.id;
    if(isNaN(id)) {
        res.redirect('/home')
    }
    
    Task.findByPk(id).then(tarefa => {
        
        if(tarefa != undefined) {
            res.render('edit', {tarefa})
        } else {
            res.redirect('/home');
        }
    }).catch(e => {
        res.redirect('/home');
    })
};

exports.update = (req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let body = req.body.body;

    Task.update({title, body}, {
        where: {
            id
        }
    }).then(() => {
        res.redirect('/home');
    })
};

exports.complete = async (req, res) => {
    try {
        const { id } = req.body
        const update = await Task.update({isComplete: 1}, {
            where: { id }
        })
        if(update === 1) {
            res.redirect('/home');
        } else {
            res.redirect('/home');
        }
    } catch (error) {
        console.log(error)
    }   
}