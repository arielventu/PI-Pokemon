const { Router } = require("express");
const { Op } = require("sequelize");
const axios = require("axios");
const { Pokemon, Type } = require('../db');
const {
    URL_POKE,
    URL_SERVER,
    capitalize,
} = require('../utils');


// Únicos Endpoints/Flags que pueden utilizar
// GET https://pokeapi.co/api/v2/pokemon
// GET https://pokeapi.co/api/v2/pokemon/{id}
// GET https://pokeapi.co/api/v2/pokemon/{name}
// GET https://pokeapi.co/api/v2/type

const router = Router()

router.get('/', async (req, res, next) => { 
    const { name } = req.query;
    
    // **************************************************************************************
    // ************************************PROBANDO**************************************************
    if (name) {
        const pokeDB = await Pokemon.findAll({ where: { name }, include: Type });
        if (pokeDB.length !== 0) {
            try {
                pokeDB ? res.status(200).send(pokeDB) : res.status(404).send('Pokemon not found')
            } catch (error) {
                next(error)
            }
        } else {
            try {
                const pokeAPI = await axios.get(`${URL_POKE}/${name}`);
                if (pokeAPI.data.name = name) {
                    const pokemonFound = {
                        id: pokeAPI.data.id,
                        name: pokeAPI.data.name,
                        attack: pokeAPI.data.stats[1].base_stat,
                        defense: pokeAPI.data.stats[2].base_stat,
                        image: pokeAPI.data.sprites.front_default,
                        type: pokeAPI.data.types.map(type => type.type.name)
                    }
                    console.log('Desde API')
                    res.status(200).send(pokemonFound);
                }
            } catch (error) {
                error.response.data === 'Not Found' ? res.status(404).send('Pokemon not found') : res.status(500).send('Internal Server Error')
                // next(error)
                // console.log(error.response.data);
            }
        }
    }
    
    // *************************************PROBANDO*************************************************
    // **************************************************************************************
    
    try {
        const pokeDBList = await Pokemon.findAll({
            include: Type
        })

        // const pokeDBList = pokeDB.map(pokemon => pokemon.dataValues);
        //Convertir a un array de objetos desde DB
        const pokeAPI = await axios.get(`${URL_POKE}`); 
        const pokeAPIList = []; 
        //Convertir a un array de objetos desde API
        for (let i = 0; i < pokeAPI.data.results.length; i++) {
            const pokemonAPI = await axios.get(pokeAPI.data.results[i].url)
            pokeAPIList.push({
                id: pokemonAPI.data.id,
                name: capitalize(pokemonAPI.data.name),
                attack: pokemonAPI.data.stats[1].base_stat,
                defense: pokemonAPI.data.stats[2].base_stat,
                image: pokemonAPI.data.sprites.front_default,
                type: pokemonAPI.data.types.map(type => type.type.name)
            });
        }
        const List = pokeAPIList.concat(pokeDBList); //Concatena los dos arrays
        res.send(List);
   } catch (error) {
       next(error);
   }
})
    
router.get('/:id', async (req, res, next) => { 
    const { id } = req.params;
    if (id.length > 35) { // ID de base de datos
        try {
            const pokeDB = await Pokemon.findAll({ where: { id }, include: Type });
            // console.log(pokeDB);
            if (pokeDB) res.status(200).send(pokeDB);
            else res.status(404).send('Pokemon not found')
        } catch (error) {
            next(error)
        }
    } else { // ID de API
        try {
            const pokeAPI = await axios.get(`${URL_POKE}/${id}`)
            
            if (pokeAPI.data.id) { 
                const pokemonFound = {
                    id: pokeAPI.data.id,
                    name: pokeAPI.data.name,
                    attack: pokeAPI.data.stats[1].base_stat,
                    defense: pokeAPI.data.stats[2].base_stat,
                    image: pokeAPI.data.sprites.front_default,
                    type: pokeAPI.data.types.map(type => type.type.name)
                }
                res.status(200).send(pokemonFound);
            } 
            
        } catch (error) {
            error.response.data === 'Not Found' ? res.status(404).send('Pokemon not found') : res.status(500).send('Internal Server Error')
            // next(error)
            // console.log(error.response.data);
        }
    }
})

router.post('/', async (req, res, next) => { 
    const { name, hp, attack, defense, speed, height, weight, image , type} = req.body;
    try {
        const exists = name ? await Pokemon.findOne({ where: { name } }) : null; // Verifica que no exista un pokemon con el mismo nombre y q reciba un nombre como parámetro
        
        if (!name || !type) res.status(404).send('Necessary parameters not provided'); // Notifica en caso de no recibir un nombre o un tipo
        else { 

            // Creación del nuevo pokemon
            if (!exists) { // Si no existe el pokemon lo crea
                const newPokemon = await Pokemon.create({
                    name,
                    hp,
                    attack,
                    defense,
                    speed,
                    height,
                    weight,
                    image,
                })
    
                // Asignación de tipos al pokemon
                const typesOk = await Type.findAll()
                if (typesOk.length > 0) { // Verifica si la tabla de tipos está vacía
                    await newPokemon.addType(type) // Si no está vacía asigna el tipo al pokemon creado
                } else {
                    await axios.get(`${URL_SERVER}/types`) // Si está vacía, obtiene los tipos de la API y los pasa a la tabla de tipos
                    await newPokemon.addType(type) 
                }
                return res.send(newPokemon);
            } else {
                return res.status(400).send("Name already exists in the database");
            }
        }
    } catch (error) {
        next(error);
    }
})

module.exports = router;