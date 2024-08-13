document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('di-navhead').classList.add('di-navhead-scroll');
          document.getElementById('di-navhead-mobile').classList.add('di-navhead-scroll');
          
        } else {
          document.getElementById('di-navhead').classList.remove('di-navhead-scroll');
          document.getElementById('di-navhead-mobile').classList.remove('di-navhead-scroll');
        } 
    });
}); 