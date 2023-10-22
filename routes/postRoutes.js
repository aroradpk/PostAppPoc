const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:postID', postController.getPostById);
router.put('/:postID', postController.updatePost);
router.delete('/:postID', postController.deletePost);

module.exports = router;
