const app = require('express')();

const bodyParser = require('body-parser');
const model = require('./model.js');

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.json({status:200})
})

app.get('/allCountriesNames',(req,res)=>{
    const parsedNames = [];
    const allCountries = model.getAllCountries();
    for( country in allCountries){
        parsedNames.push(allCountries[country].Country);
    }
    res.json(parsedNames)
})

app.post('/getLanLong',(req,res)=>{
    res.json(model.getLatLong(req.body.countryName))
})


app.listen(8080,()=>{
    console.log('app listening at localhost://8080')
})
