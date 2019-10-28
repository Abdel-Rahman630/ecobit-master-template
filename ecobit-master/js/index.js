// fixed menu
var  mn = $("nav");
    mns = "main-nav-scrolled";
    hdr = $('nav').height();

$(window).scroll(function() {

  if( $(this).scrollTop() > hdr ) {

    mn.addClass(mns),
    mn.css("background-color", '#562fc7'),
    $("nav .button").css({
      "border-color": 'white',
      "color": 'white',
      "background-color": '#562fc7'
    })
    $(".icon-bar").css("background", 'white')
    $(".img1").css("display", "none")
    $(".img2").css("display", "block")
    $("nav .container-fluid .navbar-nav li a").css('color', 'white')
    
  } else {

      mn.removeClass(mns),
      mn.css("background-color", 'transparent'),
      $("nav .button").css({
        "border-color": '#ff4800',
        "color": 'black',
        "background-color": 'white'
      })
      $(".icon-bar").css("background", 'black')
      $(".img1").css("display", "block")
      $(".img2").css("display", "none")
      $("nav .container-fluid .navbar-nav li a").css('color', 'black')
  }

});


// dropdown show
$(".dropdown-toggle1").hover(function () {

    $(".dropdown-menu1").slideToggle(500)

})

$(".dropdown-toggle2").hover(function () {

  $(".dropdown-menu2").slideToggle(500)

})