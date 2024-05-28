const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the schema
const newUserSchema = new mongoose.Schema({

    fullname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
});


// Hash the password before saving
newUserSchema.pre('save', async function(next){
    if (this.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});



// Create the model
const newUserModel = mongoose.model('newuser', newUserSchema);
// Export the model
module.exports = newUserModel;