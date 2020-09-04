const mongoose = require("mongoose");


// Creating a Schema

const bill_schema = new mongoose.Schema({
    consumerNumber: {
        type: Number,
        required: true

    },
    bu: {
        type: Number,
        required: true

    },
    earlyPaymentDate: {
        type: Date,
        required: true

    },
    pc: {
        type: Number,
        required: true

    },
    disconnTag: {
        type: Number,
        required: true

    },
    billMonth: {
        type: Date,
        required: true

    },
    dtcCode: {
        type: Number,
        required: true

    },
    customerName: {
        type: String,
        required: true

    },
    dueDate: {
        type: String,
        required: true

    },
    total: {
        type: String,
        required: true

    }
});

module.exports = mongoose.model("bill", bill_schema)
