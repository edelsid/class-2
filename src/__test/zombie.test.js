import Zombie from '../zombie';

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
