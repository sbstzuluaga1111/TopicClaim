const express = require('express');
const router = express.Router();
const publicCtrl = require('../controllers/publicacione.controllers');
const {isAuthenticated} = require('../helpers/auth');

router.get('/public', isAuthenticated, publicCtrl.renderPublicForm);
router.post('/public/add', isAuthenticated ,publicCtrl.createPublicForm);
router.get('/publics', isAuthenticated, publicCtrl.rendersPublicsForm);

module.exports = router;