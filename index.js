const express=require('express');
const port=8000;
//database
const db=require('./config/mongoose');
const app=express();
app.use(express.urlencoded());
//use express router
app.use('/',require('./routes/index'));
//list contain the structure of the to-do-app
const list=require('./models/todo');
app.use(express.static('./assests'));
//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Error in running server: ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});