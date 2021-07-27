import mongoose from 'mongoose'

const listSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },
    contains: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true }],
}, 
    { timestamps: true }
)

export default mongoose.model('List', listSchema)