$(function(){
    // the fixed navbar opacity when scrolling down
    $(window).scroll(function(){

        let nav = $(".navbar");
        if($(window).scrollTop() >= nav.height()){
            nav.addClass("navbar-fixed-top")
            if(nav.hasClass("scrolled")){
                return 0; 
            }else{
                nav.addClass("scrolled")
            }
        }else{
            nav.removeClass("scrolled")
            nav.removeClass("navbar-fixed-top")
        }
    })
   // deal with tabs
   $(".tab-switch li").on("click",function(){
       // remove active class from all
       $(this).siblings().removeClass("selected");
       // add class active to the clicked li 
       $(this).addClass("selected")
       // hide all div
       $(".tabs .content > div").hide()
       // show the div related to the tab 
       $("." + $(this).data("class")).fadeIn();
   })
   // scroll to section when links clicked
   $(".nav li a").on("click",function(e){
       $(".nav > li").siblings().removeClass("active")
       $(this).addClass("active")
       e.preventDefault()
       $("html, body").animate({
           scrollTop: $("#" + $(this).data("scroll")).offset().top
       },1000)
   })
   // scroll to top
   $(window).scroll(function(){
       if( $(window).scrollTop()>=500){
           $(".top").fadeIn()
       }else{
        $(".top").fadeOut()
       }
   })
   $(".top").on("click",function(){
       $("html").animate({
           scrollTop:0
       },500)
   })
   // nice scroll
   $("html").niceScroll({
    cursorcolor:' #FF8B38',
    cursorwidth: "10px",
    cursorborder: "1px solid  #FF8B38",
    zindex: "9999999",
    cursorborderradius: "0"
    
    
    });
    // Hide Placeholder On Focus
    let placeattr = "";
    $("[placeholder]").focus(function () {
    placeattr = $(this).attr("placeholder");
    $(this).attr("placeholder", "");
    });
    $("[placeholder]").blur(function () {
    $(this).attr("placeholder", placeattr);
    });
    //
    $(".nav li").on("click",function(){
        $(this).siblings().removeClass("active")
        $(this).addClass("active")
    })
})