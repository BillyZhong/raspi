function setHeaderScroll() {
  var height = $(document).outerHeight() - $(window).outerHeight(),
    perc = ($(window).scrollTop()/height*100);
  $('#bar').css({"backgroundPosition": "left "+perc+"%"});
  $('#barNav').css({"backgroundPosition": "left "+perc+"%"});
}