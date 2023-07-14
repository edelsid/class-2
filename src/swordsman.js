import Character from './characters';

export default class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, level, health);
    this.attack = 40;
    this.defence = 10;
  }
}
