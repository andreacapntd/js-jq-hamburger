//Hamburger menu: mostrare / nascondere il menu principale
$(".header-right > a").click(function (){
  $(".hamburger-menu").addClass('active');
});


$(".close").click(function(){
  $(".hamburger-menu").removeClass('active');
});
