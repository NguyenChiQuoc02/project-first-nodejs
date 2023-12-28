const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/node-course');
        console.log('connection succesfully!!!');

    } catch (error) {
        console.log('connection failure!!!');
        console.error('ERROR:', error.message);
    }
    
}

module.exports = { connect };