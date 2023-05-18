import validateValue from "./validateValue.js";

// test("Валидация значения", () => {
//     expect(validateValue(50)).toBe(true);
// });

// describe используется для описания нескольких тестов

describe("validateValue", () => {
    // toBe сравнивает значения
    test("Корректное значение", () => {
        expect(validateValue(50)).toBe(true);
    });
    test("Меньше корректного значения", () => {
        expect(validateValue(-1)).toBe(false);
    });
    test("Больше корректного значения", () => {
        expect(validateValue(101)).toBe(false);
    });
    test("Пограничное значение снизу", () => {
        expect(validateValue(0)).toBe(true);
    });
    test("Пограничное значение сверху", () => {
        expect(validateValue(100)).toBe(true);
    });
});
