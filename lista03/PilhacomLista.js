import Lista from "../src/Lista";
class Pilhadinamica{
    constructor(){
        this.lista = new Lista();
    }
    push(dado){
        this.lista.append(dado);
    }
    pop(){
        if(!this.isEmpty()){
            this.lista.removeLast();
            return;
        }
        throw new Error("Stackunderflow");
    }
    top(){
        let aux = this.lista.head;
        while(aux.proximo!=null){
            aux = aux.proximo;
        }
        return aux.dado;
    }
    size(){
        return this.lista.length();
    }
    clear(){
        this.lista.head.proximo = null;
    }
    isEmpty(){
        return this.lista.head.proximo === null;
    }
    toString(){
        let aux = this.lista.head.proximo;
        let resultado = "";
        for(let i=0; i<this.lista.length(); i++){
            resultado += aux.dado;
            aux = aux.proximo;
        }
        return resultado;
    }
}

export default Pilhadinamica;