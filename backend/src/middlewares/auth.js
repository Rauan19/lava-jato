import jwt from 'jsonwebtoken'


export const  verifytoken = async(req, res, next) => {
    const autheHeader = req.headers.authorization
    if(!autheHeader) {
        return res.status(401).json({error: "token obrigatorio"})
    }

    try {
       const replace = autheHeader.replace("Bearer ", "")
        const decoded = jwt.verify(replace, process.env.JWT_SECRET)
        req.userId = decoded.id

         next()
    } catch (error) {
        console.log({err: error.message})
        return res.status(401).json({error: 'token invalid'})
        
    }
    
}