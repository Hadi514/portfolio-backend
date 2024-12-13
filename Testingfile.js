import express from 'express'
const router = express.Router()
router.get("/getdata", async(req, res) => {
    res.json("Chan Chhaiyyan Chaiyyan Chaiyyan Chaiyyan");
    
})
export default router