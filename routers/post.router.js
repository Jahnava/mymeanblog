const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');
const _ = require('lodash');

router.get('/posts', function(req, res){
  Post.find({}, function(err, posts){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        posts: posts
      });
    }
  });
});
router.get('/posts/:id', function(req, res){
  Post.find({_id: req.params.id}, function(err, posts){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        posts: posts
      });
    }
  });
});
router.post('/posts', function(req, res){
  var post = new Post(req.body);
  post.save(function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Created a post successfully'
      });
    }
  });
});
router.put('/posts/:id', function(req, res){
  Post.findOneAndUpdate({_id: req.params.id}, req.body, function(err, post){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully updated post'
      });
    }
  });
});
router.delete('/posts/:id', function(req, res){
  Post.remove({_id: req.params.id}, function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully deleted'
      });
    }
  });
});

router.get('/posts/random/:number', function(req, res){
  var number = req.params.number;
  Post.find({})
      .populate('author', 'name')
      .exec(function(err, posts){
        if(err){
            res.status(500).json({
              msg: err
            });
          } else {
            res.status(200).json({
              posts: _.sampleSize(posts, number)
            })
          }
      });
});
module.exports = router;
