const express = require('express');
// const customer = require('../model/customer');
const router = express.Router();
const Customer = require('../model/customer');


// route for getting all customers
router.get('/', async(req, res) => {
    //res.send('retrived all customers');
    try {
        const data = await Customer.find();
        console.log(data);
        res.status(200).json({
            success: true,
            payload: data,
            message: `${data.length} customers retrieved`
        });
    } catch (error) {
        res.statusCode(500).json({
            success: false,
            payload: null,
            message: 'No record found'
        });

    }

});
// route for getting one customer
router.get('/:id', getCustomer, (req, res) => {
    //res.send(`Customer with the id of ${req.params.id} was retured`);
    res.send(res.customer);
});
// route for creating one customer
router.post('/', async(req, res) => {
    const customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        createdAt: Date.now()
    });

    try {
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(400).json({
            success: false,
            payload: null,
            message: error.message
        });
    }



});

// route for updating one customer
router.patch('/:id', getCustomer, async(req, res) => {
    if (req.body.name != null) {
        res.customer.name = req.body.name;
    }
    if (req.body.email != null) {
        res.customer.email = req.body.email;
    }
    if (req.body.address != null) {
        res.customer.address = req.body.address;
    }
    if (req.body.phone != null) {
        res.customer.phone = req.body.phone;
    }

    try {
        const updatedCustomer = await res.customer.save();
        res.status(200).json({
            success: true,
            payload: updatedCustomer,
            message: 'Updated customer successfully'
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }

});


// route for deleting on customer
router.delete('/:id', getCustomer, async(req, res) => {
    try {
        await Customer.remove();
        res.status(200).json({
            success: true,
            message: 'Customer deleted'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

// getter middleware

async function getCustomer(req, res, next) {
    let customer;
    try {
        customer = await Customer.findById(req.params.id);
        if (customer == null) {
            return res.status(404).json({
                success: false,
                payload: customer,
                message: `no customer found`
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            payload: null,
            message: error.message
        });
    }

    res.customer = customer;
    next();


}


module.exports = router;