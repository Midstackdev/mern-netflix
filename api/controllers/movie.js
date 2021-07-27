import Movie from '../models/Movie.js'

export const index = async(req, res) => {
    if(!req.user.isAdmin) {

        try {
            const movies = await Movie.find()
            return res.status(200).json(movies.reverse())
        } catch (error) {
            return res.status(500).json(error)
        }

    }
    return res.status(403).json({ message: 'Only admin allowed here' })
}

export const create = async(req, res) => {
    if(!req.user.isAdmin) {
        const newMovie = new Movie(req.body)

        try {
            const movie = await newMovie.save()
            return res.status(200).json(movie)
        } catch (error) {
            return res.status(500).json(error)
        }

    }
    return res.status(403).json({ message: 'Only admin allowed here' })
}

export const update = async(req, res) => {
    if(!req.user.isAdmin) {

        try {
            const movie = await Movie.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            return res.status(200).json(movie)
        } catch (error) {
            return res.status(500).json(error)
        }

    }
    return res.status(403).json({ message: 'Only admin allowed here' })
}

export const remove = async(req, res) => {
    if(!req.user.isAdmin) {

        try {
            await Movie.findByIdAndDelete(req.params.id)
            return res.status(200).json({message: "movie deleted"})
        } catch (error) {
            return res.status(500).json(error)
        }

    }
    return res.status(403).json({ message: 'Only admin allowed here' })
}

export const show = async(req, res) => {
    
    try {
        const movie = await Movie.findById(req.params.id)
        return res.status(200).json(movie)
    } catch (error) {
        return res.status(500).json(error)
    }

}

export const random = async(req, res) => {
    const type = req.query.type
    let movie
    try {
        if(type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1} }
            ])
        }else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1} }
            ])
        }
        return res.status(200).json(movie)
    } catch (error) {
        return res.status(500).json(error)
    }

}