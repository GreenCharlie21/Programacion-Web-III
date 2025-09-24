//12. Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede reescribir mejor con async/await haciendo el código más limpio y mantenible.
//Ejemplo con callbacks anidados
function t1(callback) {
    setTimeout(() => {
        callback("Callback 1 (12)")
    }, 1000);
}
function t2(callback) {
    setTimeout(() => {
        callback("Callback 2 (12)")
    }, 1000);
}
t1(r1 => {
    console.log(r1);
    t2(r2 => {
        console.log(r2); //Si se anidan mas callbacks el codigo se vuelve dificil de leer
    });
});
//Lo reescribimos con async/await
let promesa12a = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Async (12)")
    }, 2000)
});
let promesa12b = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Await (12)")
    }, 2000)
});
async function ejec12() {
    let r1 = await promesa12a;
    console.log(r1);
    let r2 = await promesa12b;
    console.log(r2);
}
ejec12();