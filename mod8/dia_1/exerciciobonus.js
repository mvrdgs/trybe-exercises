const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => (15 + Math.round(Math.random() * (dragon.strength - 15)));
const warriorDamage = (warrior) => 2 + ((Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - 2))));
const mageDamage = (mage) => {
  if (mage.mana > 15) return {
    damage: mage.intelligence + (Math.round(Math.random() * (mage.intelligence))),
    manaspent: 15,
  }
  return {
    damage: 'Mana insuficiente',
    manaspent: 0,
  }
}

const gameAction = {
  warriorTurn: (battleMembers) => {
    const damage = warriorDamage(battleMembers.warrior);
    let dragonHealth = battleMembers.dragon.healthPoints;
    battleMembers.dragon.healthPoints -= damage;
    console.log('Warrior turn:');
    console.log(`Dragon took ${damage} of damage. Healthpoints from ${dragonHealth} to ${battleMembers.dragon.healthPoints}`)
  },
  mageTurn: (battleMembers) => {
    const turn = mageDamage(battleMembers.mage);
    const damage = turn.damage;
    battleMembers.mage.mana -= turn.manaspent;
    if (typeof damage === 'string') return console.log('Mana insuficiente');
    let dragonHealth = battleMembers.dragon.healthPoints;
    battleMembers.dragon.healthPoints -= damage;
    console.log('Mage turn:');
    console.log(`Dragon took ${damage} of damage. Healthpoints from ${dragonHealth} to ${battleMembers.dragon.healthPoints}`)
    console.log(`Mana left: ${battleMembers.mage.mana}`)
  },
  dragonTurn: (battleMembers) => {
    const damageOnWarrior = dragonDamage(battleMembers.dragon);
    const damageOnMage = dragonDamage(battleMembers.dragon);
    const warriorHealth = battleMembers.warrior.healthPoints;
    const mageHealth = battleMembers.mage.healthPoints;
    battleMembers.warrior.healthPoints -= damageOnWarrior;
    battleMembers.mage.healthPoints -= damageOnMage;
    console.log('Dragon turn:');
    console.log(`Warrior took ${damageOnWarrior} of damage. Healthpoints from ${warriorHealth} to ${battleMembers.warrior.healthPoints}`);
    console.log(`Mage took ${damageOnMage} of damage. Healthpoints from ${mageHealth} to ${battleMembers.mage.healthPoints}`);
  }
}

const turn = () => {
  gameAction.warriorTurn(battleMembers);
  gameAction.mageTurn(battleMembers);
  gameAction.dragonTurn(battleMembers);
  console.log('--------------');
}

turn();
turn();
turn();
turn();