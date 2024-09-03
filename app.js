require("dotenv").config();
const express = require("express"); //require fucntion is used in Node.js
//require() allows you to import modules dynamically at runtime based on conditions, 
//which is not possible with static import statements.
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 3000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
    res.send("Hi, I am live ");
});

//middleware to set router
app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error);
        console.log("ERROR Happened !! ")
    }
}

start();

