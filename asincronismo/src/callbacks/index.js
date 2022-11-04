console.log("============================callbacks/index.js============================");

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(pDate) {
    console.log(pDate);
}

console.log(calc(2, 3, sum));
date(printDate);

