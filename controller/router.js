var file=require('../models/file.js')

module.exports={
    // 相册主页
    showIndex:function  (req,res,next) {
        res.render('index',{
            'album':file.getAllAlbums()
        })
    },
    // 上传页面
    showUpLoad:function  (req,res,next) {
        res.render('upload',{
            'albumNames':['A','B','C','D']
        })
    },

    // 照片页
    showPhoto:function  (req,res,next) {
        var albumName=req.params.id
        res.render('album',{
            'photos':['a','b','c','e','f','g'],
            'albumName':albumName
        })
    },
    // 404页面
    show404:function  (req,res) {
        res.render('404')
    }

}