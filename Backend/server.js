const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const leopardModel = require('./models/Leopard');
const dotenv = require('dotenv').config();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const userModel = require('./models/User');
const newUserModel = require('./models/NewUser');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/upload', express.static(path.join(__dirname, 'upload')));


// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname); // Unique filename with original extension
    },
});


const upload = multer({ storage: storage });




//Add New Leopard
app.post('/leopard/add',upload.single('image'),(req,res) =>{
    const { officialname, nickname, gender, year, park } = req.body;
    const image = req.file ? req.file.filename : null; // Save image filename if uploaded
    //const newLeopard = new leopardModel({ officialname, nickname, gender, year, park, uploadimage });
    //const uploadimage = req.file ? req.file : null; // Save image file if uploaded
    //const imageFileName = req.file ? req.file.filename : null; // Save image filename if uploaded
    //const imageContentType = req.file ? req.file.mimetype : null; // Save image MIME type if uploaded


    // Create a new Leopard instance
    const newLeopard = new leopardModel({
        officialname,
        nickname,
        gender,
        year,
        park,
        image // Save image filename
    });


    // Save the new Leopard instance to MongoDB
    newLeopard.save()
    .then((result) =>{
        return res.status(200).json({
            success : "New Leopard Added Successfully",
            addedData : result
        })
    })
    .catch(err => console.log(err))

})



//Get all leopards
app.get('/leopards/all', (req,res)=>{
    leopardModel.find({})
    .then((allLeopards) =>{
        res.json(allLeopards)
    })
    .catch((err) =>{
        res.json(err)
    })
})



//Get leopard to fields
app.get('/getLeopard/:id', (req,res) =>{
    const id = req.params.id;
    leopardModel.findById({_id:id})
    .then((leopard) =>{
        if (!leopard) {
            return res.status(404).json({ error: 'Leopard not found' });
        }
        res.json(leopard);
    })
    .catch(err=>{
        res.json(err)
    })
})


// //Update Leopard
// app.put('/leopards/:id', (req,res) =>{
//     const id = req.params.id;
//     const updatedData= req.body;

//     leopardModel.findByIdAndUpdate({_id:id}, updatedData, {new:true})
//     .then((updatedLeopard) =>{
//             if(!updatedLeopard){
//                 return res.status(404).json({
//                     error: 'Leopard Not Found'
//                 })
//             }
//             return res.status(200).json({
//                 success: "Leopard Updated Successfully",
//                 UpdatedLeopard: updatedLeopard
//             });
//     })
//     .catch((err) =>{
//         console.log(err);
//     })
// })


//Update leopard with image
app.put('/leopard/update/:id', upload.single('image'), (req, res) => {
    const id = req.params.id;
    const { officialname, nickname, gender, year, park } = req.body;
    const newImage = req.file ? req.file.filename : null;

    leopardModel.findById(id)
        .then((leopard) => {
            if (!leopard) {
                return res.status(404).json({
                    error: 'Leopard Not Found'
                });
            }

            const oldImagePath = leopard.image ? path.join(__dirname, 'upload', leopard.image) : null;

            // Update leopard data
            leopard.officialname = officialname || leopard.officialname;
            leopard.nickname = nickname || leopard.nickname;
            leopard.gender = gender || leopard.gender;
            leopard.year = year || leopard.year;
            leopard.park = park || leopard.park;

            // If a new image is uploaded, update the image field
            if (newImage) {
                leopard.image = newImage;

                // Delete the old image file if it exists
                if (oldImagePath) {
                    fs.unlink(oldImagePath, (err) => {
                        if (err) {
                            console.error('Failed to delete old image file:', err);
                        }
                    });
                }
            }

            // Save the updated leopard document
            return leopard.save();
        })
        .then((updatedLeopard) => {
            return res.status(200).json({
                success: "Leopard Updated Successfully",
                updatedLeopard: updatedLeopard
            });
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).json({
                error: 'An error occurred while updating the leopard',
                message: err.message
            });
        });
});


//Delete Leopard
// app.delete('/leopard/delete/:id', (req,res) =>{
//     const id = req.params.id;
//     leopardModel.findByIdAndDelete({_id:id})

//     .then((deletedLeopard) =>{
//         return res.status(200).json({
//             success: 'Leopard Deleted Successfully',
//             DeletedLeopard :deletedLeopard
//         })
//     })
//     .catch((err) =>{
//         return res.status(400).json({
//             error: err.message
//         })
//     })
// })


//Delete Leopard
// app.delete('/leopard/delete/:id', (req, res) => {
//     const id = req.params.id;

//     leopardModel.findByIdAndDelete(id)
//         .then((deletedLeopard) => {
//             if (!deletedLeopard) {
//                 return res.status(404).json({
//                     error: 'Leopard not found'
//                 });
//             }
//             return res.status(200).json({
//                 success: 'Leopard Deleted Successfully',
//                 deletedLeopard: deletedLeopard
//             });
//         })
//         .catch((err) => {
//             return res.status(500).json({
//                 error: 'An error occurred while deleting the leopard',
//                 message: err.message
//             });
//         });
// });




//Delete leopard with image
app.delete('/leopard/delete/:id', (req, res) => {
    const id = req.params.id;

    leopardModel.findById(id)
        .then((leopard) => {
            if (!leopard) {
                return res.status(404).json({
                    error: 'Leopard not found'
                });
            }

            // Get the image file path
            const imagePath = path.join(__dirname, 'upload', leopard.image);

            // Delete the image file
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error('Failed to delete image file:', err);
                    return res.status(500).json({
                        error: 'An error occurred while deleting the image file',
                        message: err.message
                    });
                }

                // Delete the document from the database
                leopardModel.findByIdAndDelete(id)
                    .then((deletedLeopard) => {
                        return res.status(200).json({
                            success: 'Leopard Deleted Successfully',
                            deletedLeopard: deletedLeopard
                        });
                    })
                    .catch((err) => {
                        return res.status(500).json({
                            error: 'An error occurred while deleting the leopard',
                            message: err.message
                        });
                    });
            });
        })
        .catch((err) => {
            return res.status(500).json({
                error: 'An error occurred while fetching the leopard',
                message: err.message
            });
        });
});


app.post('/user',(req,res) =>{
    userModel.create(req.body)
    
    .then((userdata) => {
        res.status(200).json({
            success: "User login successful",
            userData: userdata
        });
      
    })
    .catch((err) => {
     
        res.status(500).json({
            error: "An error occurred while login the user"
        });
    });
});



app.post('/register', (req,res) =>{
   newUserModel.create(req.body)

    .then((newuserdata) => {
        res.status(200).json({
            success: "User registered successfully",
            newRegisteredUser: newuserdata
        });
       
    })
    .catch((err) => {
        res.status(500).json({
            error: "An error occurred while creating the user"
        });
    });
});



const PORT = 8001;
const DB_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@merncrudapp3.jsxp9zu.mongodb.net/?retryWrites=true&w=majority&appName=MernCrudApp3`;


mongoose.connect(DB_URL)
.then(() => {
    console.log("DB Connected Successfully.");    
})
.catch((err) => {
    console.log("DB Connection Failed.");  
});

app.listen(PORT, () =>{
    console.log(`Server is running on port : ${PORT}`);
})

