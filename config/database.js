//Install Mongoose
const mongoose = require('mongoose');

//.env file ko access krne ke liye {npm i dotenv}
require("dotenv").config();


//database connection
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then( () => console.log(" Database Connection Success."))
    .catch( (error) => {
    console.log("Issue In Database.");
    console.error(error.message);
    process.exit(1);
});
}


//export
module.exports = dbConnect;