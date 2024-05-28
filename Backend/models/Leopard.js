const mongoose = require('mongoose');

// Define the schema
const leopardSchema = new mongoose.Schema({

    officialname :{
        type: String,
        trim: true
    },
    nickname :{
        type: String,
        trim: true
    },
    gender :{
        type: String,
    },
    year :{
        type: Number,
        min: 2000
    },
    park :{
        type: String,
        trim: true
    },
    // picture: {
    //     data: Buffer, // Binary data for the picture
    //     contentType: String // MIME type of the picture (e.g., 'image/jpeg', 'image/png')
    // }
    // image: {
    //     fileName: String,
    //     contentType: String  // Optional, depending on your use case
    // }
    image: {
        type: String   
    }
    
})


// Create the model
const leopardModel = mongoose.model('leopards',leopardSchema);
// Export the model
module.exports = leopardModel;