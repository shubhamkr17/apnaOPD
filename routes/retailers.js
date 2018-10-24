var express = require('express');
var router = express.Router();

var Retailer = require('../schemas/retailerSchema');

/* GET users listing. */
router.get('/', function(req, res) {
  Retailer.find({},function (err,retailer) {
    if(err) throw err;
    res.json(retailer)
  });
});

router.post('/',(req,res)=>{
  const retailer = new Retailer({
    name : req.body.name,
    email : req.body.email,
    phone_number : req.body.phone_number,
    office_number : req.body.office_number,
    address : req.body.address,
    pin : req.body.pin,
    certi_link : req.body.certi_link
  });
  const result= retailer.save();

  res.json(retailer);
  debug(retialer);
});

module.exports = router;
