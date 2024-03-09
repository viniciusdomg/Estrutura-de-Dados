import Fila from "../src/Fila";
import filaIntercalar from "../lista02/FilaIntercalar";
import FilaDpEnd from "../lista02/FilaDuplamenteTerm";
import filaReversa from "../lista02/Filarecurssiva";

let f;

beforeEach(
    () => {
        f = new Fila(5);
    }
);

test("Fila instanciada é vazia",
    () => {
        expect(f.isEmpty()).toBe(true);
        expect(f.isFull()).toBe(false);
    }
);

test("Inserções",
    () => {
        f.enqueue("A");
        expect(f.front()).toBe("A");
        f.enqueue("B");
        expect(f.front()).toBe("A");
        f.enqueue("C");
        expect(f.front()).toBe("A");
        f.enqueue("D");
        expect(f.front()).toBe("A");
        f.enqueue("E");
        expect(f.front()).toBe("A");
    }
);


test("Overflow",
    () => {
        f.enqueue("A");
        f.enqueue("B");
        f.enqueue("C");
        f.enqueue("D");
        f.enqueue("E");
        expect(() => f.enqueue("F")).toThrow("Queueoverflow");
    }
);

test("Underflow",
    () => {
        expect(() => f.dequeue()).toThrow("Queueunderflow");
    }
);

test("Tamanho da Pilha recem instanciada é zero",
    () => {
        expect(f.length()).toBe(0);
    }
);

test("A pilha recem instanciada após um push o tamanho é 1",
    () => {
        f.enqueue('A')
        expect(f.length()).toBe(1);
    }
);

test("Outro teste de FIFO",
    () => {
        f.enqueue('A')
        f.enqueue('B')
        f.dequeue()
        expect(f.front()).toBe('B');
    }
);

test("Testando uma fila intercalar",
    () => {
        let fAux = new Fila();
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        f.enqueue(4);
        f.enqueue(5);
        fAux.enqueue(1);
        fAux.enqueue(2);
        fAux.enqueue(3);
        fAux.enqueue(4);
        fAux.enqueue(5);
        fAux.dequeue();
        expect(filaIntercalar(f, fAux)).toStrictEqual([1, 2, 2, 3, 3, 4, 4, 5, 5]);
    }
)

test("Testando uma fila duplamente terminada (deque)",
    () => {
        let f = new FilaDpEnd();
        f.insertInit('C');
        expect(f.fila.front()).toBe('C');
        f.insertEnd('A');
        expect(f.fila.front()).toBe('C');
        f.insertInit('B');
        expect(f.fila.front()).toBe('B');
        f.insertInit('D');
        expect(f.fila.front()).toBe('D');
        f.removeInit();
        expect(f.fila.front()).toBe('B');
        f.removeEnd();
        expect(f.endNumber()).toBe('C');
        f.insertInit('A');
        expect(f.fila.front()).toBe('A');
        f.removeEnd();
        expect(f.endNumber()).toBe('B');
    }
)

test("Fila reversa usando recursão",
    () => {
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        f.enqueue(4);
        f.enqueue(5);
        filaReversa(f);
        expect(f.returnData()).toStrictEqual([5, 4, 3, 2, 1])
    }
)