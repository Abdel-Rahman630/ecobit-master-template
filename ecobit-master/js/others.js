// fixed menu
var  mn = $("nav");
    mns = "main-nav-scrolled";
    hdr = $('nav').height();

$(window).scroll(function() {

  if( $(this).scrollTop() > hdr ) {

    mn.addClass(mns),
    mn.css("background-color", '#562fc7')
    
  } else {

      mn.removeClass(mns),
      mn.css("background-color", 'transparent')
  }

});


// dropdown show
$(".dropdown-toggle1").hover(function () {

    $(".dropdown-menu1").slideToggle(500)

})

$(".dropdown-toggle2").hover(function () {

  $(".dropdown-menu2").slideToggle(500)

})

// Accodrdion
var allAsks = $('.accordion .asks > p').hide();
  
$('.accordion .asks > h3').click(function() {

  allAsks.slideUp();
  $(".accordion .asks h3 > svg").toggleClass("fa-plus fa-minus")
  $(this).next().slideDown();

});

