const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
// json file me data add kar ne ke liye 
const user = require ("./jewellery.json");
const { json } = require("stream/consumers");


// Enable CORS
// ye middleware allow karta hai localhost api ko use karne ke liye 
app.use(cors());

// Load JSON file
// const user = JSON.parse(fs.readFileSync("./jewellery.json", "utf-8"));

const PORT = 8001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Endpoint
app.get("/allproduct", (req, res) => {
  return res.json(user);
});

app.post('/allproduct',(req,res)=>{
  const body = req.body;
  user.push({...body, id: user.length + 1});
  fs.writeFile('./jewellery.json', JSON.stringify(user),(err,data)=>{
    return res.json({status:"sucess",id:user.length})
  })
})

app.delete('/allproduct/:id',(req,res)=>{
  const id = Number(req.params.id);

  // check if the user exists 
  const userIndex = user.findIndex((u)=>u.id === id);
  if(userIndex === -1){
    return res.status(404).json({status: "error",message: "user not found"});
  }
  // remove the user from the array 
  user.splice(userIndex, 1);

  fs.writeFile('./jewellery.json',JSON.stringify(user,null,2),(err)=>{
    if(err){
      return res.status(500).json({status:"error",message: "failed to update file"});
    }
    return res.json({status: "success", message: "user deleted successfully"})
  })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
