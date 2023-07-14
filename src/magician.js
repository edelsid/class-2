import Character from './characters';

export default class Magician extends Character {
  constructor(name, type, health, level) {
    super(name, type, level, health);
    this.attack = 10;
    this.defence = 40;
  }
}
