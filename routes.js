var express = require('express'), //get dependencies
    router = express.Router(),

const Music = require ('../models/music');


router.get('/', async (req, res) =>{
    const music = await Music.find();
    
    res.render('index', {
        music
});

//Create music from data
router.post('/add', (req, res) =>{
    
    const music = new Music(req.body);
     music.save();
    res.redirect('/');
});

//Replace music from data
router.get ('/edit/:id', async (req, res) =>{
 
    const { id } = req.params;
    const music = await Music.findById(id);
    res.render('edit', {

        music
    });

});

//Update music from data
router.post('/edit/:id', async (req, res) =>{

     const { id } = req.params;
    await Music.update ({ _id: id }, req.body);
     res.redirect('/');

});

//Delete music from data
router.get('/delete/:id', async (req, res) => {

    const { id } = req.params;
    await Music.remove({_id: id });
     res.redirect('/');
});

module.exports = router;