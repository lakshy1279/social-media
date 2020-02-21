const db=require('../config/mongoose');
const List=require('../models/todo');
module.exports.home=function(req,res)
{
    List.find({},function(err,lists)
    {
      if(err)
      {
        console.log('error in fatching list item');
        return;
      }
      return res.render('home',{title:"To Do App",
       task_item:lists
      });
    });
};
module.exports.add=function(req,res)
{
  console.log(req.body);
  List.create({
    description:req.body.description,
    date:req.body.date,
    category:req.body.category
  },function(err,newList)
  {
    if(err)
    {
      console.log('error in creating list');
      return;
    }
    console.log('******',newList);
    return res.redirect('back');
  });
};