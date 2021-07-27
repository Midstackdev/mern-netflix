import List from '../models/List.js'

export const index = async(req, res) => {
    const typeQuery = req.query.type
    const genreQuery = req.query.genre
    let lists = []
    try {
        // const lists = await List.find().populate('contains').exec()
        if(typeQuery) {
            if(genreQuery) {
                lists = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } }
                ])

            }else {
                lists = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } }
                ])
            }

        }else {
            lists = await List.aggregate([
                {$sample: {size: 10}}
            ])
        }
        
        return res.status(200).json(lists)
    } catch (error) {
        return res.status(200).json(error)
    }
}

export const create = async(req, res) => {
    if(!req.user.isAdmin) {
        const newList = new List(req.body)
        try {
            const list = await newList.save()
            return res.status(200).json(list)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    return res.status(403).json({ message: 'Only admin allowed here' })
}

export const remove = async(req, res) => {
    if(!req.user.isAdmin) {
        
        try {
            await List.findByIdAndDelete(req.params.id)
            return res.status(200).json({message: "List deleted"})
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    return res.status(403).json({ message: 'Only admin allowed here' })
}

export const update = async(req, res) => {
    if(!req.user.isAdmin) {
        
        try {
            await List.findByIdAndDelete(req.params.id)
            return res.status(200).json({message: "List deleted"})
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    return res.status(403).json({ message: 'Only admin allowed here' })
}