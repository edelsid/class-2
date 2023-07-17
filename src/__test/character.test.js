import Daemon from '../daemon';
import Bowman from '../bowman';

const dataList = [
  ['Y', 'Daemon', 'Имя персонажа слишком короткое/длинное'],
  ['Yddramorral', 'Daemon', 'Имя персонажа слишком короткое/длинное'],
  ['Fafnir', 1, 'Такого класса не существует'],
];

const handler = test.each(dataList);

handler('testing errors', (name, type, expected) => {
  expect(() => new Daemon(name, type)).toThrow(expected);
});

test('error4', () => {
  const char = new Bowman('Lisette', 'Bowman');
  char.health = 0;
  expect(() => { char.levelUp(); }).toThrow('Нельзя повысить уровень умершего');
});

test('error5', () => {
  const char = new Bowman('Lisette', 'Bowman');
  char.health = -1;
  char.damage(10);
  expect(char.health).toBe(-1);
});

test('level up', () => {
  const char = new Bowman('Lisette', 'Bowman');
  expect(char.levelUp()).toEqual({
    name: 'Lisette',
    type: 'Bowman',
    level: 2,
    health: 100,
    attack: 30,
    defence: 30,
  });
});

test('damage', () => {
  const char = new Bowman('Lisette', 'Bowman');
  char.damage(10);
  expect(char.health).toBe(92.5);
});
