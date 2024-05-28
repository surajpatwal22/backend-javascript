const mongoose = require("mongoose");


const connectDB = (uri) =>{
    mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        }).then(() => console.log("MongoDB Connected...")).catch(err => console.log(err));
}

module.exports = connectDB;