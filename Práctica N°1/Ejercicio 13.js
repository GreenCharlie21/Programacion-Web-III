//13. Proporcione un ejemplo concreto donde el anidamiento de promesas se puede reescribir mejor con async/await haciendo el código más limpio y mantenible.
//Ejemplo con promesas anidadas
let promesa13a = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5)}
        , 1000)
});
let promesa13b = (num) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(num * 2)
    }, 1000)
});
promesa13a
  .then(res => {
      console.log("Un numero:", res,"(13)");
      promesa13b(res)
        .then(res2 => {
            console.log("Multiplicado por 2:", res2,"(13)"); //Lo mismo que el ejercicio anterior, mas promesas anidadas lo volverian dificil de leer
        });
  });
//Lo reescribimos con async/await
let promesa13c = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5)
    }, 2000)
});
let promesa13d = (num) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(num * 2)
    }, 2000)
});
async function ejec13() {
    let num13 = await promesa13c;
    console.log("Un numero:", num13,"(13)");
    let res3 = await promesa13d(num13);
    console.log("Multiplicado por 2:", res3,"(13)");
}
ejec13();