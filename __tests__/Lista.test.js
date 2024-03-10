import Lista from "../src/Lista";

let l;

beforeEach(
    () => {
        l = new Lista();
    }
)

test("Inserções nas lista",
    () => {
        l.add(2);
        l.add(1);
        expect(l.search(1)).toBe(1);
        expect(l.search(2)).toBe(2);
        l.append(3);
        expect(l.search(3)).toBe(3);
        l.add(5);
        expect(l.search(5)).toBe(1);
        l.append(4);
        expect(l.search(4)).toBe(5);
        l.addAt(12,2);
        expect(l.search(12)).toBe(2);

    }
)

test("Remoções na lista",
    () => {
        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);
        l.append(5);
        l.removeLast();
        expect(l.search(5)).toBe("Elemento não encontrado");
        expect(l.length()).toBe(4);
        l.removeFirst();
        expect(l.search(2)).toBe(1);
        expect(l.length()).toBe(3);
        l.removeAt(2);
        expect(l.search(2)).toBe(1);
        expect(l.search(4)).toBe(2);
    }
)