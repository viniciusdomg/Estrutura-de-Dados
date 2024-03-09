import Fila from "../src/Fila";

function filaReversa(fila){
    let aux;
    if(fila.length()>0){
        aux = fila.front();
        fila.dequeue()
        filaReversa(fila);
        fila.enqueue(aux);
    }
    return fila;
}

export default filaReversa;