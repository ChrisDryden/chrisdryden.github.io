jQuery(document).ready(function($){
    var isLateralNavAnimating = false;
    var isDisabled = 0;
    
    function toggleMobileScrolling() {
      if (!isDisabled) {
          $('body').bind('touchmove', function(e){e.preventDefault()})
          isDisabled++;
      }else{
          $('body').unbind('touchmove')
          isDisabled--;
      }
    }

    setTimeout(function() {
      $("body").addClass("loaded")
    }, 250);

    setTimeout(function() {
      $("#main").addClass("loaded")     
    }, 700);
	
    //open/close lateral navigation
    $('.cd-nav-trigger').on('click', function(event){
      event.preventDefault();
      //stop if nav animation is running 
      if( !isLateralNavAnimating ) {
        if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
        
        $('body').toggleClass('navigation-is-open');
              $('body').toggleClass('disable-scrolling');
              toggleMobileScrolling();
        $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          //animation is over
          isLateralNavAnimating = false;
        });
      }
    });

    var config = {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#90D4C5"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#90D4C5"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#90D4C5",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }

    particlesJS("particles", config);
    
    $("#title-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#uoft").offset().top
        }, 1000);
    });

    $("#uoft-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#mongodb").offset().top
        }, 1000);
    });

    
    $("#mongodb-arrow").click(function() {
      $('html, body').animate({
          scrollTop: $("#teaching-assistant").offset().top
      }, 1000);
    });

    $("#ta-arrow").click(function() {
      $('html, body').animate({
          scrollTop: $("#loblaw-digital").offset().top
      }, 1000);
    });

    $("#ld-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#td").offset().top
        }, 1000);
    });

    $("#td-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $("#footer-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#title").offset().top
        }, 1000);
    });

    $("#title-bar").click(function() {
        $('html, body').animate({
            scrollTop: $("#title").offset().top
        }, 1000);
    });

});

 