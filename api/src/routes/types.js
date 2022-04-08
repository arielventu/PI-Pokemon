const { Router } = require("express");


const router = Router()

router.get('/', (req, res, next) => { 
    res.send('GET Home Types')
})

module.exports = router;