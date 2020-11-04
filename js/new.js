$(document).ready(function(){


  $('.js-service-section').waypoint(function(diraction){

    if(diraction=="down"){
     
     $('nav').addClass('sticky');
    }
    else{

        $('nav').removeClass('sticky');



    }


  })
      
  

     var mixer=mixitup('.myportfolio');


});



