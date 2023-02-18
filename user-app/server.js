import data from "./data.js";
import seedRouter from "./routes/seedRoutes.js";


const express = require("express");
const app = express();

//const MoonDB = require("../Config/database");
MoonDB();

app.get('/api/products', (req,res)=>{
  res.send(data.products);

});


//app.use('/api/seed', seedRouter);

app.get('/api/products/slug/:slug', (req,res)=>{
  const product = data.products.find((x) => x.slug === req.params.slug);
  if(product) {
    res.send(product);
  }
  else {
    res.status(404).send({Message: 'Product Not Found'});
  }
});

app.get('/api/products/:id', (req,res)=>{
  const product = data.products.find((x) => x._id === req.params.id);
  if(product) {
    res.send(product);
  }
  else {
    res.status(404).send({Message: 'Product Not Found'});
  }
});

const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.log("erreur") : console.log(`server is running on port ${port}`)
);




