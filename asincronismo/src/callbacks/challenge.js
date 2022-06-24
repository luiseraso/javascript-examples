console.log("============================callbacks/index.js============================");

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";

let basicFetchData = (urlApi) => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            console.log(JSON.parse(xhttp.responseText))                
        } else {
            console.error(new Error(`ERROR => ${urlApi}`));        
        }
    };

    xhttp.open("GET", urlApi, true);
    xhttp.send();
}
//basicFetchData(API);

let fetchData = (urlApi, callback) => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error(`ERROR => ${urlApi}`);                
                callback(error, null);
            }            
        }
    };

    xhttp.open("GET", urlApi, true);
    xhttp.send();
}

fetchData(API, (error1, data1) => {
    if(error1) {
        console.error(error1);
    } else {
        fetchData(API+data1.results[0].id, (error2, data2) => {
            if (error2) {
                console.log(error2)
            } else {
                fetchData(data2.origin.url, (error3, data3) => {
                    if (error3) {
                        console.log(error3)
                    } else {
                        console.log(`COUNT: ${data1.info.count}`);
                        console.log(`NAME: ${data2.name}`);
                        console.log(`DIMENSION: ${data3.dimension}`);
                    }
                });                                 
            }
        });
    }
});
