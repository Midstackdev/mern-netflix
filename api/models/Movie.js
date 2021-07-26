import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genere: { type: String },
    isSeries: { type: Boolean, default: false },
}, 
    { timestamps: true }
)

export default mongoose.model('Movie', movieSchema)