// create a reference to the model
let Contact = require('../models/bussinessContact');

module.exports.inventoryList = function(req, res, next) {  
    Contact.find((err, contactList) => {
        //console.log(inventoryList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('bussinessContact/contactList', {
                title: 'Contact List', 
                ContactList: contactList,
                userName: req.user ? req.user.username : ''
            })            
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;

    Contact.findById(id, (err, nameToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('bussinessContact/contact_add_edit', {
                title: 'Edit contact', 
                contact: nameToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id

    let updatedContact = Contact({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/contact/list');
        }
    });

}


module.exports.performDelete = (req, res, next) => {

    let id = req.params.id;


    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact/list');
        }
    });

}

module.exports.displayAddPage = (req, res, next) => {

    let newItem = Contact();

    res.render('bussinessContact/contact_add_edit', {
        title: 'Add a new Item',
        contact: newItem,
        userName: req.user ? req.user.username : ''
    })          

}

module.exports.processAddPage = (req, res, next) => {

    let newItem = Contact({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    Contact.create(newItem, (err, contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(contact);
            res.redirect('/contact/list');
        }
    });
    
}



// let bussinessContact = require('../models/bussinessContact');

// module.exports.contactList = function(req, res, next) {  
//     bussinessContact.find((err, contactList) => {
//         //console.log(inventoryList);
//         if(err)
//         {
//             return console.error(err);
//         }
//         else
//         {
//             res.render('contact/list', {
//                 title: 'Contact List', 
//                 ContactList: contactList,
//                 userName: req.user ? req.user.username : ''
//             })            
//         }
//     });
// }

// module.exports.displayEditPage = (req, res, next) => {
    
//     let id = req.params.id;

//     bussinessContact.findById(id, (err, itemToEdit) => {
//         if(err)
//         {
//             console.log(err);
//             res.end(err);
//         }
//         else
//         {
//             //show the edit view
//             res.render('contact/add_edit', {
//                 title: 'Edit Item', 
//                 contact: contactToEdit,
//                 userName: req.user ? req.user.username : ''
//             })
//         }
//     });
// }


// module.exports.processEditPage = (req, res, next) => {

//     let id = req.params.id

//     let updatedContact = bussinessContact({
//         _id: req.body.id,
//         contactName: req.body.name,
//         contactNumber: req.body.number,
//         contactEmail: req.body.email
//     });

//     bussinessContact.updateOne({_id: id}, updatedContact, (err) => {
//         if(err)
//         {
//             console.log(err);
//             res.end(err);
//         }
//         else
//         {
//             // console.log(req.body);
//             // refresh the book list
//             res.redirect('/contact/list');
//         }
//     });

// }


// module.exports.performDelete = (req, res, next) => {

//     let id = req.params.id;


//     bussinessContact.remove({_id: id}, (err) => {
//         if(err)
//         {
//             console.log(err);
//             res.end(err);
//         }
//         else
//         {
//             // refresh the book list
//             res.redirect('/contact/list');
//         }
//     });

// }


// module.exports.displayAddPage = (req, res, next) => {

//     let newItem = bussinessContact();

//     res.render('contact/add_edit', {
//         title: 'Add a new Item',
//         contact: newContact,
//         userName: req.user ? req.user.username : ''
//     })          

// }

// module.exports.processAddPage = (req, res, next) => {

//     let newContact = bussinessContact({
//         _id: req.body.id,
//         contactName: req.body.name,
//         contactNumber: req.body.number,
//         contactEmail: req.body.email
//     });

//     bussinessContact.create(newContact, (err, contact) =>{
//         if(err)
//         {
//             console.log(err);
//             res.end(err);
//         }
//         else
//         {
//             // refresh the book list
//             console.log(contact);
//             res.redirect('/contact/list');
//         }
//     });
    
// }