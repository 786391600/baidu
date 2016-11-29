$(function(){
    var clienH=$(window).height();
    var num=0;
    var flag=true;
    // 上划
    console.log(clienH);
    touch.on("body","swipeup","#fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        flag=false;
        $("#fullpage").css("marginTop",-num*clienH);
    })
    // 下划
    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        flag=false;
        $("#fullpage").css("marginTop",-num*clienH);
    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })
})