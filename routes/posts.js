const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').get((req, res) =>{
    const queryTerm = req.query.q;
    const queryRegEx = new RegExp(queryTerm, 'i')
    var query = Post.find({
        $or: [{title:  queryRegEx  },
            {description: queryRegEx }]
    })

    query.exec(function(err, post){
        if(err){ res.status(404).json(err)}
        else{
            res.json(post)
        }
    })
}
)

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageURL = req.body.imageURL;

    const newPost = new Post({
        title,
        description,
        imageURL
    })

    newPost.save()
        .then(() => res.json('Post added!'))
        .catch( err => res.status(400).json('Error: ' + err));
})

module.exports = router;