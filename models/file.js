var fs=require('fs');
// 使用module.exports对象为各属性值时出错
exports.getAllAlbums=function  (callback) {
        fs.readdir('./uploads/',function  (err,files) {
            if (err) {
                callback(err,null)
            };
            var arr=[];
            for(var i=0;i<files.length;i++){
                (function iterator (e) {
                    fs.stat('./uploads/'+files[e],function  (err,stats) {
                        if (err) {
                            callback("uploads下面的文件:"+files[e]+"出错了！",null)
                        };
                        if(stats.isDirectory()){
                            arr.push(files[e])
                        }
                        if(e===(files.length-1)){
                            console.log(arr)
                            return callback(null,arr)
                        }
                    })
                })(i)
            }
        })
    }
exports.getPhotosByAlbumName=function  (albumName,callback) {
    fs.readdir('./uploads/'+albumName+"/",function  (err,files) {
        if (err) {
            callback(err,null)
            return
        };
        var arr=[];
        for(var i=0;i<files.length;i++){
            (function  (e) {
                fs.stat('./uploads/'+albumName+'/'+files[e],function  (err,stats) {
                    if (err) {
                        callback('./uploads/'+albumName+'下文件不存在!',null)
                        return
                    };
                    if(stats.isFile()){
                        arr.push(files[e])
                    }
                    if(e===(files.length-1)){
                        console.log(arr)
                        callback(null,arr)
                        return
                    }
                })
            })(i)
        }
    })
}


