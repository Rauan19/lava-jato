import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import UserModel from '../models/User.model'
import dotenv from 'dotenv'

dotenv.config()


export const Login = async (req, res) => {
    const {email, password} = req.body
    
    try {
        const user = await UserModel.findOne({email})
        if(!user) {
            return res.status(400).json({message : " credencias invalidas"})
        }
        const isMatc = await bcrypt.compare(password, user.password)

         if(!isMatc) {
            return res.status(400).json({message: "credencias invalidas"})
         }


        const token = jwt.sign(
            {
                user_id: user.id,
                email: user.email,

            },
              process.env.JWT_SECRET,
             {expiresIn: "5d"}
            
            );

        return res.status(200).send({token})
        
    } catch (err) {
        console.log({error: message.err})
        return res.status(400).json({err})
    }
}