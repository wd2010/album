$(document).ready(function(){
    // 点击按钮，使用FileReader对象显示
    var arr=[]
    $("#upFile").on('change',function(event){
        var files=Array.prototype.slice.call(event.target.files)
        var reader = new FileReader();
        (function readFile(){
            if(files.length>0){
                var f=files.shift()
                var fileName=f.name;
                reader.onload= function(e) {
                    if (arr.indexOf(e.target.result)===-1){
                        arr.push(e.target.result)
                        $("#showImg").append("<div><a class=thumbnail><img src='"+e.target.result+"' /><p class=text-center>"+fileName+"</p></a> </div> ")
                    }else{
                        alert('图片"'+fileName+'"已经上传了，请不要重复上传！')
                    }
                    readFile()
                };
                reader.readAsDataURL(f);
            }
        })()
    })
    // 取消浏览器拖曳默认事件
    $(document).on({
        dragleave:function(e){    //拖离 
            e.preventDefault(); 
        }, 
        drop:function(e){  //拖后放 
            e.preventDefault(); 
        }, 
        dragenter:function(e){    //拖进 
            e.preventDefault(); 
        }, 
        dragover:function(e){    //拖来拖去 
            e.preventDefault(); 
        } 
    })
    // 拖拉图片，使用URL对象显示
    var dragBox=document.getElementById('showImg') 
    dragBox.addEventListener('drop',function  (e) {
        e.stopPropagation()
        e.preventDefault()
        //通过FileList对象
        var files=e.dataTransfer.files;
        if (files.length===0){
            return
        }
        for(var i=0;i<files.length;i++){
            if(files[i].type.indexOf('image')===-1){
                alert('你拖的不是照片！')
                return
            }
            if (arr.indexOf(files[i].name)===-1){
                arr.push(files[i].name)
                var srcUrl=window.URL.createObjectURL(files[i])
                $("#showImg").append("<div><a class=thumbnail><img src='"+srcUrl+"' /><p class=text-center>"+files[i].name+"</p></a> </div> ")
            }else{
                alert('图片"'+files[i].name+'"已经被拖进来了，请不要重复拖它！')
            }
        }
    },false)   
    
});