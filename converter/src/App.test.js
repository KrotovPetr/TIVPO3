import {getAnswer} from "./answer";

test('My first test', () => {
    expect(Math.max(1, 5, 10)).toBe(10);
});

test('Test correct data from cm to cm', () => {
    expect(getAnswer(1,1,1)).toBe(1);
});

test('Test correct data from cm to cm', () => {
    expect(getAnswer(1,1,1)).toBe(1);
});
test('Test correct data from km to cm', () => {
    expect(getAnswer(100000,1,1)).toBe(100000);
});
test('Test correct data from cm to inch', () => {
    expect(getAnswer(1,2.54,10)).toBe(3.9370078740157477);
});
