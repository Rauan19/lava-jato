import UserModel from "../models/User.model";

import bcrypt from 'bcryptjs'




export const Register = async (req, res) => {
    const { name, email, password} = req.body

    try {
        if(!name) {
            return res.json("Nome obrigatorio")
        }
        if(!email) {
            return res.status(400).json({message: 'Email obrigatorio'})
        }
        if(!password){
            res.status(400).json({message: 'password obrigatorio'})
        }
        const user = await UserModel.findOne({email})
        if(user) {
            return res.status(400).json({message: 'user already exists'})

        }
        
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = await UserModel.create({
            name,
            email,
            password: hashPassword
        })
        
        return res.status(200).json(newUser)
      
    } catch (error) {
        return res.json(message.error)
    }
}