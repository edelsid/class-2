import Bowman from '../bowman';

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
