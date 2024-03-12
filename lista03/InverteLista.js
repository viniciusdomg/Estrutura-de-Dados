function inverteLista(lista){  
    if(!lista.isEmpty()){
        let node_a = lista.head.proximo;
        let node_b = node_a;
        let dadoaux;
        while(node_b.proximo!==null){
            node_b = node_b.proximo;
        }
        let enderecoaux = node_b;
        node_b = lista.head.proximo;
        while(node_a.proximo!==enderecoaux && node_a!==enderecoaux){
            if(node_b.proximo===enderecoaux && node_a.proximo!=null){
                dadoaux = enderecoaux.dado;
                enderecoaux.dado = node_a.dado;
                node_a.dado = dadoaux;
                node_a = node_a.proximo;
                enderecoaux = node_b;
                node_b = node_a;
            }
            node_b = node_b.proximo;
        }
        dadoaux = enderecoaux.dado;
        enderecoaux.dado = node_a.dado;
        node_a.dado = dadoaux;
        return;
    }
    throw new Error("Lista vazia");
}

export default inverteLista;