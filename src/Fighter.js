/* Fighter class definition */
const MAX_LIFE = 100;

export default class Fighter {
  constructor(name, strength, dexterity, life = MAX_LIFE) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = life;
  }
  fight(Fighter) {
    const attackPower = Math.floor(Math.random() * (this.strength - 1)) + 1;
    const damages = Math.max(0, attackPower - Fighter.dexterity);
    const newLife = Fighter.life - damages;
    Fighter.life = Math.max(0, newLife);
    if (Fighter.life > 0) {
      console.log(
        `${this.name} attacked ${Fighter.name} and inflicted him ${damages} damages! ${Fighter.name} now has ${Fighter.life}HP`
      );
    }
    if (Fighter.life === 0) {
      console.log(
        `${Fighter.name} has been defeated! ${this.name} still has ${this.life}HP`
      );
    }
    if (this.life === 0) {
      console.log(
        `${this.name} has been defeated! ${Fighter.name} still has ${Fighter.life}HP`
      );
    }
  }
}
