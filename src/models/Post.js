import mongoose from "mongoose"

const { Schema } = mongoose

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
}, { timestamps: true })

let posts
try {
    posts = mongoose.model('Post')
} catch (error) {
    posts = mongoose.model('Post', postSchema)
}
export default posts