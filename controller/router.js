module.exports={
    // 相册主页
    showIndex:function  (req,res,next) {
        res.render('index',{
            'album':['A','B','C']
        })
    },

    // 照片页
    showPhoto:function  (req,res,next) {
        var albumName=req.params.id
        res.render('album',{
            'photos':['a','b','c','e','f','g'],
            'albumName':albumName
        })
    }
}