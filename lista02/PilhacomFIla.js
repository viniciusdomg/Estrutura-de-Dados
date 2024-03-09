import Fila from "../src/Fila";

class PilhacomFila{

    constructor(){
        this.fila = new Fila();
        this.filaAux = new Fila();
    }
    push(dado){
        if(!this.isFull()){
            this.fila.enqueue(dado);
            return;
        }
        throw new Error("Stackoverflow");
    }
    pop(){
        if(!this.isEmpty()){
            for(let i = this.fila.inicio; i<this.fila.fim-1; i++){
                this.filaAux.enqueue(this.fila.front());
                this.fila.dequeue();
            }   
            this.fila.clear();
            for(let i = this.filaAux.inicio; i<this.filaAux.fim; i++){
                this.fila.enqueue(this.filaAux.front());
                this.filaAux.dequeue();
            }
            this.filaAux.clear();
            return; 
        }
        throw new Error("Stackunderflow");
    }
    size(){
        return this.fila.length();
    }
    top(){
        return this.fila.dados[this.fila.fim-1];
    }
    isEmpty(){
        return this.fila.length() === 0; 
    }
    isFull(){
        return this.fila.length() === this.fila.capacidade;
    }

}

export default PilhacomFila;