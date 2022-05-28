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
const pokeAPIList = []; // Lista de pokemons desde API
let getAPIDone = false; // Flag para saber si ya se obtuvieron los pokemons desde API

router.get('/', async (req, res, next) => { 
    const { name } = req.query;
    
    // **************************************************************************************
    // ************************************SEARCH BY NAME************************************
    if (name) { //Si se proporciona un nombre por query realize la busqueda en DB y API
        const pokeDB = await Pokemon.findOne({ // Búsqueda en DB
            where: {
                name: {
                    [Op.iLike]: name
                }
            },
            include: Type
        });
        // console.log(pokeDB);
        if (pokeDB) {
            try {
                const pokemon = pokeDB.dataValues;
                const pokemonFound = {
                    id: pokemon.id,
                    name: capitalize(pokemon.name),
                    hp: pokemon.hp,
                    attack: pokemon.attack,
                    defense: pokemon.defense,
                    speed: pokemon.speed,
                    weight: pokemon.weight,
                    height: pokemon.height,
                    image: pokemon.image,
                    type: pokemon.types.map(type => capitalize(type.dataValues.name))
                }
                return res.status(200).send(pokemonFound);
            } catch (error) {
                next(error)
            }
        } else {
            try {
                const pokeAPI = await axios.get(`${URL_POKE}/${name}`); // Búsqueda en API
                
                if (pokeAPI.data.name === name) {
                    const pokemonFound = {
                        id: pokeAPI.data.id,
                        name: capitalize(pokeAPI.data.name),
                        hp: pokeAPI.data.stats[5].base_stat,
                        attack: pokeAPI.data.stats[1].base_stat,
                        defense: pokeAPI.data.stats[2].base_stat,
                        speed: pokeAPI.data.stats[4].base_stat,
                        weight: pokeAPI.data.weight,
                        height: pokeAPI.data.height,
                        image: pokeAPI.data.sprites.other.dream_world.front_default ? pokeAPI.data.sprites.other.dream_world.front_default : pokeAPI.data.sprites.other.home.front_default,
                        type: pokeAPI.data.types.map(type => capitalize(type.type.name))
                    }
                    // console.log('Desde API')
                    return res.status(200).send(pokemonFound);
                }
            } catch (error) {
                return error.response.data === 'Not Found' ? res.json('Pokemon not found') : res.status(500).send('Internal Server Error')
                // next(error)
                // console.log(error.response.data);
            }
        }
    }

    // **************************************************************************************
    // **************************************GET POKEMONS************************************
        try {
        const pokeDB = await Pokemon.findAll({
            include: Type
        })
        const pokeDBList = []; 
        
        //Convertir a un array de objetos desde DB        
        for (let i = 0; i < pokeDB.length; i++) {
            const pokemon = pokeDB[i].dataValues;
            pokeDBList.push({
                id: pokemon.id,
                name: capitalize(pokemon.name),
                image: pokemon.image,
                attack: pokemon.attack,
                type: pokemon.types.map(type => type.dataValues.name)
            });
        }
        
        
        if (getAPIDone && pokeAPIList.length > 39) {
            return res.send(pokeAPIList.concat(pokeDBList));
        } else {
            const pokeAPI = await axios.get(`${URL_POKE}/?offset=0&limit=40`); 
            for (let i = 0; i < pokeAPI.data.results.length; i++) {
                const pokemonAPI = await axios.get(pokeAPI.data.results[i].url)
                pokeAPIList.push({ //Convertir a un array de objetos desde API
                    id: pokemonAPI.data.id,
                    name: capitalize(pokemonAPI.data.name),
                    image: pokemonAPI.data.sprites.other.dream_world.front_default,
                    attack: pokemonAPI.data.stats[1].base_stat,
                    type: pokemonAPI.data.types.map(type => capitalize(type.type.name))
                });
            }
            getAPIDone = true;
            return res.send(pokeAPIList.concat(pokeDBList)); //Concatenar los arrays
        }
        // return res.send(pokeAPIList.concat(pokeDBList)); //Concatena los dos arrays
    } catch (error) {
        next(error);
    }
})


router.get('/:id', async (req, res, next) => { 
    const { id } = req.params;
    if (id.length > 35) { // ID de base de datos
        try {
            const pokeDB = await Pokemon.findOne({ where: { id }, include: Type }); // Búsqueda en DB
            if (pokeDB) {
                const pokemon = pokeDB.dataValues;
                const pokemonFound = {
                    id: pokemon.id,
                    name: capitalize(pokemon.name),
                    hp: pokemon.hp,
                    attack: pokemon.attack,
                    defense: pokemon.defense,
                    speed: pokemon.speed,
                    weight: pokemon.weight,
                    height: pokemon.height,
                    image: pokemon.image,
                    type: pokemon.types.map(type => capitalize(type.dataValues.name))
                }
                return res.status(200).send(pokemonFound);
            }
            else return res.json('Pokemon not found');
        } catch (error) {
            next(error)
        }
    } else { // ID de API
        try {
            const pokeAPI = await axios.get(`${URL_POKE}/${id}`) // Búsqueda en API
            
            if (pokeAPI.data.id) { 
                const pokemonFound = {
                    id: pokeAPI.data.id,
                    name: capitalize(pokeAPI.data.name),
                    hp: pokeAPI.data.stats[5].base_stat,
                    attack: pokeAPI.data.stats[1].base_stat,
                    defense: pokeAPI.data.stats[2].base_stat,
                    speed: pokeAPI.data.stats[4].base_stat,
                    weight: pokeAPI.data.weight,
                    height: pokeAPI.data.height,
                    image: pokeAPI.data.sprites.other.dream_world.front_default ? pokeAPI.data.sprites.other.dream_world.front_default : pokeAPI.data.sprites.other.home.front_default,
                    type: pokeAPI.data.types.map(type => capitalize(type.type.name))
                }
                res.status(200).send(pokemonFound);
            } 
            
        } catch (error) {
            error.response.data === 'Not Found' ? res.json('Pokemon not found') : res.status(500).send('Internal Server Error')
            // next(error)
            // console.log(error.response.data);
        }
    }
})

router.post('/', async (req, res, next) => { 
    const { name, hp, attack, defense, speed, height, weight, image , type} = req.body;
    try {
        const exists = name ? await Pokemon.findOne({ where: { name } }) : null; // Verifica que no exista un pokemon con el mismo nombre y q reciba un nombre como parámetro
        if (!name ) res.send('Necessary parameters not provided (Name)'); // Notifica en caso de no recibir un nombre o un tipo
        if (!type.length) res.send('Necessary parameters not provided (Type)'); // Notifica en caso de no recibir un nombre o un tipo
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
                // await axios.get(`${URL_SERVER}/types`) // Si la tabla de tipos está vacía, obtiene los tipos de la API y los pasa a la tabla
                const typesOk = await Type.findAll()
                await newPokemon.addType( // Asigna tipo al pokemon creado  
                type.map(type => {
                    const typeFound = typesOk.find(typeOk => typeOk.name === type)
                    return typeFound.id
                }))
                return res.status(201)
            } else {
                return res.json("Name already exists in the database");
            }
        }
    } catch (error) {
        next(error);
        // res.send(error.response.data);
    }
})

router.delete('/delete/:id', async (req, res, next) => {
    const { id } = req.params;
    // console.log(id);
    if (id.length < 35) res.json('ID must be a pokemon from the database');
    try {
        const pokemon = await Pokemon.findOne({ where: { id } });
        // console.log(pokemon);
        if (pokemon) {
            await pokemon.destroy();
            return res.json('Pokemon deleted').status(200);
        } else {
            return res.json('Pokemon not found').status(404);
        }
    } catch (error) {
        next(error);
    }
});

    

module.exports = router;
