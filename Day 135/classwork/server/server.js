import express from "express";
import cors from "cors";

const PORT = 3000
const app = express()
app.use(cors({ origin: "http://localhost:5173" }))

const user = {
    id: 1,
    name: "User",
    email: "example@gmail.com"
}

app.get("/api/user", (req, res) => {
    try {
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.listen(PORT, () => {
    console.log(`Server is chilling at port http://localhost:${PORT}`)
})