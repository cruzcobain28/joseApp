import express from 'express';

const app=express();
app.set('port',3000);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());
/*var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
*/

app.use('/',(req,res)=>{
    let data = [{
        player:"Falcao",
        number:"9",
        age:39,
        status:"lesionado"
    },{
        player:"Macalister",
        number:"14",
        age:38,
         status:"activo"
    },
    {
        player:"Montero",
        number:"31",
        age:32,
         status:"activo"
    },
    {
        player:"Burges",
        number:"12",
        age:62,
         status:"retirado"
    }]
    
    res.json(data)
})
export default app;