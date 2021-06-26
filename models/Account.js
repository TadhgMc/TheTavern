const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate: [({ length }) => length >= 6, "Password must be 8 characters or longer."]
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    characters: [
        {
            type: Schema.Types.ObjectId,
            ref: "Character"
        }
    ]
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;