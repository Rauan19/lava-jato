import { Register } from "../controller/userController";
import { Login } from "../controller/session.Controller";
import { CreateVeicle } from "../controller/vehicle.Controller";
import { GetVehicles } from "../controller/vehicle.Controller";
import { verifytoken } from "../middlewares/auth";
import { DeleteVeiculo } from "../controller/vehicle.Controller";
import { requestPasswordReset } from "../controller/requestPassword";
import { resetPassword } from "../controller/resetPasswordCOntroller";

export const Routes = app => {
    app.post("/registro", Register)
    app.post("/login", Login)
    app.post("/request-reset-password", requestPasswordReset)
    app.post("/resetpassword", resetPassword)
    app.post("/user/:user_id/veiculo", verifytoken, CreateVeicle)
    app.get("/user/:user_id/veiculo", verifytoken, GetVehicles)
    app.delete("/user/:user_id/veiculo/:id", verifytoken, DeleteVeiculo)
    

}