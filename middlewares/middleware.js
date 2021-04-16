exports.globalmiddleware = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    next();
};

exports.loggedUser = (req, res, next) => {
    if(req.session.user !== undefined) {
        next();
    } else {
        res.redirect('/login');
    }
};