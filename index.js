import express from "express"
import db from "./koneksi.js"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import router from "./routes/route.js"

dotenv.config()
const PORT = process.env.PORT;

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/", router)

// app.get("/", (req,res) => {
//     const sql = "SELECT * FROM produk";
//     db.query(sql, (error, result) => {        
//         res.send(result)
//     })
// })

// app.get("/find", (req,res) => {
//     const id = req.query.id
//     const sql = `SELECT * FROM produk WHERE id = ${id}`
//     db.query(sql, (error, result) => {
//         if(error){
//             res.statusCode(400)
//             res.send(error)
//         }
//         res.status(201)
//         res.json(result)
//     })
// })

app.listen(PORT, () => {
    console.log("server running on http://localhost:" + PORT);
})