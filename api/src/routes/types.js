const { Router } = require("express");


const router = Router()

router.get('/', async (req, res, next) => { 
    const typeDB = await Type.findAll();
    if (typeDB != null) {
        res.status(200).send(typeDB);
    } else {
        const getAPI = await axios.get(`${URL_TYPE}`);
        const typeAPIList = [];
        for (let i = 0; i < getAPI.data.results.length; i++) {
            const typeAPI = await axios.get(getAPI.data.results[i].url)
            typeAPIList.push({
                id: typeAPI.data.id,
                name: capitalize(typeAPI.data.name)
            });
        }
        const typeDB = await Type.bulkCreate(typeAPIList);
        res.status(200).send(typeDB);
    }
})

module.exports = router;