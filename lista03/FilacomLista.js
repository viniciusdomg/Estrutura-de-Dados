import Lista from "../src/Lista";
class Filadinamica{
    constructor(){
        this.lista = new Lista();
    }
    enqueue(dado){
        this.lista.append(dado);
    }
    dequeue(){
        if(!this.isEmpty()){
            this.lista.removeFirst();
            return;
        }
        throw new Error("Queueunderflow");
    }
    front(){
        return this.lista.head.proximo.dado;
    }
    length(){
        return this.lista.length();
    }
    clear(){
        this.lista.head = null;
    }
    isEmpty(){
        return this.lista.head === null;
    }
    toString(){
        let aux = this.lista.head.proximo;
        let resultado = "";
        for(let i=0; i<this.length(); i++){
            resultado += aux.dado;
            aux = aux.proximo;
        }
        return resultado;
    }
}

export default Filadinamica;