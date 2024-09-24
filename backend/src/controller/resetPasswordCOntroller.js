import UserModel from '../models/User.model';
import bcrypt from 'bcryptjs';

export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await UserModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() } // Verifica se o token não expirou
    });

    if (!user) {
      return res.status(400).json({ message: 'Token inválido ou expirado' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    user.resetPasswordToken = undefined; // Limpa o token após o uso
    user.resetPasswordExpires = undefined; // Limpa o tempo de expiração após o uso

    await user.save();

    res.status(200).json({ message: 'Senha redefinida com sucesso' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
