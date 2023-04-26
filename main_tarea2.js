/* Se necesita evaluar que los nombres de mis productos sean fáciles de recordar:
    - Los productos cuyo nombre tiene menos de 5 letras son fáciles
    - Los mas largos a 5 letras son dificiles
*/
let productName = { name: "coca" }

const lenghtName = anythingName => {
    let name1 = anythingName.name;
    let lengthName = name1.length;
    lengthName<=5 ? msj="El nombre del producto es facil de recordar =)" : msj="El nombre del producto es dificil de recordar :( ";
    return msj;
}

console.log(lenghtName(productName ))
