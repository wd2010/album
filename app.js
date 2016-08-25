var express=require('express');
var app=express();
var router=require('./controller/router.js')

app.set('view engine','ejs')

// 静态文件
app.use(express.static('./public'))

// 路由
app.get('/',router.showIndex)
app.get('/upload',router.showUpLoad)
app.get('/:id',router.showPhoto)
app.use(router.show404)

// 监听3000端口
app.listen(3000)