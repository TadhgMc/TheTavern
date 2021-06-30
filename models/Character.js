const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    sex: String,
    race: String,
    class: String,
    level: Number,
    HP: {
      currentHP: Number,
      hitDie: {total: Number, die: String,},
    },
    background: String,
    alignment: String,
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
      armorClass: Number,
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
{
  "name": "test#1",
	"sex": "dude",
	"race": "dwarf",
	"class": "paladin",
	"level": 1,
	"HP": {
		"currentHP": 20,
		"hitDie": {
			"total": 2,
			"die": "d10"
		}
	},
	"background": "noble",
	"alignment": "neutral",
	"abilities": {
		"strength": 10,
     "dexterity": 10,
     "constitution": 10,
     "intelligence": 10,
     "wisdom": 10,
     "charisma": 10
	},
	"equipment": {
		"armor": "chain",
    "weapon": "sword",
    "sheild": "",
    "backpack": [],
    "armorClass": 12
	},
	"proficiencies": [],
  "languages": [],
  "features": [],
  "spells": [],
  "notes": []
}
*/