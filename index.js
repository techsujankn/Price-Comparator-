$('.btn').click(function(){
  $(this).toggleClass("click");
  $('.sidebar').toggleClass("show");
});
  $('.feat-btn').click(function(){
    $('.sidebar ul .feat-show').toggleClass("show");
    $('.sidebar ul .first').toggleClass("rotate");
  });
  $('.serv-btn').click(function(){
    $('.sidebar ul .serv-show').toggleClass("show1");
    $('.sidebar ul .second').toggleClass("rotate");
  });
  $('.sidebar ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });
  $('.thir-btn').click(function(){
      $('.sidebar ul .thir-show').toggleClass("show2");
      $('.sidebar ul .third').toggleClass("rotate");
  });
