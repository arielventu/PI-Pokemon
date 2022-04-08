const { Router } = require("express");
const { Pokemon } = require('../db');


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
    const { name, type, image } = req.body;
    const exists = Pokemon.findOne({ where: { name } });
    
    if (!exists) { 
        const newPokemon = Pokemon.create({
            name,
            type,
            image
        })
        res.send(newPokemon);
    } else {
        res.status(400).send('Pokemon ya creado');
    }
})

router.get('/', (req, res, next) => { 
    res.send('Home Pokemons')
})


module.exports = router;