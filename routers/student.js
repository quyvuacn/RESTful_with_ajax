const express = require('express')
const studentRouter = express.Router()

let data = [
    {
        id : 1,
        name : 'Vũ Viết Quý'
    },
    {
        id : 2,
        name : 'Nguyễn Đắc Dũng'
    },
    {
        id : 3,
        name : 'Tạ Duy Linh'
    }
]

studentRouter.get('/',function(req, res){
    res.send(data)
})

studentRouter.post('/',function(req,res,next){
    if(!data.find(el=>el.id==req.body.id)){
        data.push(req.body)
        res.send(data)
    }else{
        next('ID đã tồn tại')
    }
    
})
studentRouter.delete('/:id',function(req,res){
    let id = req.params.id
    data = data.filter(el=>el.id != id)
    res.send(data)
})
studentRouter.put('/:id',function(req,res){
    let name = req.body.name
    let id = req.params.id
    data.find(el=>el.id == id).name = name
    res.send(data)
})



module.exports = studentRouter