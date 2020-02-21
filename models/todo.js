const mongoose=require('mongoose');

const listItem=new mongoose.Schema(
    {
        description:
        {
            type:String,
            require:true
        },
        date:
        {
            type:String,
            require:true
        },
        category:
        {
            type:String,
            require:true
        }
});
console.log('schema running fine');
const List=mongoose.model('task',listItem);
module.exports=List;