const { Router } = require("express");
const { Op } = require("sequelize");
const axios = require("axios");
const { Pokemon } = require('../db');

// Únicos Endpoints/Flags que pueden utilizar
// GET https://pokeapi.co/api/v2/pokemon
// GET https://pokeapi.co/api/v2/pokemon/{id}
// GET https://pokeapi.co/api/v2/pokemon/{name}
// GET https://pokeapi.co/api/v2/type

const router = Router()

router.get('/', async (req, res, next) => { 
    const pokemonsAPI = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const pokemons = pokemonsAPI.data.results;
    
})

router.get('/:id', async (req, res, next) => { 
    const { id } = req.params;
    const pokemonDB = await Pokemon.findAll({ where: { id } })
    const pokemonAPI = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    try {
        res.send(pokemonAPI.length ? pokemonAPI : 'Pokemon no encontrado');
    } catch (error) {
        next(error)
    }
    // try {
    //     res.send(pokemonDB.length ? pokemonDB : 'Pokemon no encontrado');
    // } catch (error) {
    //     next(error)
    // }
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