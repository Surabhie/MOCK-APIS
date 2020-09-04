const express = require("express");
const router = express.Router();
const Bill = require("../schema/bill");



router.post("/", async (req, res) => {
    console.log(req.body)
    const bill = new Bill(); 
    bill.consumerNumber = req.body.consumerNumber
    bill.bu = req.body.bu
    bill.earlyPaymentDate = req.body.earlyPaymentDate
    bill.pc = req.body.pc
    bill.disconnTag = req.body.disconnTag
    bill.billMonth = req.body.billMonth
    bill.dtcCode = req.body.dtcCode;
    bill.customerName = req.body.customerName;
    bill.dueDate = req.body.dueDate;
    bill.total = req.body.total;

    await bill.save();
    res.send(bill);
});


router.get("/:consumerNo", async (req, res) => {
    const user = await Bill.findOne({ consumerNumber: req.params.consumerNo })
    res.send(user)
});

module.exports = router
