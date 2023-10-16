var elementTop= $('.nav').offset().top;
$(window).scroll(function(){
if($(window).scroll.Top()>=elementTop){
$('body').addClass('nav_fixed');
}else{
$('body').removeClass('nav_fixed');
    }
});
$('.btn-menu').on('click',function(){
$('.nav').toglleClass('nav-toggle');   

})




