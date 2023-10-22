const Post = require('../model/postModel');

exports.createPost = async function (req, res) {
    try {
        const { content } = req.body;
        //Create a new post
        const post = await Post.create({ content });

        //Send a detailed response
        res.status(201).json({
            postID: post._id,
            content: post.content,
            createdAt: post.createdAt
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getAllPosts = async function (req, res) {
    try {
        const posts = await Post.find();
        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found' });
        }
        res.status(200).json(
            posts.map(post => ({
                postId: post._id,
                content: post.content,
                createdAt: post.createdAt
            }))
        )
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getPostById = async function (req, res) {
    try {
        const { postID } = req.params;
        const post = await Post.findById(postID);
        if (!post) {
            return res.status(404).json({ message: "Post not found" })
        }
        res.status(200).json({
            postID: post._id,
            content: post.content,
            createdAt: post.createdAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.updatePost = async function (req, res) {
    try {
        const { postID } = req.params;
        const { content } = req.body;

        const updatedPost = await Post.findByIdAndUpdate(
            postID,
            { content, updatedAt: Date.now() },
            { new: true })
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' })
        }
        res.status(200).json({
            postID: updatedPost._id,
            content: updatedPost.content,
            createdAt: updatedPost.createdAt,
            updatedAt: updatedPost.updatedAt
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deletePost = async function (req, res) {
    try {
        const { postID } = req.params;
        const deletedPost = await Post.findByIdAndDelete(postID);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found.' })
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}