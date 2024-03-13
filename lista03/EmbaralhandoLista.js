import Lista from "../src/Lista.js";
function embaralhar(lista){
    let cont = 1;
    let pos;
    let proximo;
    let auxiliar_a = lista.head.proximo;
    let auxiliar_b = lista.head;
    while(cont<lista.length()){
        pos = Math.floor(Math.random() * (lista.length() - 1 + 1) + 1);
        for(let x=1; x<pos; x++){
            auxiliar_a = auxiliar_a.proximo;
            auxiliar_b = auxiliar_b.proximo;
        }
        proximo = auxiliar_a.proximo;
        auxiliar_b.proximo = lista.head.proximo;
        auxiliar_a.proximo = lista.head.proximo.proximo;
        lista.head.proximo.proximo = proximo;
        lista.head.proximo = auxiliar_a;
        auxiliar_a = lista.head.proximo 
        auxiliar_b = lista.head;
        cont++;
    }
}

let l = new Lista();
l.add('A');
l.append('B');
l.append('C');
l.append('D');
l.append('E');
l.append('F');
embaralhar(l);
console.log(l.toString());