import Fila from "../src/Fila";
class Filacaminhoneiro{
    constructor(){
        this.fila = new Fila(10);
        this.capacidade = 10;
    }
    addCaminhoneiro(dado){
        if(!this.loteded()){
            this.fila.enqueue(dado);
            return;
        }
        throw new Error("Queueoverflow");
    }
    caminhoneiroServed(){
        if(this.fila.inicio!=this.fila.fim){
            this.fila.dequeue();
            return;
        }
        throw new Error("Queueunderflow");
    }
    wait(){
        return this.fila.length() > 1;       
    }
    loteded(){
        return this.fila.fim === this.capacidade;
    }
    list(){
        this.filaAuxilar = new Fila(10);
        let first = this.fila.front();
        this.fila.dequeue();
        for(let i=this.fila.inicio; i<this.fila.fim; i++){
            this.filaAuxilar.enqueue(this.fila.front());
            this.fila.dequeue();
        }
        this.fila.enqueue(first);
        for(let i=this.filaAuxilar.inicio; i<this.filaAuxilar.fim; i++){
            this.fila.enqueue(this.filaAuxilar.front());
        }
        return this.filaAuxilar.toString();
    }
}

export default Filacaminhoneiro;