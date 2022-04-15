const URL_POKE = 'https://pokeapi.co/api/v2/pokemon';
const URL_TYPE = 'https://pokeapi.co/api/v2/type';
const URL_LOCAL = 'http://localhost:3001';

function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    URL_POKE,
    URL_TYPE,
    capitalize,
}
