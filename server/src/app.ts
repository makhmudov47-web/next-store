import express from 'express'
import type { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {statfs} from "node:fs";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.use(express.json())

app.get('api/health', (_req: Request, res: Response) => {
    res.json({status:'ok', message:'server is running perfectly!'})
})

app.listen(PORT, () => {
    console.log(`Server is ready at http://localhost:${PORT}`)
})
