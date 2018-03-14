const models = require('./models');
const router = require('express').Router();

router.get('/:id/menu/:meal', models.menuType);

router.get('/:id/menu/:meal/:tag', models.filterBy);

module.exports = router;
