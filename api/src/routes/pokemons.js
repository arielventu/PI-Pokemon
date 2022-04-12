const { Router } = require("express");
const { Op } = require("sequelize");
const axios = require("axios");
const { Pokemon } = require('../db');
const {
    URL_POKE,
    URL_TYPE,
    capitalize
} = require('../utils');


// Únicos Endpoints/Flags que pueden utilizar
// GET https://pokeapi.co/api/v2/pokemon
// GET https://pokeapi.co/api/v2/pokemon/{id}
// GET https://pokeapi.co/api/v2/pokemon/{name}
// GET https://pokeapi.co/api/v2/type

const router = Router()

const pokeList = []; // Lista de pokemones para mostrar en la vista. Incluye los datos de la API y de la DB

router.get('/', async (req, res, next) => { 
    const pokeAPI = await axios.get(`${URL_POKE}`); //Promesa
    const pokeDB = await Pokemon.findAll(); //Promesa
    for (let i = 0; i < pokeAPI.data.results.length; i++) { 
        const pokemon = await axios.get(pokeAPI.data.results[i].url);
        pokeList.push({
            id: pokemon.data.id,
            name: pokemon.data.name,
            attack: pokemon.data.stats[1].base_stat,
            defense: pokemon.data.stats[2].base_stat,
            image: pokemon.data.sprites.front_default,
            type: pokemon.data.types.map(type => type.type.name)
        })
    } 
    console.log(pokeList);
    res.status(200).send(pokeList);
})
    
router.get('/:id', async (req, res, next) => { 
    const { id } = req.params;
    // const pokeDB = await Pokemon.findAll({ where: { id } })
    // console.log(`${URL_POKE}/${id}`);
    const pokeAPI = await axios.get(`${URL_POKE}/${id}`);
    
    try {
        console.log(pokeAPI.data?.id);
        if (pokeAPI.includes(id)) {
            const pokemonFound = {
                id: pokeAPI.data.id,
                name: pokeAPI.data.name,
                attack: pokeAPI.data.stats[1].base_stat,
                defense: pokeAPI.data.stats[2].base_stat,
                image: pokeAPI.data.sprites.front_default,
                type: pokeAPI.data.types.map(type => type.type.name)
            }
            return res.status(200).send(pokemonFound);
        } else {
            return res.status(404).send('Pokemon not found');
        }
    } catch (error) {
        next(error)
    }
    // try {
    //     res.send(pokeDB.length ? pokeDB : 'Pokemon no encontrado');
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
            return res.status(400).send("Operación no permitida. Pokemon ya existe en la base de datos");
        }
    } catch (error) {
        next(error);
    }
})

module.exports = router;