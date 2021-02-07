let rtlCheck = false;

let fns ={
    sideNav:{
        sideNavHandler(){
            $('.hamburger').on('click', function(){
                if($(window).width() > 991.98){
                    $('#side-nav').toggleClass("side-nav-mini");
                    $('#main-wrapper').toggleClass("full-content");
                    $('.hamburger').toggleClass("is-active");
                }else{
                    $('#side-nav').toggleClass("show");
                    $('.hamburger').toggleClass("is-active");
                }
            });
            if($(window).width() < 992){
                fns.sideNav.sideNavMobHandler();
            }else{
                fns.sideNav.sideNavFocusHandler();  
                $('.header-col.ico-controls-wrapper').on("click", function(){
                    $('#side-nav').removeClass("show");
                    $('.hamburger').removeClass("is-active");
                });              
            }
        },
        sideNavMobHandler(){
            var classListBefore, classArrBefore, classListAfter, classArrAfter;
            try{
                classListBefore = $("#main-wrapper").attr("class");
                classArrBefore = classListBefore.split(/\s+/);        
            }catch{

            }
            $('#side-nav').addClass("side-nav-mob");
            $('#main-wrapper').addClass("content-mob"); 
            $('#side-nav').removeClass("side-nav-mini");
            $('#main-wrapper').removeClass("full-content");
            setTimeout(function(){
                try{
                    classListAfter = $("#main-wrapper").attr("class");
                    classArrAfter = classListAfter.split(/\s+/);
                }catch{
                
                }
                if(!(classArrBefore.includes("content-mob")) && classArrAfter.includes("content-mob")){
                    $('.hamburger').removeClass('is-active');
                }
            }, 500);
        },
        sideNavScreenHandler(){
            var classListBefore, classArrBefore, classListAfter, classArrAfter;
            try{
                classListBefore = $("#main-wrapper").attr("class");
                classArrBefore = classListBefore.split(/\s+/);        
            }catch{

            }
            $('#side-nav').removeClass("side-nav-mob");
            $('#side-nav').removeClass("show");
            $('#main-wrapper').removeClass("content-mob");   
            setTimeout(function(){
                try{
                    classListAfter = $("#main-wrapper").attr("class");
                    classArrAfter = classListAfter.split(/\s+/);
                }catch{
                
                }
                if(classArrBefore.includes("content-mob") && classListAfter == ""){
                    $('.hamburger').removeClass('is-active');
                }
            }, 500);
        },
        sideNavFocusHandler(){
            $('#side-nav').on('mouseenter', function(){
                if($('#side-nav').hasClass('side-nav-mini')){
                    $('#side-nav').addClass("side-nav-focus");
                }
            });
            $('#side-nav').on('mouseleave', function(){
                if($('#side-nav').hasClass('side-nav-mini')){
                    $('#side-nav li.nav-item.dropdown').removeClass('show');
                    $('#side-nav .dropdown-menu').removeClass('show');
                    $('#side-nav').removeClass("side-nav-focus");
                }
            });
        },
        activeDropDownsHandler(){
            if($('#nav-list .dropdown-item').hasClass("active")){
                const $this = $('#nav-list .dropdown-item.active');
                $this.closest(".dropdown").addClass("active");
                $this.closest(".dropdown").find(".dropdown-toggle").click();
                $this.closest(".dropdown").find(".dropdown-toggle").blur();
            }
        },
    },
    owlCarousels:{
        basicOwl(){
            if($('#form-pg-carousel').hasClass('owl-carousel')){
                $('#form-pg-carousel.owl-carousel').owlCarousel({
                    rtl: rtlCheck,
                    items:1,
                    lazyLoad:true,
                    loop:true,
                    margin:10,
                    dots: true,
                    autoplay:true,
                    autoplayTimeout:2500,
                    autoplayHoverPause:true
                });
            }
        },
    },
    dropDowns:{
        defaultDropDown(){
            $('.dropdown-trigger').on('click', function(){
                $('.dropdown-list').not($(this).closest('.dropdown-blk').find('.dropdown-list')).slideUp();
                $(this).closest('.dropdown-blk').find('.dropdown-list').slideToggle();
            });
        
            $('body').on('click', function(e){
                if($(e.target).closest('.dropdown-blk').length == 0){
                    $('.dropdown-list').slideUp();
                }    
            });
        }
    },
    pgTit:{
        pgTitHandling(){
            let pgTit = $('#content-tit').text();
            $("#header-tit").text(pgTit);
        },
    } 
}


$(window).on('resize', function(){
    if($(window).width() < 992){
        fns.sideNav.sideNavMobHandler();
    }else{
        fns.sideNav.sideNavScreenHandler();
        fns.sideNav.sideNavFocusHandler();
    }
});
$(document).ready(function () {
    if($('body').hasClass('rtl')){
        rtlCheck = true;
    }

    fns.sideNav.sideNavHandler();
    fns.sideNav.activeDropDownsHandler();
    fns.owlCarousels.basicOwl();
    fns.dropDowns.defaultDropDown();
    fns.pgTit.pgTitHandling();

    // $('input[type=file]').on('change', function(){
    //     $(this).closest('.upload-control-wrapper').find('.upload-val').text($(this).val());
    //     if($(this).val() == '' || $(this).val() == undefined || $(this).val() == null){
    //         $(this).closest('.form-group').removeClass('active-control');
    //     }else{
    //         $(this).closest('.form-group').addClass('active-control');
    //     }
    // });

    


    try {
        $('#datepicker').datepicker();
    }
    catch(err) {
        // NO DATE PICKER IN PAGE
    }
});