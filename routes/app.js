const router = require('express').Router();


router.get('/', async (req, res) =>{
    res.render('../front/index.html')
})

module.exports = router;