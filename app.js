var express=require('express');
var app=express();
var router=require('./controller/router.js')

app.set('view engine','ejs')

// 静态文件
app.use(express.static('./public'))

// 路由
app.get('/',router.showIndex)
app.get('/:id',router.showPhoto)


// 监听3000端口
app.listen(3000)