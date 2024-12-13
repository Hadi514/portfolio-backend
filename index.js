import express from 'express'
import cors from 'cors'
import dbFunction from './db.js'
import router from './Testingfile.js'
dbFunction()
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api", router)
app.listen(8000,() => {
console.log('app listening at: http://localhost:8000');

})  