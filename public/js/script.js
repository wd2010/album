$(document).ready(function(){
    var reader=new FileReader()
    var imgs=[]
    var htmlText=''
    var arr=[]
    $("#upFile").on('change',function(event){
        var files=Array.prototype.slice.call(event.target.files)
        var reader = new FileReader();
        function readFile(){
            if(files.length>0){
                var f=files.shift()
                reader.onload= function(e) {
                 arr.push(e.target.result)
                 readFile()
                };
                reader.readAsDataURL(f);
            }
        }
        readFile()
        for(var i=0;i<arr.length;i++){
            $("#showImg").append("<div><img src='"+arr[i]+"' /></div> ")
        }
    })
});