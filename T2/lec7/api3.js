expr = require('express')
router=expr.Router()
const data=[

    { id:101,name:"ABC",branch:"CSE",contact:9876543210,city:"Ahmedabad" },

    { id:102,name:"BCD",branch:"CE",contact:9876543210,city:"Ahmedabad"  },

    { id:103,name:"XYZ",branch:"CSE",contact:9876543210,city:"Rajkot" },

    { id:104,name:"PQR",branch:"IT",contact:9876543210,city:"Ahmedabad" },

    { id:105,name:"ABC",branch:"CSE",contact:9876543210,city:"Surat" },

    { id:106,name:"ABC",branch:"IT",contact:9876543210,city:"Rajkot" }]
    
router.get('/m',(req,res)=>{
    res.json(mvi)
})
router.get('/branch/:branch',(req,res)=>{
    b=data.filter((a)=>a.branch.toLowerCase()==req.params.branch.toLowerCase())
    if(b){
        res.json(b)
    }
    else{
        res.send('No data found')
    }
})
module.exports=router