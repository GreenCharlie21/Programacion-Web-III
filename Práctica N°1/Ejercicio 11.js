//11. Proporcione un ejemplo concreto de encadenamiento de promesas.
let promesa11 = new Promise((resolve) => {
    resolve(5)
});
let sum2 = num => new Promise((resolve) => {
    resolve(num + 2)
});
let mul3 = num => new Promise((resolve) => {
    setTimeout(() => {
        resolve(num * 3)
    }, 1000)
});
promesa11
  .then(sum2)
  .then(mul3)
  .then(res => {
    console.log(res,"(11)")
});