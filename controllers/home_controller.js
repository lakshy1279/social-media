const db=require('../config/mongoose');
const List=require('../models/todo.js');
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
  console.log(req.body.description);
  if(req.body.category == 'other'){
    var category = req.body.category1;
}else{
    var category = req.body.category;
}
  List.create({
    description:req.body.description,
    date:req.body.date,
    category:category
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
module.exports.delete=function(req,res)
{
   console.log(req.body);
  if(req.body.taskitem==undefined)
  {
    redirect('back');
  }
  if(typeof(req.body.taskitem)==='string')
  {
    let id=req.body.taskitem;
    List.findByIdAndDelete(id,function(err)
    {
      if(err)
      {
        console.log('error in deleting the item',err);
        return;
      }
    });
  }
  if(typeof(req.body.taskitem)==='object')
  {
    for(i of req.body.taskitem)
    {
      let id=i;
      List.findByIdAndDelete(id,function(err)
    {
      if(err)
      {
        console.log('error in deleting the item',err);
        return;
      }
    });
    }
  }
  return res.redirect('back');
}