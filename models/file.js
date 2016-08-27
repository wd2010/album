var fs=require('fs');

module.exports={
    getAllAlbums: function  () {
        fs.readdir('./uploads/',function  (err,files) {
            var arr=[];
            if (err) {
                throw err
            };
            for(var i=0;i<files.length;i++){
                (function iterator (e) {
                    arr.push(files[e])
                })(i)
            }
            console.log(arr)
            return arr
        })
    }
}

