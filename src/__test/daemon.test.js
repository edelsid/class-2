import Daemon from '../daemon';

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
