const somar = (num1: number, num2: number) => {
  return num1 + num2;
};

test("Exemplo 1", () => {
  const num1 = 10;
  const num2 = 20;

  expect(somar(num1, num2)).toBe(30);
});
