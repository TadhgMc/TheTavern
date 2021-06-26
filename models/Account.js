import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    characters: { type: Array }
});

const Account = mongoose.model("Account", accountSchema);

export default Account;