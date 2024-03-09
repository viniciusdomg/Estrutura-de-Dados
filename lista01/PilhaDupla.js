class Pilhadupla{

    constructor(tam = 6){
        this.dados = [];
        this.tam = tam;
        this.topoA = -1;
        this.topoB = this.tam;
    }
    empilhaA(dado){
        if(!this.isFull()){
            this.dados[++this.topoA] = dado;
            return;
        }
        throw new Error("Stackoverflow");
    }
    empilhaB(dado){
        if(this.topoB-1>this.topoA){
            this.dados[--this.topoB] = dado;
            return;
        }
        throw new Error("Stackoverflow");
    }
    desempilhaA(){
        if(this.topoA+1>0){
            this.topoA--;
            return;
        }
        throw new Error("Stackunderflow");
    }
    desempilhaB(){
        if(this.topoB<this.tam){
            this.topoB++;
            return;
        }
        throw new Error("Stackunderflow");
    }
    topA(){
        if(!this.eVaziaA()){
            return this.dados[this.topoA];
        }
        throw new Error("Pilha A vazia")
    }
    topB(){
        if(!this.eVaziaB()){
            return this.dados[this.topoB];
        }
        throw new Error("Pilha B vazia")
    }
    eVaziaA(){
        return this.topoA === -1;
    }
    eVaziaB(){
        return this.topoB === this.tam;
    }
    isFull(){
        return this.topoA+1 === this.topoB;
    }
}

export default Pilhadupla;