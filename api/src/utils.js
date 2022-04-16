const URL_POKE = 'https://pokeapi.co/api/v2/pokemon';
const URL_TYPE = 'https://pokeapi.co/api/v2/type';
const URL_SERVER = 'http://localhost:3001';

function toUpper (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function toLower(string){
    return string.charAt(0).toLowerCase() + string.slice(1);
}

module.exports = {
    URL_POKE,
    URL_TYPE,
    URL_SERVER,
    toUpper,
    toLower
}
