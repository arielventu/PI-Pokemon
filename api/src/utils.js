const URL_POKE = 'https://pokeapi.co/api/v2/pokemon';
const URL_TYPE = 'https://pokeapi.co/api/v2/type';

function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTypes() {
    const getAPI = await axios.get(`${URL_TYPE}`);
            const typeAPIList = [];
            for (let i = 0; i < getAPI.data.results.length; i++) {
                const typeAPI = await axios.get(getAPI.data.results[i].url)
                typeAPIList.push({
                    name: capitalize(typeAPI.data.name)
                });
            }
            const typeDB = await Type.bulkCreate(typeAPIList);
}

module.exports = {
    URL_POKE,
    URL_TYPE,
    capitalize,
    getTypes
}
