import { ContactController } from "@/controllers/contact.controller";
import { Router } from "express";

const router = Router()

router.post('/send', ContactController.sendEmail)

export default router