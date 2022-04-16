const { Router } = require("express");
const axios = require("axios");
const { Type } = require('../db');
const {
    URL_TYPE,
    capitalize
} = require('../utils');


const router = Router()

router.get('/', async (req, res, next) => { 
    try {
        const typeDB = await Type.findAll();
        if (typeDB.length !== 0) {
            console.log('Desde DB');
            res.status(200).send(typeDB);
        } else {
            const getAPI = await axios.get(`${URL_TYPE}`);
            const typeAPIList = [];
            for (let i = 0; i < getAPI.data.results.length; i++) {
                const typeAPI = await axios.get(getAPI.data.results[i].url)
                typeAPIList.push({
                    name: capitalize(typeAPI.data.name)
                });
            }
            const typeDB = await Type.bulkCreate(typeAPIList);
            console.log('Desde API');
            res.status(200).send(typeDB);
        }
    } catch (error) {
        next(error);        
    }
})

module.exports = router;