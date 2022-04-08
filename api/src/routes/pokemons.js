const { Router } = require("express");


const router = Router()

router.get('/', (req, res, next) => { 
    res.send('GET Home Pokemons')
})

router.get('/:id', (req, res, next) => { 
    res.send('GET Pokemons x ID')
})

router.get('/', (req, res, next) => { 
    res.send('GET Pokemons x Params')
})

router.post('/', (req, res, next) => { 
    res.send('Post Pokemons')
})

router.get('/', (req, res, next) => { 
    res.send('Home Pokemons')
})


module.exports = router;