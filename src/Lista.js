import Node from "./No.js";
class Lista{
    constructor(){
        this.head = new Node();
        this.size = 0
    }
    add(dado){
        let novo = new Node(dado);
        novo.proximo = this.head.proximo;
        this.head.proximo = novo;
        this.size++;
    }
    append(dado){
        let novo = new Node(dado);
        let aux = this.head;
        while(aux.proximo!=null){
            aux = aux.proximo;
        }
        aux.proximo = novo;
        novo.proximo = null;
        this.size++;
    }
    addAt(dado, pos){
        if(pos<=this.size){
            let cont = 1;
            let novo = new Node(dado);
            let aux = this.head;
            while(cont<pos){
                aux = aux.proximo;
                cont++;
            }
            novo.proximo = aux.proximo;
            aux.proximo = novo;
            this.size++;
            return;
        }
        throw new Error("Posicao Inexistente");
    }
    removeFirst(){
        if(!this.isEmpty()){
            let aux = this.head.proximo;
            if(aux!=null){
                this.head.proximo = aux.proximo;
                this.size--;
                return;
            }
            this.head.proximo = null;
            this.size--;
            return;
        }
        throw new Error("Lista vazia");
    }
    removeLast(){
        if(!this.isEmpty()){
            let aux_a = this.head.proximo;
            let aux_b = this.head;
            while(aux_a.proximo!=null){
                aux_a = aux_a.proximo
                aux_b = aux_b.proximo;
            }
            aux_b.proximo = null;
            this.size--;
            return;
        }
    }
    removeAt(pos){
        if(pos<=this.size){
            let cont = 1;
            let aux_a = this.head.proximo;
            let aux_b = this.head;
            while(cont<pos){
                cont++;
                aux_a = aux_a.proximo;
                aux_b = aux_b.proximo;
            }
            aux_b.proximo = aux_a.proximo;
            this.size--;
            return;
        }
        throw new Error("Lista vazia");
    }
    isEmpty(){
        return this.head.proximo === null;
    }
    search(dado){
        if(!this.isEmpty()){
            let aux = this.head;
            let x = 1;
            while(aux.proximo!=null){
                if(aux.proximo.dado===dado){
                    return x;
                }
                aux = aux.proximo;
                x++;
            }
        }
        return "Elemento não encontrado";
    }
    length(){
        return this.size;
    }
    toString(){
        let aux = this.head.proximo;
        let resultado = "";
        for(let i=0; i<this.length(); i++){
            resultado += aux.dado;
            aux = aux.proximo;
        }
        return resultado;
    }
}

export default Lista;