particlesJS.load('particles-js', 'css/particlesjs-config.json', function() {
    // console.log('callback - particles.js config loaded');
  });


// Handle window resize


window.addEventListener('resize',function(){
  var canvas = document.querySelector('canvas');
  
  canvas.height = this.window.innerHeight;
  canvas.width = this.window.innerWidth;
});