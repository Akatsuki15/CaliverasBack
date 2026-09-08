import { Request, Response, NextFunction } from "express";

const transporter = require('../config/mail');

export class ContactController{

    static async sendEmail(req: Request, res: Response, next: NextFunction){
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.GMAIL_USER,
            replyTo: `${email}`,
            subject: `Nuevo mensaje de ${name}`,
            text: message,
        };

        console.log(mailOptions)

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email enviado correctamente' });
        } catch (error) {
            console.error('Error al enviar email:', error);
            res.status(500).json({ error: 'Hubo un error al enviar el email' });
        }
    }
}