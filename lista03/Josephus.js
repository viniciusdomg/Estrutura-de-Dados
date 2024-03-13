import Lista from "../src/Lista.js";
function josephus(lista, contagem){
    if(contagem<lista.length() && contagem>0){
        let position = 0;
        let aux = lista.head.proximo;
        while(lista.length()>1){
            if(position===contagem){
                position = 0;
                lista.removeAt(lista.search(aux.dado));
            }else{
                position++;
            }
            aux = aux.proximo;
            if(aux === null){
                aux = lista.head.proximo;
            }
        }
        return;
    }
    return "Contagem de remocao maior que a lista ou menor que 1";
}

let l =  new Lista();
l.append(1);
l.append(2);
l.append(3);
l.append(4);
l.append(5);
l.append(6);
l.append(7);
l.append(8);
l.append(9);
josephus(l, 1);
console.log("Elemento que sobrou === ",l.toString());
