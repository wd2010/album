var file=require('../models/file.js')

module.exports={
    // 相册主页
    showIndex:function  (req,res) {
        file.getAllAlbums(function  (err,albumNames) {
            if (err) {
                throw err
            };
            res.render('index',{
                "album":albumNames
            })
        })
    },
    // 上传页面
    showUpLoad:function  (req,res,next) {
        file.getAllAlbums(function  (err,albumNames) {
            if (err) {
                throw err
            };
            res.render('upload',{
                'albumNames':albumNames
            })
        })
    },

    // 照片页
    showPhoto:function  (req,res) {
        var albumName=req.params.id;
        file.getPhotosByAlbumName(albumName,function  (err,photos) {
            if (err) {
                throw err
            };
            res.render('album',{
                'photos':photos,
                'albumName':albumName
            })
        })
    },
    // 404页面
    show404:function  (req,res) {
        res.render('404')
    }

}