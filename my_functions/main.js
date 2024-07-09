const express = require('express');
const data_boy = require("../boy_name_kurish.json");
const data_gril = require("../gril_name_kurish.json");



const app = express();
const port = 3000;




app.get('/', (req, res) => {

res.send('lhodqxhwfhoh qfhoifif');
});

// boy random rout 
app.get("/boy-random",(req,res)=>{
    let random = Math.floor(Math.random()*data_boy.length);
    res.json(data_boy[random]);
})


// gril random rout 
app.get("/gril-random",(req,res)=>{
    let random = Math.floor(Math.random()*data_gril.length);
    res.json(data_gril[random]);
})

app.get('/random', (req, res) => {
  let all_names = [...data_boy,...data_gril]
  let random = Math.floor(Math.random()*all_names.length);
  res.json(all_names[random]);
});

// search gril  rout
app.get("/gril",(req, res)=>{
  let name =  req.query.name ;
  if(!name){
    res.send(" pleas provide a name in the query  ");
  }
  else{
  let gril = data_gril.find((item)=>{
    return item.name == name;
  })
  res.json(gril);
}
})



// search  boy  rout
app.get("/boy",(req, res)=>{

  let name =  req.query.name ;
  if(!name){
    res.send(" pleas provide a name in the query  ");
  }
   else{

  let boy = data_boy.find((item)=>{
    return item.name == name;
  })
  res.json(boy);
}
})





app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});