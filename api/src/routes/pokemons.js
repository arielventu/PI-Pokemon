const { Router } = require("express");


const router = Router()

router.get('/', (req, res, next) => { 
    res.send('Home Pokemons')
})

router.get('/:id', (req, res, next) => { 
    res.send('Home Pokemons x ID')
})

router.get('/', (req, res, next) => { 
    res.send('Home Pokemons')
})

router.get('/', (req, res, next) => { 
    res.send('Home Pokemons')
})

router.get('/', (req, res, next) => { 
    res.send('Home Pokemons')
})


module.exports = router;