let express = require('express');

let book = express.Router();
book.get('/' function(req,res){
    res.send('Api page');
})

router.get('/about',function(req,res){
    res.send('About this Api')
})

module.exports = router;