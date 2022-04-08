const { Router } = require("express");
const { Op } = require("sequelize");
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

router.post('/', async (req, res, next) => { 
    const { name, type, image } = req.body;
    const exists = await Pokemon.findOne({ where:{ name } }); // Verifica que no exista un pokemon con el mismo nombre

    if (!exists) { 
        const newPokemon = Pokemon.create({
            name,
            type,
            image
        })
        return res.send(newPokemon);
    } else {
        return res.status(400).send('Pokemon existente');
    }
})

router.get('/', (req, res, next) => { 
    res.send('Home Pokemons')
})


module.exports = router;