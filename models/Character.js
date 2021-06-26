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
    proficiencies: [],
    languages: [],
    features: [],
    spells: [],
    notes: [],

});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
