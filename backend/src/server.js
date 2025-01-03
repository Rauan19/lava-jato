import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {ConnectDb}  from './config/db'
import { Routes } from './routes/routes'
const app = express()

dotenv.config()
app.use(express.json())
ConnectDb()
app.use(cors())
Routes(app)

const Port = process.env.PORT || 3000


app.listen(Port)
