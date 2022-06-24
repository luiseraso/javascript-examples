console.log("============================promise/challenge.js============================");
const fetchData = require('../util/fetchData');
const API = "https://rickandmortyapi.com/api/character/";

/*
fetchData(API)
    .then(result => console.log(result))
    .catch(error => console.error(error));
*/

fetchData(API)
    .then(data1 => {
        console.log(`COUNT: ${data1.info.count}`);
        return fetchData(API+data1.results[0].id)
    })
    .then(data2 => {
        console.log(`NAME: ${data2.name}`);
        return fetchData(data2.origin.url)
    })
    .then(data3 => {
        console.log(`DIMENSION: ${data3.dimension}`);
    })
    .catch(error => {
        console.error(error);
    });

