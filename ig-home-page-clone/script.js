$(document).ready(function () {
  let i = 1;

  window.setInterval(function () {
    if (i == 5) {
      $(".img-carousel img#img-" + [i]).css("opacity", "0");
      $(".img-carousel img#img-" + [i - 4]).css("opacity", "1");
      i = 1;
    } else {
      $(".img-carousel img#img-" + [i]).css("opacity", "0");
      $(".img-carousel img#img-" + [i + 1]).css("opacity", "1");
      i++;
    }
  }, 3800);

  $('form input').focus(function(){
      $(this).addClass('focused-input')
  })
  
  $('form input').blur(function(){
    $(this).removeClass('focused-input')
})
});
