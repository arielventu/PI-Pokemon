const URL_POKE = 'https://pokeapi.co/api/v2/pokemon';
const URL_TYPE = 'https://pokeapi.co/api/v2/type';
const URL_SERVER = 'http://localhost:3001';

function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function startCapital(word){
    return word.charAt(0) === word.charAt(0).toUpperCase()
}

module.exports = {
    URL_POKE,
    URL_TYPE,
    URL_SERVER,
    capitalize,
    startCapital
}
