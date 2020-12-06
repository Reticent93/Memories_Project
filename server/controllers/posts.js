const mongoose = require('mongoose')

const PostMessage = require('../models/postMessage')

const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    }catch (err) {
        res.status(404).json({message: err.message})
    }
}

module.exports = {
    getPosts,
}