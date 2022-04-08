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
    const { name, hp, attack, defense, speed, height, weight, image } = req.body;
    const exists = await Pokemon.findOne({ where:{ name } }); // Verifica que no exista un pokemon con el mismo nombre
    try {
        if (!exists) { // Si no existe el pokemon lo crea
            const newPokemon = Pokemon.create({
                name,
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
                image
            })
        } else return res.status(400).send("El pokemon con ese nomnya existe");
        
        return res.send(newPokemon);
            
        
    } catch (error) {
        next(error);
    }
})

router.get('/', (req, res, next) => { 
    res.send('Home Pokemons')
})


module.exports = router;