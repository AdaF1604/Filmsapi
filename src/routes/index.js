const { Router } = require('express');
const res = require('express/lib/response');
const router = Router();

router.get('/', (req, res) => {
    res.json({"Title" : "Hello World"});
});



router.get('/test' , (req,res) => {
    const data = {
        "name" : "ada",
        "website" : "ada.com",
    };
    res.json(data);
});

 module.exports = router;   
