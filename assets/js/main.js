(function ($) {
  "use strict";
  
    // mobile-menu
    $('.m-menu').on("click", function(){
      $('.offcava-wrapper').addClass('active');
    });
    $('.close').on("click", function(){
      $('.offcava-wrapper').removeClass('active');
    });
    
    // Allfilter
    $('.filter-btns').on("click", function(){
      $('.allFilters, .overlay').addClass('active');
    });
    $('.close, .overlay').on("click", function(){
      $('.allFilters, .overlay').removeClass('active');
    });
    
    // size-btn-event
    $('#size-btn').on("click", function(){
      $('.filter-dropdown-size, .overlay-w, #size-btn').addClass('active');
    });
    $('.overlay-w').on("click", function(){
      $('.filter-dropdown-size, .overlay-w, #size-btn').removeClass('active');
    });

    // color-btn-event
    $('#d-color').on("click", function(){
      $('.filter-dropdown-colors, .overlay-w, #d-color').addClass('active');
    });
    $('.overlay-w').on("click", function(){
      $('.filter-dropdown-colors, .overlay-w, #d-color').removeClass('active');
    });

    // brand-btn-event
    $('#d-brand').on("click", function(){
      $('.filter-dropdown-brand, .overlay-w, #d-brand').addClass('active');
    });
    $('.overlay-w').on("click", function(){
      $('.filter-dropdown-brand, .overlay-w, #d-brand').removeClass('active');
    });








    	// range-slider
	  $( function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 5000,
			values: [ 250, 5000 ],
			slide: function( event, ui ) {
			$( "#min-amount" ).text( "$" + ui.values[ 0 ] );
			$( "#max-amount" ).text("$" + ui.values[ 1 ] );
			},
		});
		$( "#min-amount" ).text( "$" + $( "#slider-range" ).slider( "values", 0 ));
			$( "#max-amount" ).text( "$"+ $( "#slider-range" ).slider( "values", 1 ));
		} );

    // range-2
	  $( function() {
		$( "#slider-rangeTwo" ).slider({
			range: true,
			min: 0,
			max: 5000,
			values: [ 250, 5000 ],
			slide: function( event, ui ) {
			$( "#min-amountTwo" ).text( "$" + ui.values[ 0 ] );
			$( "#max-amountTwo" ).text("$" + ui.values[ 1 ] );
			},
		});
		$( "#min-amountTwo" ).text( "$" + $( "#slider-rangeTwo" ).slider( "values", 0 ));
			$( "#max-amountTwo" ).text( "$"+ $( "#slider-rangeTwo" ).slider( "values", 1 ));
		} );

    // range-3
	  $( function() {
		$( "#slider-rangeThree" ).slider({
			range: true,
			min: 0,
			max: 5000,
			values: [ 250, 5000 ],
			slide: function( event, ui ) {
			$( "#min-amountThree" ).text( "$" + ui.values[ 0 ] );
			$( "#max-amountThree" ).text("$" + ui.values[ 1 ] );
			},
		});
		$( "#min-amountThree" ).text( "$" + $( "#slider-rangeThree" ).slider( "values", 0 ));
			$( "#max-amountThree" ).text( "$"+ $( "#slider-rangeThree" ).slider( "values", 1 ));
		} );



    // product-qty
    $('input[type="number"]').niceNumber({
      onIncrement: function ($currentInput, amount, settings) {
        if (amount >= 100) {
          $currentInput.classList.add('more-than-100');
        } else {
          $currentInput.classList.remove('more-than-100');
        }
      },
    });
  
    // nice-select
    $('select').niceSelect(); 
  
  
  
      // sliders--
      const swiperOne = new Swiper('.hero-slider', {
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 1000,
          autoplay: {
            delay: 5000,
          },
          effect: 'fade',
          pagination: {
              el: '.hero-slide-pagination',
              type: 'bullets',
              clickable: true
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 0
            }
          }
      });
  
      // sliders--
      const swiperTwo = new Swiper('.l-offers-slider', {
          slidesPerView: 2,
          spaceBetween: 0,
          pagination: {
              el: '.l-offers-pagination',
              type: 'bullets',
              clickable: true
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            480: {
              slidesPerView: 15,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0
            }
          }
      });
  
      // sliders--
      const swiperThree = new Swiper('.brands-slide', {
          slidesPerView: 6,
          spaceBetween: 0,
          navigation: {
              nextEl: '.brands-next',
              prevEl: '.brands-prev',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 0
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 0
            },
          }
      });
  
      // sliders--
      const swiperFour = new Swiper('.team-slider', {
          slidesPerView: 3,
          spaceBetween: 0,
          pagination: {
            el: '.team-pagination',
            type: 'bullets',
            clickable: true
          },
          navigation: {
            nextEl: '.team-next',
            prevEl: '.team-prev',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 0
            }
          }
      });
  
      //sliders--
      const swiperFive = new Swiper('.core-slide', {
          slidesPerView: 2,
          spaceBetween: 0,
          direction: 'vertical',
  
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
              direction: 'horizontal',
              pagination: {
                el: '.core-pagination',
                type: 'bullets',
                clickable: true
              },
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 0,
              direction: 'horizontal',
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0
            }
          }
      });
  
      // contact-gellery-slider-marque
      const swiperSix = new Swiper('.contact-gellery-slide', {
        spaceBetween: 24,
        centeredSlides: true,
        speed: 6000,
        autoplay: {
          delay: 1,
          reverseDirection: true
        },
        loop: true,
        loopedSlides: 4,
        slidesPerView: 'auto',
        allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
          320: {
            spaceBetween: 12,
          },
          720: {
            spaceBetween: 24
          }
        }
      });
  
        // sliders--
        const swiperSeven = new Swiper('.login-slide', {
          slidesPerView: 1,
          spaceBetween: 0,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          autoplay: {
            delay: 5000,
          },
        });
  
        // sliders--
      const swiperEight = new Swiper('.product-details-slider-active', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        navigation: {
          nextEl: '.product-details-next',
          prevEl: '.product-details-prev',
        },
        autoplay: {
          delay: 5000,
        },
        // effect: 'fade',
        pagination: {
            el: '.product-details-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
    });
  
  
    // sliders--
    const swiperNine = new Swiper('.recommended-slider-active', {
      slidesPerView: 4,
      spaceBetween: 0,
      speed: 1000,
      navigation: {
        nextEl: '.recommend-slider-next',
        prevEl: '.recommend-slider-prev',
      },
      autoplay: {
        delay: 5000,
      },
      // effect: 'fade',
      pagination: {
          el: '.recommend-slider-pagination',
          type: 'bullets',
          clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 0
        }
      }
  });
  
          // sliders--
      // const swiper = new Swiper('.namejoone', {
      //     slidesPerView: 1,
      //     spaceBetween: 10,
      //     breakpoints: {
      //       320: {
      //         slidesPerView: 2,
      //         spaceBetween: 20
      //       },
      //       480: {
      //         slidesPerView: 3,
      //         spaceBetween: 30
      //       },
      //       640: {
      //         slidesPerView: 4,
      //         spaceBetween: 40
      //       }
      //     }
      // });
  
        // product-variant
        $('.product-variant').click(function(){
          $('.product-variant').removeClass('selected');
          $(this).addClass('selected');
        })
  
        // save-button
        $('.save-button').click(function(e){
          e.preventDefault();
          $(this).toggleClass('active');
          $(this).find('i').toggleClass('fal fa');
        })
  
  
  
  
  
  })(jQuery);
  