var express=require('express');
var router=express.Router();
var contactController=require('../controllers/bussinessContact');

// Connect to our model
let Contact = require('../models/bussinessContact');


// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* GET list of items */
router.get('/list', contactController.inventoryList);

// Routers for edit
router.get('/edit/:id', requireAuth, contactController.displayEditPage);
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, contactController.performDelete);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, contactController.processAddPage);

module.exports=router;


// let express= require('express');
// let router= express.Router();
// let mongoose= require('mongoose');
// const { route } = require('.');
// const { render } = require('../config/app');

// //connect to our BussinessContact Model
// let bussinessContact= require('../models/bussinessContact');

// // GET route for the BussinessContact List page -- Basic Read operation.
// router.get('/',(req,res,next)=>{
//     bussinessContact.find((err,contactList)=>{
//         if(err)
//         {
//             return console.error(err);
//         }
//         else
//         {
//             //console.log(contactList);  
//             res.render('../views/bussinessContact/contactList',{title:'Contact List', contactList: contactList});
//         }
//     });
// });

// //GET route for the BussinessContact Add page -- Create operation
// router.get('/add',(req,res,next)=>{
//     res.render('/contact/add',{title:'Add Contact',ContactList: contactList});
// });

// //POST route for processing the BussinessContact Add page -- Create operation
// router.post('/add',(req,res,next)=>{
//     let newContact=bussinessContact({
//         "name": req.body.name,
//         "number": req.body.number,
//         "email": req.body.email
//     });

//     bussinessContact.create(newContact,(err,bussinessContact)=>{
//         if(err)
//         {
//             console.log(err);
//             res.end(err);
//         }
//         else{
//             //refreshing the contact list
//             res.rendirect('/contact');
//         }
//     });
// });

// //GET route for the BussinessContact Edit page -- Update operation
// router.get('/edit/:id',(req,res,next)=>{
//     let id=req.params.id;

//     bussinessContact.findById(id,(err,contactToEdit)=>{
//         if(err)
//         {
//             console.log(err);
//             res.end(err);
//         }
//         else{
//             //show to edit view
//             res.render('/contact/edit', {title: 'Edit Contact', contact: contactToEdit})
//         }
//     });
// });

// //POST route for processing the BussinessContact Edit page -- Update operation
// router.post('/edit/:id',(req,res,next)=>{
//     let id= req.params.id;

//     let updatedContact=bussinessContact({
//         "_id":id,
//         "name": req.body.name,
//         "number": req.body.number,
//         "email": req.body.email
//     });
//     bussinessContact.updateOne({_id:id}, updatedContact ,(err)=>{
//         if(err)
//         {
//             console.log(err);
//             req.end(err);
//         }
//         else{
//             //refresh the contacts list
//             res.redirect('/contact');
//         }
//     });
// });

// //GET route for the BussinessContact Delete page -- Delete operation
// router.get('/delete/:id',(req,res,next)=>{
//     let id=req.params.id;

//     bussinessContact.remove({_id:id},(err)=>{
//         if(err)
//         {
//             console.log(err);
//             req.end(err)
//         }
//         else{
//             //refresh the contact list
//             res.redirect('/contact');
//         }
//     });
    
// });

// module.exports=router;