const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    
    // Agregar un mensaje de alerta
    res.send('<script>alert("Debes iniciar sesión antes"); window.location.href = "/";</script>');
};

module.exports = helpers;
