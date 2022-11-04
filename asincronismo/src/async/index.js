console.log("============================async/index.js============================");

const doSomethingAsync = (status) => new Promise((resolve, reject) => {
    console.log("Init doSomethingAsync");
    status
        ? setTimeout(() => {resolve("Well Done!")}, 3000)
        : reject(new Error("UPS!"));
    console.log("End doSomethingAsync");
});

const doSomething = () => {
    console.log("Init doSomething");
    doSomethingAsync(true)
        .then(result => console.log(result))
        .catch(error => console.log(error));
        
    console.log("End doSomething");
}

const doSomething2 = () => {
    console.log("Init doSomething2");
    const result = doSomethingAsync(true);
    console.log(result); // Promise { <pending> }
        
    console.log("End doSomething2");
}

const doSomethingAwait = async () => {
    console.log("Init doSomethingAwait");
    const result = await doSomethingAsync(true);
    console.log(result);
    console.log("End doSomethingAwait");
}

const doSomethingAwait2 = async () => {
    console.log("Init doSomethingAwait2");
    try {
        const result = await doSomethingAsync(true);
        console.log(result);
    } catch(error) {
        console.error(error);
    }
    console.log("End doSomethingAwait2");
}


console.log("Before2");
doSomethingAwait();
console.log("After2");
