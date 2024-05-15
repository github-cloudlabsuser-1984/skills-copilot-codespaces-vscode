const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the operator (+, -, *, /): ', (operator) => {
    rl.question('Enter the second number: ', (num2) => {
      let result;
      switch(operator) {
        case '+':
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          if (num2 != 0) {
            result = parseFloat(num1) / parseFloat(num2);
          } else {
            console.log('Error! Division by zero.');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Invalid operator!');
          rl.close();
          return;
      }
      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});

const calculate = require('./calculate');

test('adds 1 + 2 to equal 3', () => {
  expect(calculate(1, '+', 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calculate(5, '-', 3)).toBe(2);
});

test('multiplies 4 * 2 to equal 8', () => {
  expect(calculate(4, '*', 2)).toBe(8);
});

test('divides 8 / 2 to equal 4', () => {
  expect(calculate(8, '/', 2)).toBe(4);
});

test('throws error when dividing by zero', () => {
  expect(() => calculate(5, '/', 0)).toThrow('Error! Division by zero.');
});

test('throws error when operator is invalid', () => {
  expect(() => calculate(5, 'x', 3)).toThrow('Invalid operator!');
});