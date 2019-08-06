particlesJS.load('particles-js', 'css/particlesjs-config.json', function() {
    // console.log('callback - particles.js config loaded');
  });


// Handle window resize


window.addEventListener('resize',function(){
  var canvas = document.querySelector('canvas');
  
  canvas.height = this.window.innerHeight;
  canvas.width = this.window.innerWidth;
});

//Handle carousel update
$(document).ready(function() {
  $("#work-carousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});