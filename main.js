
'use strict';

$(document).ready(function(){
 

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});


   

$('.open').click(function(){
    $("#sidebar").toggle();
    
})



var typed = new Typed('#s', {
    strings: ["I'm Front End web developer." , "Convert figma to react js" , "Convert Figma to next js","Convert psd to react or next.js","Convert to html css"], 
    typeSpeed: 60,
    backSpeed:50,
    backDelay:700,
    loop:true,

  });


//  

    
    
  $( ".changeDark" ).on("click", function() { 
    
  if( $( ".page-content" ).hasClass( "dark" ) ) { 
      $( ".page-content" ).removeClass( "dark" ); 

      $( ".changeDark" ).text( "OFF" ); 
      
 
  } else { 
      $( ".page-content" ).addClass( "dark" );
      $( ".changeDark" ).text( "ON" ); 
  } 
 
}); // document ready














  
});