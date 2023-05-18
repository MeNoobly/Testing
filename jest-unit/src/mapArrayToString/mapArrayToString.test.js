import mapArrayToString from "./mapArrayToString";

describe("mapArrayToString", () => {
    // toEqual сравнивает содержимое, а не значения
    test("Корректное значение", () => {
        expect(mapArrayToString([1, 2, 3])).toEqual(["1", "2", "3"]);
    });
    test("Мешанина", () => {
        expect(mapArrayToString([1, 2, 3, null, undefined, "string"])).toEqual([
            "1",
            "2",
            "3",
        ]);
    });
    test("Пустой массив", () => {
        expect(mapArrayToString([])).toEqual([]);
    });
    test("Отрицание", () => {
        // при использовании not, сравнивается, что значения не должны быть равными
        expect(mapArrayToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    });
});
