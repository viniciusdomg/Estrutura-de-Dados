class Fila{
    constructor(capacidade = 5){
        this.capacidade = capacidade;
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
    }
    enqueue(dado){
        if(!this.isFull()){
            this.dados[this.fim++] = dado;
            return;
        }
        throw new Error("Queueoverflow");
    }
    dequeue(){
        if(!this.isEmpty()){
            this.inicio++;
            return;
        }
        throw new Error("Queueunderflow");
    }
    front() {
        if (!this.isEmpty()) {
            return this.dados[this.inicio];
        }
        throw new Error("empty queue");
    }
    clear() {
        this.inicio = 0;
        this.fim = 0;
    }
    length() {
        return this.fim - this.inicio;
    }
    isEmpty(){
        return this.fim === this.inicio;
    }
    isFull(){
        return this.length() === this.capacidade;
    }
    toString() {
        let resultado = '';
        for (let i = this.inicio; i < this.fim; i++) {
            resultado += this.dados[i] + " ";
        }
        return resultado;
    }
    returnData(){
        return this.dados.slice(this.inicio, this.fim);
    }
}

export default Fila;