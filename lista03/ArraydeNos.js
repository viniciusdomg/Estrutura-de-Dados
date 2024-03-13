import Node from "../src/No";
class ArraydeNos{
    constructor(){
        this.array = [];
        this.size = 0;
    }
    add(dado){
        let novo =  new Node(dado);
        novo.proximo = 1;
        let aux_a = this.array[0];
        this.array[0] = novo;
        let aux_b;
        for(let x=1; x<this.length(); x++){
            aux_b = this.array[x];
            this.array[x] = aux_a;
            this.array[x].proximo += 1;
            aux_a = aux_b;
        }
        this.size++;
    }
    append(dado){
        let novo = new Node(dado);
        novo.proximo = this.size;
        this.array[this.size++] = novo;
    }
    addAt(dado, pos){
        let novo = new Node(dado);
        let aux_a = this.array[pos-1];
        novo.proximo = this.array[pos-1].proximo;
        this.array[pos-1] = novo;
        let aux_b;
        for(let x=pos; x<this.length(); x++){
            aux_b = this.array[x];
            this.array[x] = aux_a;
            this.array[x].proximo += 1;
            aux_a = aux_b;
        }
    }
    removeFirst(){
       for(let x=1;x<this.length();x++){
            this.array[x-1] = this.array[x];
            this.array[x-1].proximo -= 1;
       }
       this.size--;
    }
    removeLast(){
        this.size -= 1;
    }
    removeAt(pos){
        for(let x=pos; x<this.length(); x++){
            this.array[pos-1] = this.array[pos];
            this.array[pos-1].proximo -= 1;
        }
        this.size--;
    }
    isEmpty(){
        return this.size === 0;
    }
    search(dado){
        for(let x=0;x<this.length(); x++){
            if(dado === this.array[x].dado){
                return this.array[x].dado;
            }
        }
        throw new Error("Não existe esse dado")
    }
    length(){
        return this.size;
    }
    toString(){
        let resultado = "";
        for(let x=0;x<this.length(); x++){
            resultado += this.array[x].dado;
        }
        return resultado;
    }
}

export default ArraydeNos;