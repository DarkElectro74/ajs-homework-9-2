
import Validator from '../app';

test('Успешная валидация', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Petr');
  expect(received).toBe(true);
});

test('Начинается подчеркиванием', () => {
  const validator = new Validator();
  const received = validator.validateUsername('_Petr');
  expect(received).toBe(false);
});

test('Заканчивается подчеркиванием', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Petr_');
  expect(received).toBe(false);
});

test('Начинается с тире', () => {
  const validator = new Validator();
  const received = validator.validateUsername('-Petr');
  expect(received).toBe(false);
});

test('Начинается с цифры', () => {
  const validator = new Validator();
  const received = validator.validateUsername('1Petr');
  expect(received).toBe(false);
});

test('Заканчивается цифрой', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Petr1');
  expect(received).toBe(false);
});

test('Более трех цифр подряд', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Petr999999999');
  expect(received).toBe(false);
});
