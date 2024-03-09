import Fila from "../src/Fila";

class FilaDpEnd{
    constructor(){
        this.fila = new Fila();
        this.fila_b = new Fila();
    }
    insertInit(dado){
        if(!this.fila.isFull()){
            for(let i=this.fila.inicio; i<this.fila.fim; i++){
                this.fila_b.enqueue(this.fila.front());
                this.fila.dequeue();
            }
            this.fila.enqueue(dado); 
            for(let i=this.fila_b.inicio; i<this.fila_b.fim; i++){
                this.fila.enqueue(this.fila_b.front());
                this.fila_b.dequeue();
            }
            return;
        }
        throw new Error("Queueoverflow");
    }
    insertEnd(dado){
        if(!this.fila.isFull()){
            this.fila.enqueue(dado);
            return;
        }
        throw new Error("Queueoverflow");
    }
    removeInit(){
        if(!this.fila.isEmpty()){
            this.fila.dequeue();
            return;
        }
        throw new Error("Queueunderflow");
    }
    removeEnd(){
        if(!this.fila.isEmpty()){
            while (!this.fila.isEmpty()) {
                if (this.fila.length() === 1) {
                    this.fila.dequeue();
                } else {
                    this.fila_b.enqueue(this.fila.front());
                    this.fila.dequeue();
                }
            }
            while (!this.fila_b.isEmpty()) {
                this.fila.enqueue(this.fila_b.front());
                this.fila_b.dequeue();
            }
            return;
        }
        throw new Error("Queueunderflow");
    }
    endNumber(){
        return this.fila.dados[this.fila.fim-1];
    }
}

export default FilaDpEnd;