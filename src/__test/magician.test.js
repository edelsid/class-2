import Magician from '../magician';

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
