var express = require('express'), //get dependencies
    router = express.Router(),
    musicCtrl = require('./music-controller.js');

//create path for API
router.post('/music', musicCtrl.createMusic);
router.get('/music', musicCtrl.getMusic);
router.get('/music/:name', musicCtrl.getMusic);
router.delete('/music/:name', musicCtrl.deleteMusic);
router.put('/music/:name', musicCtrl.updateMusic);

module.exports = router;