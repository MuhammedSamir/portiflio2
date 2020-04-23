$(document).ready(function(){
    $(window).scroll(function(){
    if($(document).scrollTop() > 100){
        $('.navbar').addClass('scrolled');
    }
    else{
        $('.navbar').removeClass('scrolled');
    }
});
 //iso top
 let projects =$('.projects').isotope({
    itemSelector: '.item'
 });
 $('ul.filters').on('click', 'li', function(){
    let fiterValue = $(this).attr('data-filter');
    projects.isotope({filter: fiterValue});
    return false;
 });
//add class Active ON click
$('li').click(function() { 
    $('li').removeClass('active'); 
    $(this).addClass('active'); 
 });
 //counter
 $('.num').counterUp({delay:10,time:500});
 //owelcursal
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
 
});

