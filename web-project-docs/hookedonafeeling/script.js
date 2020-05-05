const ooga4 = document.getElementById('ooga-row-4');

      let ooga4move = [
        {marginLeft: '100vw'},
        {marginLeft: '-95%'}
      ];

      let oogaTiming = {duration: 33000, iterations: 1};

      let oogamove = ooga4.animate(
        ooga4move,
        oogaTiming
      )

var hasselanimate = document.getElementById("hasselanimate");

      function chorus() {
        hasselanimate.style.backgroundImage = "url('media/hasselhoff-3.gif')";
      }

      setTimeout(chorus,33000);



      // $("#ooga-row-4").bind('oanimationend animationend webkitAnimationEnd', function() {
      //    $("#hasselanimate").css("background-image", "url('media/hasselhoff-3.gif')");
      // });

      $("#im").bind('oanimationstart animationstart webkitAnimationStart', function() {
         $("#hookedonafeeling").css("display", "none");
      });

      $("#that").bind('oanimationstart animationstart webkitAnimationStart', function() {
         $("#imhighonbelieving").css("display", "none");
      });
