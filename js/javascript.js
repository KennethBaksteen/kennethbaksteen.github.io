!function(o){
    "use strict";
    o('a.js-scroll-trigger[href*="#"]:not([href="#"])')
        .click(function(){if(location.pathname
        .replace(/^\//,"")==this.pathname
        .replace(/^\//,"")&&location.hostname==this.hostname){
            var t=o(this.hash);
            if((t=t.length?t:o("[name="+this.hash.slice(1)+"]")).length)
                return o("html, body").animate({scrollTop:t.offset().top-70},1e3,"easeInOutExpo"),!1}}),o(document).scroll(function(){o(this).scrollTop()>100?o(".scroll-to-top").fadeIn():o(".scroll-to-top").fadeOut()}),o(".js-scroll-trigger").click(function(){o(".navbar-collapse").collapse("hide")}),o("body").scrollspy({target:"#mainNav",offset:80});var t=function(){o("#mainNav").offset().top>100?o("#mainNav").addClass("navbar-shrink"):o("#mainNav").removeClass("navbar-shrink")};t(),o(window).scroll(t),o(".portfolio-item").magnificPopup({type:"inline",preloader:!1,focus:"#username",modal:!0}),o(document).on("click",".portfolio-modal-dismiss",function(t){t.preventDefault(),o.magnificPopup.close()}),o(function(){o("body").on("input propertychange",".floating-label-form-group",function(t){o(this).toggleClass("floating-label-form-group-with-value",!!o(t.target).val())}).on("focus",".floating-label-form-group",function(){o(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){o(this).removeClass("floating-label-form-group-with-focus")})})}(jQuery);
                
function openEducation(educ) {
    parent = document.getElementById(educ)
    if(parent.classList.contains("closed")) {
        for(child of parent.children){
            child.classList.remove("d-none"); 
            if(child.classList.contains("fa-chevron-down")) {
                child.classList.remove("fa-chevron-down")
                child.classList.add("fa-chevron-up")
            }   
        }
        parent.classList.remove("closed")
        parent.classList.add("opened")            
    } else if(parent.classList.contains("opened")) {
        for(child of parent.children){
            if(child.tagName == "P" && !(child.classList.contains("show"))) {
                child.classList.add("d-none");                
            }
            else if(child.classList.contains("fa-chevron-up")) {
                child.classList.remove("fa-chevron-up")
                child.classList.add("fa-chevron-down")
            }   
        }     
        parent.classList.remove("opened")
        parent.classList.add("closed")
    }
}