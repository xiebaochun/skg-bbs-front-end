$(function() {
    $('.topic_abstract > img').click(function(){
        console.log($('#slides'));
        var slide = $(this).parent().children('#slides');
        var current_index = $(this).index();
        if(slide.length>0){
            $(this).parent().css('height','auto');
            $(this).hide().siblings().hide();
            
            slide.css('display','block');
            console.log(slide);
             switchable({
                $element: slide
                ,animateSpeed: 500,
                effect:'slide',
                autoPlay:false,
                showNav:false,
                current_index:current_index
            });    
        } 
       
    });   
    $('.g_slide img').click(function() {
        $(this).parent().parent().parent().css('display','none').siblings().show();

    });
});
