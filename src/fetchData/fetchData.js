
const Express = require('express');
 
const app = Express();

app.get('/users',(req,res)=>{
  return   res.json('https://fakestoreapi.com/products');
  
})

app.listen(3000, ()=>console.log('server started'));
