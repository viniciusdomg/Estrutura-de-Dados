import Node from "../src/No";
class ArraydeNos{
    constructor(){
        this.array = [];
        this.size = 0;
    }
    add(dado){
        let novo =  new Node(dado);
        novo.proximo = 1;
        
    }
    append(dado){
        let novo = new Node(dado);
        novo.proximo = this.size;
        this.array[this.size++] = novo;
    }
    addAt(dado, pos){
        let novo = new Node(dado);
        
    }
    removeFirst(){
       
    }
    removeLast(){
        
    }
    removeAt(pos){
        
    }
    isEmpty(){
        
    }
    search(dado){
        
    }
    length(){
        return this.size;
    }
    toString(){
        
    }
}