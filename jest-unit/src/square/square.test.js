import square from "./square";
import { expect, jest, test } from "@jest/globals";

describe("square", () => {
    let mockValue;

    // beforeEach вызывается перед каждым тестом

    beforeEach(() => {
        mockValue = Math.random();
        // Как пример, добавление в БД
    });

    // beforeAll вызывается один раз перед всеми тестами

    beforeAll(() => {});

    test("Корректное значение", () => {
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(3);
        // expect(square(2)).not.toBeUndefined();
        const spyMathPow = jest.spyOn(Math, "pow");
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });

    test("Корректное значение", () => {
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(3);
        // expect(square(2)).not.toBeUndefined();
        const spyMathPow = jest.spyOn(Math, "pow");
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });

    // afterEach вызывается после каждого теста

    afterEach(() => {
        // Как пример, удаление добавленных данных из БД
        jest.clearAllMocks();
    });

    // afterAll вызывается один раз после всех тестов

    afterAll(() => {});
});
