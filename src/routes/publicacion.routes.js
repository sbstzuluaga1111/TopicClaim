
const express = require('express');
const router = express.Router();
const publicCtrl = require('../controllers/publicacione.controllers');

router.get('/public', publicCtrl.renderPublicForm);
router.post('/public/add', publicCtrl.createPublicForm);
router.get('/publics', publicCtrl.rendersPublicsForm);

module.exports = router;