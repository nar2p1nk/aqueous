const app = require('express')();


app.get('/',(req,res)=>{
    res.json({status:200})
})


app.listen(8080,()=>{
    console.log('app listening at localhost://8080')
})
