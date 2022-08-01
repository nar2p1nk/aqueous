import express, {Request,Response} from 'express';

const app:express.Application = express();
const port:number = 8080;


app.get('/',(req:Request,res:Response)=>{
    res.send('typescript with express(heck yeah)')
});


app.listen(port,()=>{
    console.log(`server running at localhost:${port}`);
    
})
