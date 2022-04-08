const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRouter = require('./pokemons.js');
const typeRouter = require('./types.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokemonRouter);
router.use('/types', typeRouter);

router.get('/', (req, res) => { 
    res.send('GET Home')
})


module.exports = router;
