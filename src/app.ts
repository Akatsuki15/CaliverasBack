import express, {Response, Request} from 'express'
import cors from 'cors'
import contactRoute from './routes/contact.route'

const app = express()

app.use(cors({
    origin: ['http://localhost:5173', '*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-type', 'Authorizacion']
}))

app.use(express.json())

app.use('/api/email', contactRoute)

app.get('/', (req: Request, res: Response)=>{
    res.send('Bienvenido al backend (api)')
})

export default app