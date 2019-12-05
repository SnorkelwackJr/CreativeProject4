var express = require('express');
var router = express.Router();
var request = require('request')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: 'public' });
});

/* GET info from love calc api */
router.get('/loveinfo', function(req, res) {
    var options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        qs: { fname: req.query.male, sname: req.query.female},
        headers: {
            'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
            'x-rapidapi-key': 'ad5f8e9cb9mshf6d649c934a712bp1df9b6jsn70dae2adec24'
        }
    };
    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        res.send(body);
    });
    
    res.status(200);
});

module.exports = router;
