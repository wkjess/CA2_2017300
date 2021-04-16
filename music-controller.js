var Monster = require("./models/music.js")

//create a new music in the database
exports.createMusic = function(req, res) { 
    var newMusic = new Music(req.body);
    newMusic.save(function (err, user) { 
        if (err) { 
            res.status(400).json(err);
        }

        res.json(user); 
});
};

//get the data of all music in the database
exports.getMusic = function(req, res) {
   Music.find({}, function (err, music) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(music);
  }); 
};

//get the data of one of the music in the database
exports.getMusic = function(req, res) {
  Music.findOne({_id: req.params.name}, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

//Update the data of music in the database
exports.updateMusic = function(req, res) {
  Music.findOneAndUpdate({name: req.body.name}, req.body, {new: true},function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

//delete a music from the database
exports.deleteMusic = function(req, res) {
    Music.findOneAndRemove({name:req.params.name}, function (err, user) {
        if (err) {
            res.status(400).json(err);
        } 
        res.json(user);
    }); 
};