var express = require('express');
var yargs = require('yargs');
var proxyToEnv =  yargs.argv.proxyToEnv ? true : false;

router = express.Router();

// router.get('/', function (req, res) {
//   res.sendFile(__dirname + '/client/index.html');
// });

router.get('/test', function (req, res) {
  console.log('get plan');
  res.json({
    data: "This worked!"
  });
});

module.exports = router;
