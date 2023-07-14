import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('bow char', () => {
  const result = new Bowman('Lisette', 'Bowman');
  expect(result).toEqual({
    name: 'Lisette',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  });
});

test('sword char', () => {
  const result = new Swordsman('Ymir', 'Swordsman');
  expect(result).toEqual({
    name: 'Ymir',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  });
});

test('magic char', () => {
  const result = new Magician('Sibyl', 'Magician');
  expect(result).toEqual({
    name: 'Sibyl',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  });
});

test('undead char', () => {
  const result = new Undead('Moren', 'Undead');
  expect(result).toEqual({
    name: 'Moren',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  });
});

test('zombie char', () => {
  const result = new Zombie('Hollow', 'Zombie');
  expect(result).toEqual({
    name: 'Hollow',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  });
});

test('demon char', () => {
  const result = new Daemon('Fafnir', 'Daemon');
  expect(result).toEqual({
    name: 'Fafnir',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  });
});

const dataList = [
  ['Y', 'Daemon', 'Имя персонажа слишком короткое/длинное'],
  ['Yddramorral', 'Daemon', 'Имя персонажа слишком короткое/длинное'],
  ['Fafnir', 1, 'Класс персонажа должен быть словом'],
];

const handler = test.each(dataList);

handler('testing errors', (name, type, expected) => {
  expect(() => { new Daemon(name, type); }).toThrow(expected);
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
