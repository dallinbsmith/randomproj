/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {

    /*----------------------------------------------------*/
    /* FitText Settings
    ------------------------------------------------------ */

    setTimeout(function () {
        $('h1.responsive-headline').fitText(1, { minFontSize: '20px', maxFontSize: '50px' });
    }, 100);


    /*----------------------------------------------------*/
    /* Smooth Scrolling
    ------------------------------------------------------ */

    $('.smoothscroll').on('click', function (e) {

        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1600, 'swing', function () {
            window.location.hash = target;
        });

    });


    // $('.animate-down').on('click', function (e) {
    //     e.preventDefault();
    //     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    // });

    /*----------------------------------------------------*/
    /* Transition to About Section
    ------------------------------------------------------ */


    $(window).scroll(function () {
        var hT = $('#collections').offset().top,
            hH = $('#collections').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if ((wS * 20) > (hT + hH - wH)) {
            if (wS < 500) {
                $("#headerBanner").css({
                    "opacity": (40 / (wS)) + .25, "font-size": 25 + wS / 10 + "pt"
                });
                $("#collectionsBanner").css({
                    "opacity": (((wS) / 400) - .45), "font-size": 80 - (Math.abs(wS)) / 10 + "pt"
                });
                $(".collections").animate({opacity: 1}, 5000);
                $('.collections-one').css({'right' : '80px', 'left': ''}).animate({
                    'right': '0px'    
                }, 5000);
                $('.collections-two').css({'bottom' : '80px', 'top': ''}).animate({
                    'bottom': '0px'    
                }, 6000);  
                $('.collections-three').css({'top' : '80px', 'bottom': ''}).animate({
                    'top': '0px'    
                }, 4000);  
                $('.collections-four').css({'left' : '80px', 'right': ''}).animate({
                    'left': '0px'    
                }, 5500);    
            }
        }
    });

    $(".image-hover").hover(
        function () {
          $(this).children('img').addClass('hover-block');
          $(this).children('a').addClass('button-visible');
        }, 
        function () {
          $(this).children('img').removeClass('hover-block');
          $(this).children('a').removeClass('button-visible');
        }
        );

    /*----------------------------------------------------*/
    /* Highlight the current section in the navigation bar
    ------------------------------------------------------*/

    var sections = $("section");
    var navigation_links = $("#nav-wrap a");

    sections.waypoint({

        handler: function (event, direction) {

            var active_section;

            active_section = $(this);
            if (direction === "up") active_section = active_section.prev();

            var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

            navigation_links.parent().removeClass("current");
            active_link.parent().addClass("current");

        },
        offset: '35%'

    });


    /*----------------------------------------------------*/
    /*	Make sure that #header-background-image height is
    /* equal to the browser height.
    ------------------------------------------------------ */

    $('header').css({ 'height': $(window).height() });
    $(window).on('resize', function () {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
    });


    /*----------------------------------------------------*/
    /*	Fade In/Out Primary Navigation
    ------------------------------------------------------*/

    $(window).on('scroll', function () {

        var h = $('header').height();
        var y = $(window).scrollTop();
        var nav = $('#nav-wrap');
        var listitems = $('#nav');

        if ((y > h * .20) && (y < h) && ($(window).outerWidth() > 768)) {
            nav.fadeOut('fast');
        }
        else {
            if (y < h * .20) {
                nav.removeClass('opaque').fadeIn('fast');
                listitems.removeClass('light-letters').fadeIn('fast');
            }
            else {
                nav.addClass('opaque').fadeIn('fast');
                listitems.addClass('light-letters').fadeIn('fast');
            }
        }

    });


    /*----------------------------------------------------*/
    /*	Modal Popup
    ------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

        type: 'inline',
        fixedContentPos: false,
        removalDelay: 200,
        showCloseBtn: false,
        mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    /*----------------------------------------------------*/
    /*	Flexslider
    /*----------------------------------------------------*/
    $('.flexslider').flexslider({
        namespace: "flex-",
        controlsContainer: ".flex-container",
        animation: 'slide',
        controlNav: true,
        directionNav: false,
        smoothHeight: true,
        slideshowSpeed: 7000,
        animationSpeed: 600,
        randomize: false,
    });

    /*----------------------------------------------------*/
    /*	contact form
    ------------------------------------------------------*/

    $('form#contactForm button.submit').click(function () {

        $('#image-loader').fadeIn();

        var contactName = $('#contactForm #contactName').val();
        var contactEmail = $('#contactForm #contactEmail').val();
        var contactSubject = $('#contactForm #contactSubject').val();
        var contactMessage = $('#contactForm #contactMessage').val();

        var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
            '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

        $.ajax({

            type: "POST",
            url: "inc/sendEmail.php",
            data: data,
            success: function (msg) {

                // Message was sent
                if (msg == 'OK') {
                    $('#image-loader').fadeOut();
                    $('#message-warning').hide();
                    $('#contactForm').fadeOut();
                    $('#message-success').fadeIn();
                }
                // There was an error
                else {
                    $('#image-loader').fadeOut();
                    $('#message-warning').html(msg);
                    $('#message-warning').fadeIn();
                }

            }

        });
        return false;
    });


});








