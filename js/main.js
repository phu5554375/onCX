$(document).ready(function(){

  // Brand Carousel
  $("#homeBrandCarousel.owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,  
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0:{
        items: 1
      },
      480:{
        items: 3
      },
      769:{
        items: 5
      },
      
  }
    
  });
  $("#homeBrandCarousel2.owl-carousel").owlCarousel({
     
      margin: 5,
      loop: false,
      center: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      freeDrag: true,
      stagePadding: 0,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      navElement: 'div',
      dots: false,
      dotsEach: true,
      dotData: false,
      rewind: true,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        769:{
          items: 1
        }
    }
    });

  $("#ht-product-album-card").carousel({
    interval: false,
  });

  // Number Input restyle
  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });
 

});
$(function() {
  var taeb = $(".taeb-switch");
  taeb.find(".taeb").on("click", function() {
    var $this = $(this);

    if ($this.hasClass("active")) return;

    var direction = $this.attr("taeb-direction");

    taeb.removeClass("left right").addClass(direction);
    taeb.find(".taeb.active").removeClass("active");
    $this.addClass("active");
  });
});
var btn = $('#button');
	$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
	});

	btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '300');
	});
	$(document).ready(function () {
	$('.material-button-toggle').on("click", function () {
		$(this).toggleClass('open');
		$('.option').toggleClass('scale-on');
	});
	});
	const searchBtn = document.querySelector(".search-btn");
	const cancelBtn = document.querySelector(".cancel-btn");
	const searchBox = document.querySelector(".search-box");

	searchBtn.onclick = () => {
	searchBox.classList.add("active");
	}

	cancelBtn.onclick = () => {
	searchBox.classList.remove("active");
	}
  