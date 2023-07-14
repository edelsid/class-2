import Character from './characters';

export default class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, level, health);
    this.attack = 10;
    this.defence = 40;
  }
}
