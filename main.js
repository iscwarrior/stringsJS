/*  Se necesita las iniciales de cualquier nombre completo:
    nombre, apellido materno, apellido paterno
    Ejemplos: 
        - Israel Salinas Martines -> I. S. M.
        - Jorge del Rio Hernandez -> D.D.H
*/
let completeName = {
    name: "Daniel",
    lastName1: "Flores",
    lastName2: "Guerrero"
}

const mayusLetter = nombre => {
    let name1 = nombre.name.substring(0, 1);
    let lastname_1 = nombre.lastName1.substring(0, 1);
    let lastname_2 = nombre.lastName2.substring(0, 1);
    let lastname_3 = nombre.name.concat(" " + nombre.lastName1).concat(" " + nombre.lastName2);
    // console.log(name1) // console.log(lastname_1) // console.log(lastname_2) // console.log(lastname_3)
    let complemeteName2 = name1.concat(". ").concat(lastname_1).concat(". ").concat(lastname_2).concat(".");
    let result = console.log(complemeteName2)
    return result, lastname_3
}

console.log(mayusLetter(completeName))



