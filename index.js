const express = require('express')
const path = require('path')
const router = require('./routers')
const app = express()
const port = process.env.PORT ||8000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())
app.use(express.json())







//Router
router(app)



app.get('*',function(req,res){
    res.redirect('/index.html')
})

//S4_5-AJAX.html
app.listen(port, () => console.log(`Example app listening on port ${port}!`))