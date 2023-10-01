import mongoose from "mongoose"

const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

let users
try {
    users = mongoose.model('User')
} catch (error) {
    users = mongoose.model('User', userSchema)
}

export default users