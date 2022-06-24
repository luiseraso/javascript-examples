console.log("============================promise/index.js============================");

const doSomething = (status) => {
    return new Promise((resolve, reject) => {
        if(status) {
            resolve("Well done!");
        } else {
            reject("Ups!");
        }
    })
}

const doSomething2 = (status) => {
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            if(status) {
                resolve("True");
            } else {
                reject(new Error("omg!"));
            }         
        }, 2000);
    })
}

doSomething(false)
    .then(resolve => {console.log(resolve)})
    .catch(error => {console.error(error)});

Promise.all([doSomething(true), doSomething2(true)])
    .then(result => console.log(result))
    .catch(error => console.error(error));

