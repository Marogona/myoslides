$(document).ready(function(){

  var owl = $('.owl-carousel');

  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: true
  });

  $('.loop').owlCarousel({
    center: true,
  });

  var myMyo = Myo.create();

  myMyo.on('pose', function(pose_name, edge){
    if(!edge || pose_name === 'rest') return;
    console.log(pose_name);
    myMyo.unlock(3000);
    myMyo.vibrate('short');

    switch(pose_name) {
      case 'wave_out':
        owl.trigger('next.owl.carousel');
        $('.owl-next').animate({background: 'red'});
        break;
      case 'wave_in':
        owl.trigger('prev.owl.carousel');
        break;
    }
  });

  $('.owl-next').on('click', function() {
    $(this).addClass('flash');
  });

});
