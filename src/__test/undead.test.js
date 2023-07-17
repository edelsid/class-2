import Undead from '../undead';

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
