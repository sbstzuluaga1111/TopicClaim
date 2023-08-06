const { Router } = require('express');
const router = Router();
const { renderContac, renderIndex} = require('../controllers/index.controllers')

router.get('/', renderIndex);

router.get('/contac', renderContac);


module.exports = router;