const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    charInfo: {
      charName: String,
      playerName: String,
      sex: String,
      race: String,
      charClass: String,
      level: Number,
      background: [],
      alignment: String,
    },
    vitals:{
      ac: Number,
      hp: {
        currentHP: Number,
        hitDie: {
          total: Number,
          die: String,
        },
      },
      init: Number,
      speed: Number,
      profBonus: Number,
    },
    abilities: {
      strength: Number,
      dexterity: Number,
      constitution: Number,
      intelligence: Number,
      wisdom: Number,
      charisma: Number,
    },
    equipment: {
      armor: String,
      weapon: String,
      sheild: String,
      backpack: [],
    },
    saveThrows: {
      str: Number,
      dex: Number,
      con: Number,
      int: Number,
      wis: Number,
      cha: Number,
    },
    skills:{
      acrobatics: Number,
      animalhandling: Number,
      arcana: Number,
      athletics: Number,
      deception: Number,
      history: Number,
      insight: Number,
      intimidation: Number,
      investigation: Number,
      medicine: Number,
      nature: Number,
      perception: Number,
      performance: Number,
      persuasion: Number,
      religion: Number,
      sleightofhand: Number,
      stealth: Number,
      survival: Number,
    },
    proficiencies: [],
    languages: [],
    features: [],
    spells: [],
    notes: [],

});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;

/* fake character template for testing
{"charInfo": {
      "charName": "new Test",
      "playerName": "tadhg",
      "sex": "male",
      "race": "dwarf",
      "charClass": "barbarian",
      "level": 1,
      "background": [
				{"Personality Traits":"blah blah blah"},
				{"Ideals": "whatver"},
				{"Bonds": "nothin"},
				{"Flaws": "where to start?"}
			],
      "alignment": "evil"
    },
    "vitals":{
      "ac": 15,
      "hp": {
        "currentHP": 20,
        "hitDie": {
          "total": 2,
          "die": "d10"
        }
      },
      "init": 12,
      "speed": 30,
      "profBonus": 2
    },
    "abilities": {
      "strength": 12,
      "dexterity": 12,
      "constitution": 12,
      "intelligence": 12,
      "wisdom": 12,
      "charisma": 12
    },
    "equipment": {
      "armor": "plate",
      "weapon": "bow",
      "sheild": "",
      "backpack": ["candles", "tinder box"]
    },
    "saveThrows": {
      "str": 2,
      "dex": 2,
      "con": 2,
      "int": 2,
      "wis": 2,
      "cha": 2
    },
    "skills":{
      "acrobatics": 2,
      "animalhandling": 1,
      "arcana": 1,
      "athletics": 1,
      "deception": 1,
      "history": 2,
      "insight": 3,
      "intimidation": 4,
      "investigation": 3,
      "medicine": 2,
      "nature": 2,
      "perception": 2,
      "performance": 2,
      "persuasion": 2,
      "religion": 2,
      "sleightofhand": 2,
      "stealth": 2,
      "survival": 2
    },
    "proficiencies": ["light-armor","killing"],
    "languages": ["common", "dwarvish"],
    "features": ["dark vision", "iron-hide"],
    "spells": ["bless", "cure wounds"],
    "notes": []
}
*/