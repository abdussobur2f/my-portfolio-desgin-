$(document).ready(function ($) {





 


  // document ready


  //   $( ".switcher_color" ).on("click", function() { 
  //    if($( ".subtitle" ).hasClass( "setColor" )){

  //         $( ".subtitle" ).removeClass( "setColor" )
  //    }
  //    else{
  //     $( ".subtitle" ).addClass( "setColor" )
  //    }
  //   })


  $('.switcher-box span').click(function () {
    var color = $(this).data('color');


    $('.page-content .hero span#s').css('color', color);
    $('.headin').css('color', color);
    $('.fa, .fa-brands, .fa-classic, .fa-regular, .fa-sharp, .fa-solid, .fab, .far, .fas').css('color', color);
    $('.about_details  .underLiner').css('color', color);
    $('.sidebar-wrapper .sidebar-menu ul li a i').css('color', color);

    $('.experience .content h5').css('color', color);
    $('.education .content h5').css('color', color);

    $('.b,strong').css('background-color', color);
    $('button').css('background-color', color);
    $('.page-content .hero .img_item').css('background-color', color);
    $('.page-content .active').css('background-color', color);



  });




  $('.switcher_color h1').click(function () {
    if ($('.switcher_color').hasClass("show-color")) {
      $('.switcher_color').removeClass("show-color")
    }
    else {
      $('.switcher_color').addClass("show-color")
    }

  });


 



  $('.js-filter').on('click', function () {

    var value = $(this).attr('data-filter');

    if (value == 'all') {
      $('.item').show('1000');;

    } else {

      $('.item').not('.' + value).hide('1000');
      $('.item').filter('.' + value).show('1000');
    }

  });

  $('.filter li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');


  })

  $(".light").on("click", function () {



    if ($('.ball ').hasClass('site')) {
      $('.ball ').addClass('right')

      $('.ball ').add().css("background-color", "black");
      $('.page-content').add().css("background-color", "white");
      $('.page-content').add().css("color", "black");
 
      $('button').add().css("color", "black");

      $('.ball ').removeClass('site')


    }
    else {
      $('.ball ').removeClass('right')
      $('.ball ').add().css("background-color", "white");
      $('.ball ').addClass('site')
      $('.page-content').add().css("background-color", "black");
      $('.page-content').add().css("color", "white");
    
      $('button').add().css("color", "white");

  






    }

  })

 

 

});



