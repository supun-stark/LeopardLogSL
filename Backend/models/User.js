const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



// Define the schema
const userSchema = new mongoose.Schema({

    username:{
        type: String,
        trim: true,
        required: [true, 'Username is required']
    },
    password:{
        type: String,
        trim: true,
        required: [true, 'Password is required']
    }
});



// Hash the password before saving
userSchema.pre('save', async function(next){
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
const userModel = mongoose.model('user',userSchema);
// Export the model
module.exports = userModel;