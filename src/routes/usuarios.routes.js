const {Router} = require('express')
const router = Router();

const { 
    renderRegisU, 
    fuera, 
    renderRegisE, 
    renderIngreU, 
    renderIngreE,
    initRegisU,
    initRegisE,
    initIngreU,
    initIngreE
} = require('../controllers/usuarios.controllers')
//
//
router.get('/registro/usuario',renderRegisU);

router.post('/registro/usuario',initRegisU);
//
//
router.get('/ingreso/usuario', renderIngreU);

router.post('/ingreso/usuario', initIngreU);










//
//
router.get('/registro/empresa',renderRegisE);

router.post('/registro/empresa',initRegisE);
//
//
router.get('/ingreso/empresa', renderIngreE);

router.post('/ingreso/empresa', initIngreE);
//
//
router.get('/fuera', fuera);
//
module.exports = router;