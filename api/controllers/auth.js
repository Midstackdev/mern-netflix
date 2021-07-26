import User from '../models/User.js'
import { decrypt, encrypt } from '../utilities/crypto.js'
import { generateToken } from '../utilities/token.js'


export const register = async(req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: encrypt(req.body.password),
    })
    
    try {
        const user = await newUser.save()
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }

}

export const login = async(req, res) => {
    
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user){
            return res.status(404).json({ message: 'User not found.'})
        }

        if(decrypt(user.password) !== req.body.password) {
            return res.status(401).json({ message: 'Password incorrect.'})
        }
        const token = generateToken(user)
        const { password, ...others} = user._doc
        return res.status(200).json({ ...others, token })
    } catch (error) {
        return res.status(500).json(error)
    }

}