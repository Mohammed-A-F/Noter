window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
          var navbar = document.getElementById("navbar");
          if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
              navbar.style.boxShadow = "0 0 10px #888888";
          } else {
              navbar.style.boxShadow = "";
          }
      }