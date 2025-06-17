const express = require('express')
const router = express.Router()
const formEntry = require ('../models/FormEntry')

router.get('/dress',async (req,res)=>{
    try {
        const entries = await formEntry.find().sort({createdAt:-1});
        res.status(200).json(entries)
    } catch (error) {
        console.log('error fetching entries : ', error);
        res.status(500).json({error : 'failed to fetch entries'});
    }
})

module.exports = router;