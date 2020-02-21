//require the library
const mongoose = require('mongoose');
//connecting to the database
mongoose.connect('mongodb://localhost/list_item_db');
//check whether successful connect or not
var db=mongoose.connection;
//error
db.on('error',console.error.bind(console,'connection error:'));
//successfully connect to the database
db.once('open',function()
{
    console.log('successfult connect to the database');
});

