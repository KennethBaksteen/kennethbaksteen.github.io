//! in front of function: !function(params) { body }(paramvalues)
//Runs the function immediatly using the given paramvalues for the params
!function(o){
    "use strict";
    
    o('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){
        if(location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname){
            var t = o(this.hash);
            if((t = t.length ? t : o("[name=" + this.hash.slice(1) + "]")).length) {
                return o("html, body").animate({scrollTop:t.offset().top - 70},1e3, "easeInOutExpo"), !1
            }
        }
    }),
    
    o(document).scroll(function(){
        o(this).scrollTop() > 100 ? o(".scroll-to-top").fadeIn() : o(".scroll-to-top").fadeOut()
    }),
    
    o(".js-scroll-trigger").click(function(){
        o(".navbar-collapse").collapse("hide")
    }),
        
    o("body").scrollspy({target: "#mainNav", offset: 80});
    var t = function(){
        o("#mainNav").offset().top > 100 ? o("#mainNav").addClass("navbar-shrink") : o("#mainNav").removeClass("navbar-shrink")
    };
    t(),
    
    o(window).scroll(t),
    
    o(".portfolio-link").magnificPopup({type: "inline", preloader: !1, focus: "#username", modal: false, closeOnBgClick: false}),
    
    //Load the slider only when a portfolio item is clicked and thus opened
    o(".portfolio-link").on("click", function() {
        $("#lightSlider").lightSlider(({
            item: 1,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 10,
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',////
            speed: 400, //ms'
            auto: false,
            loop: false,
            slideEndAnimation: true,
            pause: 2000,
            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',
            rtl:false,
            adaptiveHeight:false,
            vertical:false,
            verticalHeight:500,
            vThumbWidth:100,
            thumbItem:10,
            pager: true,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',
            enableTouch:true,
            enableDrag:true,
            freeMove:true,
            swipeThreshold: 40,
        }))  
    }),
    
    o(document).on("click", ".portfolio-modal-dismiss", function(t){
        t.preventDefault(),
        //Clean slider when closing portfolio item
        $(".lSAction").remove(),
        $(".lSPager").remove(),
        o.magnificPopup.close()
    })
}(jQuery);   
            
function openEducation(educ) {
    parent = document.getElementById(educ)
    extraInfo = parent.querySelector(".extra-info")
    icon = parent.querySelector(".fa")
    if(extraInfo.classList.contains("closed")) {
        icon.classList.remove("down")
        icon.classList.add("up")
        extraInfo.classList.remove("closed")
        extraInfo.classList.add("opened")            
    } else if(extraInfo.classList.contains("opened")) { 
        icon.classList.remove("up")
        icon.classList.add("down")
        extraInfo.classList.remove("opened")
        extraInfo.classList.add("closed")
    }
}