import Fighter from "./src/Fighter.js";

// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const fighters = [
  new Fighter("🧔 Heracles", 20, 6),
  new Fighter("🦁 Nemean Lion", 11, 13),
];

const Heracles = fighters[0];
const Nemean = fighters[1];

function battle(fighter1, fighter2) {
  let round = 0;
  while (fighter1.life > 0 && fighter2.life > 0) {
    console.log(`Round n°${round}`);
    fighter1.fight(fighter2);
    round++;
    if (fighter2.life > 0) {
      console.log(`Round n°${round}`);
      fighter2.fight(fighter1);
    }
    round++;
  }
  return;
}

battle(Heracles, Nemean);
