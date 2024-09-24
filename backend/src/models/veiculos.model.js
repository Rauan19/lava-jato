import mongoose from "mongoose";

const VeiculoSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true

    },
    color: {
        type: String,
        required: true
    },
    licensePlate: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})


export default mongoose.model("Veiculos", VeiculoSchema)