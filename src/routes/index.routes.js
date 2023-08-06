const { Router } = require('express');
const router = Router();
const { renderContac, renderIndex, renderRegisU, renderRegisE, renderIngreU, renderIngreE} = require('../controllers/index.controllers')

router.get('/', renderIndex);

router.get('/contac', renderContac);

router.get('/registro/usuario',renderRegisU );

router.get('/ingreso/usuario', renderIngreU);

router.get('/registro/empresa',renderRegisE );

router.get('/ingreso/empresa', renderIngreE);

module.exports = router;