const { Router } = require("express");
const { Op } = require("sequelize");
const axios = require("axios");
const { Pokemon } = require('../db');


const router = Router()

router.get('/', async (req, res, next) => { 
    const pokemonsDB = await Pokemon.findAll()
    res.send(pokemonsDB)
})

router.get('/:id', async (req, res, next) => { 
    const { id } = req.params;
    const pokemonsDB = await Pokemon.findAll({ where: { id } })
    try {
        if (!pokemonsDB) {
            console.log(pokemonsDB)
            return res.send('Pokemon no encontrado');  
        } else {
            console.log(pokemonsDB)
            return res.send(pokemonsDB);
        }
    } catch (error) {
        next(error)
    }
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
            return res.send(newPokemon);
        } else {
            return res.status(400).send("El Pokemon requerido ya existe en la base de datos");
        }
    } catch (error) {
        next(error);
    }
})

module.exports = router;