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
    characters: [
        {
            type: Schema.Types.ObjectId,
            ref: "Character"
        }
    ]
});

accountSchema.methods.checkPassword = function(loginPw){
    return bcrypt.compareSync(loginPw, this.password);
}

// accountSchema.pre('save', async function(newUserData){
//     console.log('\n pre ~hook for bcrypt', newUserData)
//     newUserData.password = await bcrypt.hash(newUserData.password, 10);
//     return newUserData;
// })

// hooks: {
//     async beforeCreate(newUserData) {
//       newUserData.password = await bcrypt.hash(newUserData.password, 10);
//       return newUserData;
//     },
//   },


const Account = mongoose.model("Account", accountSchema);

module.exports = Account;