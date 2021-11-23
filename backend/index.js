const express =require("express");
const cors = require("cors");

const products = require("./products");

const app = express();
  
app.use(express.json());
app.use(cors());

app.get("/",(req, res) =>{
    res.send("Welcome To Our Online API...")
});

app.get("/products", (req, res) =>{
    res.send(products)
});

const port = process.env.PORT || 8000;

app.listen(port,console.log(`Server Running On Port ${port}`));