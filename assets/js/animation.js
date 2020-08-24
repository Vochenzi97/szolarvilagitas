$(document).on("scroll", function() {
  		var pageTop = $(document).scrollTop();
  		var pageBottom = pageTop + $(window).height();
  		var anis = $(".ani");

  		for (var i = 0; i < anis.length; i++) {
    		var ani = anis[i];

    			if ($(ani).position().top < pageBottom) {
      				$(ani).addClass("fade-in");
    			} else {
      			$(ani).removeClass("fade-in");
    			}
  		}
		});
