import User from "../models/User.js"
import { encrypt } from "../utilities/crypto.js"

export const index = async(req, res) => {
    if(req.user.isAdmin) {
        const query = req.query.new
        try {
            const users = query ? await User.find().select('-password -__v').sort({ _id: -1 }).limit(5) : await User.find().select('-password -__v')
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    return res.status(403).json({ message: 'Only admin users here' })

}

export const show = async(req, res) => {

    try {
        const user = await User.findById(req.params.id).select('-password -__v')
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }

}

export const update = async(req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        if(req.body.password) {
            req.body.password = encrypt(req.body.password)
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            return res.status(200).json(updatedUser)
        } catch (error) {
            return res.status(500).json(error)
        }
        
    }
    return res.status(403).json({ message: 'You can only update your items' })
}

export const remove = async(req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {

        try {
            await User.findByIdAndDelete(req.params.id)
            return res.status(200).json({ message: 'User deleted' })
        } catch (error) {
            return res.status(500).json(error)
        }
        
    }
    return res.status(403).json({ message: 'You can only update your items' })
}

export const stats = async(req, res) => {
    if(req.user.isAdmin) {
        const today = new Date()
        const lastYear = today.setFullYear(today.setFullYear() - 1)

        try {
            const data = await User.aggregate([
                {
                    $project: {
                        month: {$month: "$createdAt"}
                    }
                }, {
                    $group: {
                        _id: "$month",
                        total: {$sum:1}
                    }
                }
            ])
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(error)
        }
        
    }
    return res.status(403).json({ message: 'Only admin users here' })
}