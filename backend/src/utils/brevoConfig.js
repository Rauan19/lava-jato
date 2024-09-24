import SibApiV3Sdk from 'sib-api-v3-sdk';
import dotenv from 'dotenv';

dotenv.config();

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const sendEmail = async ({ to, subject, text }) => {
  const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

  const sender = { email: process.env.EMAIL_USER };
  const receivers = [{ email: to }];

  try {
    await tranEmailApi.sendTransacEmail({
      sender,
      to: receivers,
      subject,
      textContent: text,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendEmail;
