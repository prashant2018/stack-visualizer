var express = require('express');
var Stack = require('../model/stack');
var router = express.Router();

var stack = new Stack(10);
router.get('/push', function(req, res, next) {

    if (!req.query.num)
        res.send("Please provide a valid query param num").send(400);


    var pushSuccess = stack.push(req.query.num);

    if (pushSuccess)
        res.send(`Successfully ${req.query.num} Pushed to Stack`).status(200);
    else
        res.send("Stack Overflow").status(400);
});

router.get('/pop', function(req, res, next) {
    var popSuccess = stack.pop();
    if (popSuccess)
        res.send(`Successfully Popped ${popSuccess} from Stack`).status(200);
    else
        res.send("Stack Empty").status(400);
});

router.get('/display', function(req, res, next) {
    res.send(stack.display());
});

module.exports = router;