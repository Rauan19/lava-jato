import crypto from 'crypto';
import UserModel from '../models/User.model';
import sendEmail from '../utils/brevoConfig';

export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email not found' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetLink = `${process.env.BASE_URL}/reset-password/${resetToken}`;

    const emailContent = `
     Você está recebendo este email porque (ou alguém) solicitou a redefinição da senha para sua conta.\n\n
            Por favor, use o seguinte token para redefinir sua senha dentro de uma hora após recebê-lo:\n\n
            Token: ${resetLink}\n\n
            Se você não solicitou isso, ignore este email e sua senha permanecerá inalterada.
    
    `;

    await sendEmail({
      to: user.email,
      subject: 'Solicitação de Redefinição de Senha',
      text: emailContent,
    });

    res.status(200).json({ message: 'Email de redefinição de senha enviado' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
