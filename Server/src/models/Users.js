 
const Schema = mongoose.Schema;
const userSchema = new Schema({
    // Define user schema fields here]
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },

});
module.exports = mongoose.model('User', userSchema);mongoose = require('mongoose'); 
