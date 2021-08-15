const Task = require('../database/Task');

exports.chartData = async (req, res) => {
    try {
        const userId = req.session.user.id;
        const allTasks = await Task.findAll({raw: true, where: { cadastroId: userId}});
        return res.json(allTasks)
    } catch (error) {
        console.log(error)
        return res.json({
            error: error.message
        })
    }
}

exports.chartsPage = async (req, res) => {
    try {
        res.render('chart')
    } catch (error) {
        res.redirect('/home')
    }
}
