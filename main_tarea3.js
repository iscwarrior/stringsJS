/* Se necesita poder
    Entrada: Anglosajon
    Salida:  anglo 
             sajon
    Entrada: Enttrada
    Salida : ent 
            ada
    Entrada: Salinas
    Salida: sal 
            nas
*/

let splitName = { name:"Daniels" }
let partLetters = letter => {
    let str = splitName.name.length;
    let half = str/2
    str % 2 == 0 ? msj = splitName.name.slice(0, half).concat("\n"+splitName.name.slice(half)) : msj = splitName.name.slice(0, half).concat("\n"+splitName.name.slice(half+1));
    return (msj)
}
console.log(partLetters(splitName))
