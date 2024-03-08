import Pilha from "../src/Pilha";
class FilacomPilha{
    constructor(){
        this.pilha = new Pilha();
        this.pilhaAux = new Pilha();
    }
    enqueue(dado){
        if(!this.isFull()){
            this.pilha.push(dado);
            return;
        }
        throw new Error("Queueoverflow");
    }
    dequeue(){
        if(!this.isEmpty()){
            for(let i=this.pilha.topo; i>1; i--){
                this.pilhaAux.push(this.pilha.top());
                this.pilha.pop();
            }
            this.pilha.pop();
            for(let i=this.pilhaAux.topo; i>1; i--){
                this.pilha.push(this.pilhaAux.top());
                this.pilhaAux.pop();
            }
            return;
        }
        throw new Error("Unqueueundeflow");
    }
    front(){
        if(!this.isEmpty()){
            for(let i=this.pilha.topo; i>1; i--){
                this.pilhaAux.push(this.pilha.top());
                this.pilha.pop();
            }
            let front = this.pilha.top();
            for(let i=this.pilhaAux.topo; i>1; i--){
                this.pilha.push(this.pilhaAux.top());
                this.pilhaAux.pop();
            }
            return front;
        }
        throw new Error("Unqueuenderflow");
    }
    clear(){
        this.topo = 0;
    }
    length(){
        return this.topo;
    }
    isEmpty(){
        return this.pilha.size() === 0;        
    }
    isFull(){
        
        return this.pilha.size() === this.pilha.tam;
    }
}

export default FilacomPilha;