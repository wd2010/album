module.exports={
    // 相册主页
    showIndex:function  (err,req,res,next) {
        if (err) {
            throw (err)
            next()
        };
        res.render('index',{
            'album':['A','B','C']
        })
        next()
    },
    // 上传页面
    showUpLoad:function  (err,req,res,next) {
        if(err){
           throw (err) 
           next();
        }
        res.render('upload',{
            'albumNames':['A','B','C','D']
        })
    },

    // 照片页
    showPhoto:function  (err,req,res,next) {
        if(err){
            throw (err)
            next();
        }
        var albumName=req.params.id
        res.render('album',{
            'photos':['a','b','c','e','f','g'],
            'albumName':albumName
        })
        next()
    },

    // 404页面
    show404:function  (req,res) {
        res.render('404')
    }

}