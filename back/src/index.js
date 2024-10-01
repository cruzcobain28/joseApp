import app from "./app.js";


const main=()=>{
    const server=   app.listen(app.get('port'));
    console.log(`Server Run on Port ${app.get('port')}`);
};

main();