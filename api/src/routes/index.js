const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRouter = require('./pokemons.js');
const typesRouter = require('./types.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);

router.get('/', (req, res) => {
    res.send('estoy en el home');
})



module.exports = router;
