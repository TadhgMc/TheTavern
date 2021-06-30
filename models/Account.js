const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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
        validate: [({ length }) => length >= 8, "Password must be 8 characters or longer."]
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    Character: [
        {
            type: Schema.Types.ObjectId,
            ref: "Character"
        }
    ]
});

accountSchema.methods.checkPassword = function(loginPw){
    return bcrypt.compareSync(loginPw, this.password);
}

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;