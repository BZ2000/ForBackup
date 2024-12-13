$(function(){
    //點小圖，要避免點到另一頁
    //點小圖，要取得a的href的路徑連結
    //點小圖，要打開lightbox-overlay(show)
    //大圖的img(lightbox-img)的src要換成href的路徑
    //點x的符號要把lightbox-overlay(hide)隱藏
    $('.lightbox').on("click",function(event){
        event.preventDefault();
        let url = $(this).attr("href");
        $('.lightbox-img').attr("src",url);
        $('.lightbox-overlay').fadeIn();
    })
    $('.lightbox').on('mouseenter',function(){
        console.log("test")
        $(this).css({
            "transform": 'scale(1.1)'
        })
    }).on('mouseleave',function(){
        $(this).css({
            "transform": 'scale(1)'
        })
    })
    $('.lightbox-close').on("click",function(){
        $('.lightbox-overlay').fadeOut();
    });
        
})