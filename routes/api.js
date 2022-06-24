const router = require('express').Router();

const apiContactosRouter = require('./api/contactos');

router.use('/contactos', apiContactosRouter);

module.exports = router;