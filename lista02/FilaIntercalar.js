import Fila from "../src/Fila";

function filaIntercalar(fila_a, fila_b){
    let fila = new Fila(10);
    while(!fila_a.isEmpty() || !fila_b.isEmpty()){
        if(!fila_a.isEmpty()){
            fila.enqueue(fila_a.front());
            fila_a.dequeue();
        }
        if(!fila_b.isEmpty()){
            fila.enqueue(fila_b.front());
            fila_b.dequeue();
        }
    }
    return fila.returnData();
}

export default filaIntercalar;