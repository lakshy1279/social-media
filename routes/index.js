var express=require('express');
const router =express.Router();
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);
router.post('/add-list',homeController.add);
console.log('router loaded');
//router.use('/posts',require('./post'));
//for any other excess from here
//router.use(routername,require('router file))
module.exports=router;
