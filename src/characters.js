export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа слишком короткое/длинное');
    } else {
      this.name = name;
    }
    if (!types.includes(type)) {
      throw new Error('Такого класса не существует');
    } else {
      this.type = type;
    }
    this.level = 1;
    this.health = 100;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего');
    } else {
      this.level += 1;
      this.attack = this.attack * 0.2 + this.attack;
      this.defence = this.defence * 0.2 + this.defence;
      this.health = 100;
      return this;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
