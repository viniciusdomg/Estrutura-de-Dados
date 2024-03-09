class Pilha {

    constructor(tam = 5) {
        this.dados = [];
        this.tam = tam;
        this.topo = 0;
    }
    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo++] = dado;
            return;
        }
        throw new Error("Stackoverflow");
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stackunderflow");
        } else {
            this.topo--;
        }
    }
    top() {
        if (!this.isEmpty()) {
            return this.dados[this.topo - 1];
        }
        throw new Error("Empty stack");
    }
    clear() {
        this.topo = 0;
    }
    size() {
        return this.topo;
    }
    toString() {
        let resultado = "";
        for (let i = 0; i <= this.topo; i++) {
            resultado += this.dados[i];
        }
        return resultado;
    }
    isEmpty() {
        return this.size() === 0;
    }
    isFull() {
        return this.size() === this.tam;
    }

    reverse(){
        if(!this.isEmpty()){
            let reverseWord = ""
            for(let i=0;i<this.topo;i++){
                reverseWord += this.dados[this.topo - (i+1)];
            }
            return reverseWord;
        }
    }
    changeNumber(pilha){
        let pilhaAuxiliar = new Pilha();
        let pilhaFinal = new Pilha();
        pilhaFinal.push(pilha.top());
        pilha.pop();
        while(true){
            if(pilha.size()-1 === 0){
                break;
            }
            pilhaAuxiliar.push(pilha.top());
            pilha.pop();
        }
        while(true){
            if(pilhaAuxiliar.size()-1===0){
                pilhaFinal.push(pilha.top());
                pilha.pop();
                break;
            }else{
                pilhaFinal.push(pilhaAuxiliar.top());
                pilhaAuxiliar.pop();
            }
        }
        return pilhaFinal.toString();
    }
    convertBinario(number, pilha){
        let pilhaAux = new Pilha();
        let numeroResto;
        while(number>1){
            numeroResto = number%2;
            pilhaAux.push(numeroResto);
            number /= parseInt(number/2);
        }
        if(number===1){
            pilhaAux.push(number);
        }
        while(!pilhaAux.isEmpty()){
            pilha.push(pilhaAux.top());
            pilhaAux.pop();
        }
        return pilha;
    }
}

let p = new Pilha();

console.log(p.convertBinario(7, p));
