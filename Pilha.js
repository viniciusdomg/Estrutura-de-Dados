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
    returnData(){
        return this.dados;
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
        let pilhaBin = new Pilha(3);
        while(number>1){
            pilhaBin.push(number%2);
            number = parseInt(number /= 2);
        }
        if(number===1){
            pilhaBin.push(number);
        }
        while(!pilhaBin.isEmpty()){
            pilha.push(pilhaBin.top());
            pilhaBin.pop();
        }
        return pilha.returnData();
    }
    formarPilha(pilha){
        let pilhaForma = new Pilha();
        let antAux;
        while(!pilha.isEmpty()){
            if(pilhaForma.isEmpty()){ 
                antAux = "";
                if(pilha.top()==="]" || pilha.top()===")"){return false;}
            }else{
                antAux = pilhaForma.top();
            }
            pilhaForma.push(pilha.top());
            pilha.pop();
            if(antAux==="("){
                if(pilhaForma.top()==="]"){
                    return false;
                }else if (pilhaForma.top()===")"){
                    pilhaForma.pop();
                    pilhaForma.pop();
                }
            }else if(antAux==="["){
                if(pilhaForma.top()===")"){
                    return false;
                }else if (pilhaForma.top()==="]"){
                    pilhaForma.pop();
                    pilhaForma.pop();
                }
            }
        }
        return true;
    }
}

export default Pilha;