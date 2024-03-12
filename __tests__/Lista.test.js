import Lista from "../src/Lista";
import Pilhadinamica from "../lista03/PilhacomLista";
import Filadinamica from "../lista03/FilacomLista";
import inverteLista from "../lista03/InverteLista";

let l;
let p;
let f;

beforeEach(
    () => {
        l = new Lista();
    }
)

// test("Inserções nas lista",
//     () => {
//         l.add(2);
//         l.add(1);
//         expect(l.search(1)).toBe(1);
//         expect(l.search(2)).toBe(2);
//         l.append(3);
//         expect(l.search(3)).toBe(3);
//         l.add(5);
//         expect(l.search(5)).toBe(1);
//         l.append(4);
//         expect(l.search(4)).toBe(5);
//         l.addAt(12,2);
//         expect(l.search(12)).toBe(2);

//     }
// )

// test("Remoções na lista",
//     () => {
//         l.append(1);
//         l.append(2);
//         l.append(3);
//         l.append(4);
//         l.append(5);
//         l.removeLast();
//         expect(l.search(5)).toBe("Elemento não encontrado");
//         expect(l.length()).toBe(4);
//         l.removeFirst();
//         expect(l.search(2)).toBe(1);
//         expect(l.length()).toBe(3);
//         l.removeAt(2);
//         expect(l.search(2)).toBe(1);
//         expect(l.search(4)).toBe(2);
//     }
// )

// test("Pilha dinâmica",
//     () => {
//         p = new Pilhadinamica();
//         p.push('A');
//         expect(p.top()).toBe('A');
//         p.push('B');
//         expect(p.top()).toBe('B');
//         p.push('C');
//         p.pop();
//         expect(p.top()).toBe('B');
//         expect(p.toString()).toBe('AB');
//         p.pop();
//         p.pop();
//         expect(() => p.pop()).toThrow("Stackunderflow");
//     }
// )

// test("Fila dinamica",
//     () => {
//         f = new Filadinamica();
//         f.enqueue('A');
//         f.enqueue('B');
//         expect(f.front()).toBe('A');
//         f.enqueue('C');
//         expect(f.toString()).toBe('ABC');
//         f.dequeue();
//         expect(f.toString()).toBe('BC');
//         f.clear();
//         expect(() => f.dequeue()).toThrow("Queueunderflow");
//     }
// )

test("Invertendo valores de uma lista",
    () => {
        l.append('A');
        l.append('B');
        l.append('C');
        l.append('D');
        l.append('D');
        inverteLista(l);
        expect(l.toString()).toBe('DDCBA');
    }
)