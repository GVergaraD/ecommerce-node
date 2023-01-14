const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dontenv = require("dotenv");
const userRoute = require("./routes/user")

dontenv.config();

mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DB Connection Successfull"))
    .catch((err)=>{
        console.log(err)
    });
// mongoose.connect("mongodb+srv://admin0:kzrKRrMFUffN44UK@cluster0-test.vf0rr.mongodb.net/?retryWrites=true&w=majority", ()=>{
//     console.log("Connected to MongoDB")
// });

app.use(express.json())

app.get("/api/test", ()=>{
    console.log("test is succesfull")
});

app.use("/api/users", userRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running!")
});
