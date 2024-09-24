import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Mongo conectado")
    } catch (error) {
        console.log(error.message) 
        console.log("Erro ao conectar ao MongoDB: ", error.message);
    } 
} 

export default ConnectDb