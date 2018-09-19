const navBar = document.querySelector('nav')
var elemsimg = document.querySelectorAll('.materialboxed');
window.addEventListener('scroll', () =>{
    if(window.scrollY>0) navBar.classList.add('is-down')
    else navBar.classList.remove('is-down')
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
      height:500,  
    });
});


var elemsimg = M.Materialbox.init(elemsimg);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel')
  
   
    var arrowright = document.querySelector('.arrowright')
    var arrowleft = document.querySelector('.arrowleft')
    var instance = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
    })
    
    arrowright.addEventListener('click', () => {
      var instances = M.Carousel.getInstance(elems[0])
      instances.next()
    })
    arrowleft.addEventListener('click', () => {
      var instances = M.Carousel.getInstance(elems[0])
      instances.prev()
    })

$('.light-box1').hide();
$('#open1').click(function(){
    $('.light-box1').show();
})
$('#open4').click(function(){
    $('.light-box1').show();
})

$('#close1').click(function(){
    $('.light-box1').hide();
})
$('.light-box2').hide();
$('#open2').click(function(){
    $('.light-box2').show();
})
$('#close2').click(function(){
    $('.light-box2').hide();
})
$('.light-box3').hide();
$('#open3').click(function(){
    $('.light-box3').show();
})
$('#close3').click(function(){
    $('.light-box3').hide();
})
  })


  



