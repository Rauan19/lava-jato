import veiculosModel from "../models/veiculos.model";
import UserModel from "../models/User.model";
export const CreateVeicle = async (req, res) => {
   
    try {

       const {model, color, licensePlate, service, price} = req.body;
        const {user_id} = req.params
        const user = await UserModel.findById(user_id)

        if(!user) {
            return res.status(404).json()
        }
      
        const newVehicle = veiculosModel.create({
            userId: user_id,
            model,
            color,
            licensePlate,
            service,
            price
        })
        return res.status(201).json(newVehicle)
    } catch (error) {
        return res.status(500).send(error)
    }
}

export const GetVehicles = async (req, res) => {
    
    try {
        const {user_id} = req.params
        const veiculo = await UserModel.findById(user_id)

        if(!veiculo) {
            return res.status(400).json()
        }

        const veiculos = await veiculosModel.find({userId: user_id})
        res.status(200).json(veiculos)
    } catch (error) {
        return res.status(500).send(error)
        
    }
}

export const DeleteVeiculo = async (req, res) => {
    try {
        const {user_id, id} = req.params
       
        const veiculos = await veiculosModel.findOne({
            userId: user_id,
            _id: id
        })
        if(!veiculos){
            return res.status(404).json({ msg: 'Veículo não encontrado ou não pertence ao usuário.' })
        }
        await veiculos.deleteOne()

        return res.status(200).json({ msg: 'Veículo removido com sucesso.' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "interal server error"})
        
    }
}