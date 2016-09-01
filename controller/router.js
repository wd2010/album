var file=require('../models/file.js')
var formidable=require('formidable')
var fs=require('fs')
var path=require('path')

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
    // 把本地照片上传
    doUp:function  (req,res) {
        var form=new formidable.IncomingForm()

        form.uploadDir="./tempup"
        form.parse(req,function  (err,fields,files) {
            var albumName=fields.albumNames;
            var oldName=path.normalize(__dirname+'/../'+files.upFile.path);
            var newName=path.normalize(__dirname+'/../uploads/'+albumName+'/'+files.upFile.name)
            fs.rename(oldName,newName,function  (err) {
                if (err) {
                    throw err
                };
            })
        })
        res.end('成功')
    },
    // 404页面
    show404:function  (req,res) {
        res.render('404')
    }

}