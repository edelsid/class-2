import Character from './characters';

export default class Bowman extends Character {
  constructor(name, type, health, level) {
    super(name, type, level, health);
    this.attack = 25;
    this.defence = 25;
  }
}
