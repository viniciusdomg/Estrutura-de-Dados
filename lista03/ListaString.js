import Lista from "../src/Lista.js";
function armazenaString(lista, string){
    for(const caractere of string){
        lista.append(caractere);
    }   
}
function subString(pos_a, pos_b, lista){
    if(pos_b<lista.length() && pos_a>=1){
        let nova_lista = new Lista();
        let aux = lista.head.proximo;
        for(let x=1; x<lista.length(); x++){
            if(x>=pos_a && x<=pos_b){
                nova_lista.append(aux.dado);
            }
            aux = aux.proximo;
        }
        return nova_lista;
    }
    return "Posição inexistente";
}

let l = new Lista();
armazenaString(l,"Estrutura de Dados 2024");
l = subString(1,11,l);
console.log(l.toString());