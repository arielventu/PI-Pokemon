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
    
    try {
        // const pokeAPI = await axios.get(`${URL_POKE}/${id}`)
        const pokeDB = await Pokemon.findAll({ where: { id } })
        
        // if (pokeAPI.data.id) {
        //     const pokemonFound = {
        //         id: pokeAPI.data.id,
        //         name: pokeAPI.data.name,
        //         attack: pokeAPI.data.stats[1].base_stat,
        //         defense: pokeAPI.data.stats[2].base_stat,
        //         image: pokeAPI.data.sprites.front_default,
        //         type: pokeAPI.data.types.map(type => type.type.name)
        //     }
        //     res.status(200).send(pokemonFound);
    // } else
        if (pokeDB) {
        console.log(pokeDB);
            const pokemonFound = {
                id: pokeDB[0].id,
                name: pokeDB.name,
                attack: pokeDB.attack,
                defense: pokeDB.defense,
                image: pokeDB.image,
                // type: pokeDB.type
            }
            res.status(200).send(pokemonFound);
        }
        
    } catch (error) {
        error.response?.data === 'Not Found' ? res.status(404).send('Pokemon not found') : res.status(500).send('Internal Server Error')
        // next(error)
        // console.log(error.response.data);
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
            return res.status(400).send("Operación no permitida. Pokemon ya existe en la base de datos");
        }
    } catch (error) {
        next(error);
    }
})

module.exports = router;