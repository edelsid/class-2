import Swordsman from '../swordsman';

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
