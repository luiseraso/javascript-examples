console.log("============================async/challenge.js============================");
const fetchData = require('../util/fetchData');
const API = "https://rickandmortyapi.com/api/character/";

const getData = async (urlApi) => {
    try {
        const data = await fetchData(urlApi);
        const character = await fetchData(`${urlApi}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(`COUNT: ${data.info.count}`);
        console.log(`NAME: ${character.name}`);
        console.log(`DIMENSION: ${origin.dimension}`);

    } catch (e) {
        console.error(e)
    }
}

console.log("Before");
getData(API);
console.log("After");