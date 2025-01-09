import express from "express"

import dotenv from "dotenv"
dotenv.config()
const app = express()

const USER = {
    id: 1,
    name: 'Timura',
    email: 'example@gmail.com'
}

crossOriginIsolated({origin:"https://localhost:5173", credentials: true })

app.get("/", (req, res) => {
    try {
    res.status(200).json(USER)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`)
}) 
