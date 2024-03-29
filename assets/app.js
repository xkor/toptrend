$(document).ready(function () {/* header-fixed */
    var headerOffset = $('.header-site').offset().top;
    var headerHeight = $('.header-site').height();/*
		function() {
			var e = this.state.animEl,
				t = window.scrollY,
				n = window.innerHeight;
			if (t < 2 * n)
				for (var a = 1; a <= I; a++) {
					var s = e.querySelector(".i" + a),
						c = 1.25 * n,
						r = n / 2 + Math.floor(c / I) * a - Math.floor(c / I),
						i = n / 2 + Math.floor(c / I) * a;
					a < 2 ? t < i ? s.classList.add("ds") : s.classList.remove("ds") : a < I ? t >= r && t < i ? s.classList.add("ds") : s.classList.remove("ds") : a === I && (t >= r ? s.classList.add("ds") : s.classList.remove("ds"))
				}
			t > 3 * n ? this.setState({
				sticky: !0
			}) : this.setState({
				sticky: !1
			})
		}
	*/
    var wrapAnimation = $('.js-animation-wrap');//const I = $('.animation__item img').length;
    var I = $('.animation__label span').length;
    wrapAnimation.css('height', '' + wrapAnimation.height() * I / 10);

    function showPdpBar(scrolled) {
        var pdpBar = $('.js-pdp-bar');
        if (pdpBar.length > 0) {
            var pdp = $('.js-pdp');
            pdpBar.css('top', headerHeight + 'px');
            var pdpBarEnd = pdp.offset().top + pdp.height();
            if (scrolled > pdpBarEnd) {
                pdpBar.fadeIn(500)
            } else {
                pdpBar.fadeOut(500)
            }
        }
    }

    function showImages() {
        var scrolledNow = window.scrollY;// const height = window.innerHeight;
        var height = wrapAnimation.height() + wrapAnimation.offset().top;
        var clientTop = $('.animation__item').offset().top;// if ((scrolledNow < clientTop*2) && (scrolledNow > clientTop/2) )
        if (scrolledNow < wrapAnimation.offset().top + wrapAnimation.height() && scrolledNow > wrapAnimation.offset().top) for (var a = 1; a <= I; a++) {// var s = document.querySelector(".i" + a),
            var label = document.querySelector('.t' + a), c = 0.85 * height,// r =  height / 2 + Math.floor(c / I) * a - Math.floor(c / I),
                r = height / 36 + Math.floor(c / I) * a - Math.floor(c / I),// i =  height / 2 + Math.floor(c / I) * a;
                i = height / 36 + Math.floor(c / I) * a;
            if (a < 2) {
                if (scrolledNow < i) {// s.classList.add("ds");
                    label.classList.add('ds')
                } else {// s.classList.remove("ds");
                    label.classList.remove('ds')
                }
            } else {
                if (a < I) {
                    if (scrolledNow >= r && scrolledNow < i) {// s.classList.add("ds");
                        label.classList.add('ds')
                    } else {// s.classList.remove("ds");
                        label.classList.remove('ds')
                    }
                } else {
                    if (a === I && scrolledNow >= r) {// s.classList.add("ds");
                        label.classList.add('ds')
                    } else {// s.classList.remove("ds");
                        label.classList.remove('ds')
                    }
                }
            }// a < 2 ? scrolledNow < i ? s.classList.add("ds") : s.classList.remove("ds") : a < I ? scrolledNow >= r && scrolledNow < i ? s.classList.add("ds") : s.classList.remove("ds") : a === I && (scrolledNow >= r ? s.classList.add("ds") : s.classList.remove("ds"))
        }
    }

    $(window).scroll(function (e) {
        headerHeight = $('.header-site').height();
        if (wrapAnimation.length > 0) {
            showImages()
        }
        var mobileSearchInput = $('.mobile__search');
        var scrolled = $(this).scrollTop();
        var scrolledBottom = $(this).scrollTop() + $(this).height();
        var scrolledCenter = $(this).scrollTop() + $(this).height() / 2;
        showPdpBar(scrolled);
        if (scrolled > headerOffset) {
            if (!$('.header-site').hasClass('header--transparent')) {
                $('.wrapper').css('padding-top', headerHeight + 'px')
            }
            $('.header-site').addClass('header--fixed');
            mobileSearchInput.addClass('fixed')
        } else if (scrolled <= headerOffset) {
            if (!$('.header-site').hasClass('header--transparent')) {
                $('.wrapper').css('padding-top', '0px')
            }
            $('.header-site').removeClass('header--fixed');
            mobileSearchInput.removeClass('fixed')
        }
    });/* end header-fixed *//* mobile-menu*/
    $('.js-toggle-nav').click(function () {
        $('body').toggleClass('overflow__hidden');
        $('.wrapper').toggleClass('overflow__layout');
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('open')
    });
    $('.mobile-menu__close').on('click', function () {
        $('.mobile-menu').toggleClass('open');
        $('body').toggleClass('overflow__hidden');
        $('.wrapper').toggleClass('overflow__layout')
    });
    $(document).mouseup(function (e) {// событие клика по веб-документу
        var div = $('.mobile-menu.open');// тут указываем ID элемента
        if (div.length) {
            if (!div.is(e.target)// если клик был не по нашему блоку
                && div.has(e.target).length === 0) {// и не по его дочерним элементам
                $('.mobile-menu').removeClass('open');
                $('body').removeClass('overflow__hidden');
                $('.wrapper').removeClass('overflow__layout')
            }
        }
    });/* end-mobile-menu */// function moveText(isActive) {
// 	const time = 600,
// 		textLength = 140,
// 		delay = 500,
// 		$text = $('.discover__slider').find('.slick-current .discover__text textPath');
// 	let step = 0,
// 		count = isActive ? 0 : textLength;
// 	step = time / textLength;
// 	setTimeout(function () {
// 		const interval = setInterval(function () {
// 			if (isActive && count < textLength) {
// 				count++;
// 			} else if (!isActive && count > 0) {
// 				count--;
// 			} else {
// 				clearInterval(interval);
// 			}
// 			$text.attr('startOffset', count);
// 		}, step);
// 	}, delay);
// }
//
// function animateDiscover() {
// 	let tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: '.discover__slider',
// 			// start: 'center 90%',
// 			// end: '+=60%',
// 			start: 'center bottom',
// 			end: 'bottom 20%',
// 			toggleClass: 'show',
// 			// markers: true,
// 			onToggle: self => {
// 				moveText(self.isActive);
// 			}
// 		}
// 	});
// }
//
// animateDiscover();
    /* sliders */
    $('.js-discover-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: '.discover__slider-arrow',
        responsive: [{breakpoint: 1025, settings: {arrows: false, dots: true}}]
    });// 	.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
// })
// .on('afterChange', function (event, slick, currentSlide) {
// $('.discover__slider .discover__text textPath').attr('startOffset', 0);
// moveText(true);
// });
    $('.js-doctors-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: '.doctors__slider-arrow',
        responsive: [{breakpoint: 992, settings: {slidesToShow: 2}}, {
            breakpoint: 769,
            settings: {arrows: false, slidesToShow: 2}
        }, {breakpoint: 575, settings: {slidesToShow: 1, arrows: false}}]
    });
    $('.js-studies-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        appendArrows: '.studies__slider-arrow',
        responsive: [{breakpoint: 992, settings: {slidesToShow: 2}}, {
            breakpoint: 769,
            settings: {arrows: false, slidesToShow: 2}
        }, {breakpoint: 575, settings: {slidesToShow: 1, arrows: false}}]
    });
    $('.js-trending-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: '.trending__slider-arrow',
        responsive: [{breakpoint: 1280, settings: {slidesToShow: 3}}, {
            breakpoint: 992,
            settings: {slidesToShow: 2}
        }, {breakpoint: 769, settings: {slidesToShow: 2, arrows: false}}, {
            breakpoint: 575,
            settings: {slidesToShow: 1, arrows: false}
        }]
    });
    $('.js-products-feature-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: '.products-feature__slider-arrow',
        responsive: [{breakpoint: 1280, settings: {slidesToShow: 3}}, {
            breakpoint: 992,
            settings: {slidesToShow: 2}
        }, {breakpoint: 769, settings: {slidesToShow: 2, arrows: false}}, {
            breakpoint: 575,
            settings: {slidesToShow: 1, slidesToScroll: 1, arrows: false}
        }]
    });
    if ($('#CartDrawer .products-feature__item').length > 2) {
        $('.js-ajaxcart-products-slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            appendArrows: '.js-ajaxcart-products-slider-arrow',
            responsive: [{breakpoint: 370, settings: {slidesToShow: 1, slidesToScroll: 1}}]
        })
    }
    $('.js-articles-feature-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: '.articles-feature__slider-arrow',
        responsive: [{breakpoint: 1500, settings: {slidesToShow: 3}}, {
            breakpoint: 992,
            settings: {slidesToShow: 2}
        }, {breakpoint: 769, settings: {slidesToShow: 2, arrows: false}}, {
            breakpoint: 575,
            settings: {slidesToShow: 1, slidesToScroll: 1, arrows: false}
        }]
    });
    $('.js-articles-feature-slider-author').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: '.articles-feature__slider-arrows',
        responsive: [{breakpoint: 1500, settings: {slidesToShow: 3}}, {
            breakpoint: 992,
            settings: {slidesToShow: 2}
        }, {breakpoint: 769, settings: {slidesToShow: 2, arrows: false}}, {
            breakpoint: 575,
            settings: {slidesToShow: 1, slidesToScroll: 1, arrows: false}
        }]
    });// function swiperBlur( dur ) {
// 	var blur = 15;
// 	$( { state: 0 } ).animate( { state: blur }, {
// 		duration: ( dur / 2 ),
// 		step: function( now ) {
// 			$( '#blur feGaussianBlur' ).attr( "stdDeviation", now+", 0" );
// 		},
// 		done: function() {
// 			$( { state: blur } ).animate( { state: 0 }, {
// 				duration: ( dur / 2 ),
// 				step: function( now ) {
// 					$( '#blur feGaussianBlur' ).attr( "stdDeviation", now+", 0" );
// 				}
// 			});
// 		}
// 	});
// }
    if ($('.vitamins__item').length) {
        $('.js-vitamins-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            speed: 500,// cssEase: 'cubic-bezier(.1,.3,.9,.7)',
            appendArrows: '.vitamins__slider-arrow',
            responsive: [{breakpoint: 1024, settings: {arrows: false, dots: true}}]
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {// swiperBlur( slick.options.speed );
            var bgc = slick.$slides.eq(nextSlide).data('bg');
            $('.vitamins').css('background-color', bgc)
        }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
            var bgc = slick.$slides.eq(currentSlide).data('bg');
            $('.vitamins').css('background-color', bgc)
        })
    }
    if ($('.resilient__item-wrap').length > 1) {
        $('.js-resilient-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            appendArrows: '.resilient__slider-arrow',
            responsive: [{breakpoint: 768, settings: {arrows: false, dots: true}}]
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {// swiperBlur( slick.options.speed );
        })
    }
    if ($('.testimonials__item').length) {
        $('.js-testimonials-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            appendDots: '.testimonials__slider-dots',
            appendArrows: '.testimonials__slider-arrow',
            responsive: [{breakpoint: 768, settings: {arrows: false, dots: true}}]
        })
    }
    var doctorSlideCurrent = 0;
    $('.js-doctors-slider .js-el-plus').on('click', function (e) {
        doctorSlideCurrent = $(this).closest('.slick-slide').data('slick-index');
        $('.js-modal-doctors-slider').slick('slickGoTo', parseInt(doctorSlideCurrent))
    });
    if ($('.js-modal-doctors-slider .grid__item').length) {
        $('.js-modal-doctors-slider').slick({
            infinite: true,
            arrows: true,
            dots: false,
            appendArrows: '.doctors-modal__slider-arrow',
            appendDots: '.doctors-modal__slider-dots',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{breakpoint: 576, settings: {slidesToShow: 1, slidesToScroll: 1, arrows: false, dots: true}}]
        })
    }
    $('.js-nutritional-plans-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: '.nutritional-plans__arrow',
        responsive: [{breakpoint: 1500, settings: {slidesToShow: 3}}, {
            breakpoint: 992,
            settings: {slidesToShow: 2}
        }, {breakpoint: 769, settings: {slidesToShow: 2, arrows: false}}, {
            breakpoint: 575,
            settings: {slidesToShow: 1, slidesToScroll: 1, arrows: false}
        }]
    });
    $('.js-articles-resources-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: '.nutritional-plans__arrows',
        responsive: [{breakpoint: 1500, settings: {slidesToShow: 3}}, {
            breakpoint: 992,
            settings: {slidesToShow: 2}
        }, {breakpoint: 769, settings: {slidesToShow: 2, arrows: false}}, {
            breakpoint: 575,
            settings: {slidesToShow: 1, slidesToScroll: 1, arrows: false}
        }]
    });
    $('.js-nutritionist-solution-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: '.nutritionist-solution__arrow',
        responsive: [{breakpoint: 1400, settings: {slidesToShow: 3}}, {
            breakpoint: 992,
            settings: {slidesToShow: 2}
        }, {breakpoint: 575, settings: {slidesToShow: 1, slidesToScroll: 1, arrows: false}}]
    });
    $slickGreen = false;

    function greenSlider() {
        if ($(window).width() < 769) {
            if (!$slickGreen) {
                if ($('.category-filter__item').length) {
                    $('.js-category-filter__slider').slick({
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        responsive: [{breakpoint: 9999, settings: 'unslick'}, {
                            breakpoint: 769,
                            settings: {slidesToShow: 4, slidesToScroll: 1}
                        }, {breakpoint: 575, settings: {slidesToShow: 2, slidesToScroll: 1}}]
                    })
                }
                $slickGreen = true
            }
        } else if ($(window).width() > 768) {
            if ($slickGreen) {
                if ($('.category-filter__item').length) {
                    $('.js-category-filter__slider').slick('unslick')
                }
                $slickGreen = false
            }
        }
    };$(window).on('resize', function () {
        greenSlider();
        width = $(window).width();
        if (width >= 1280) {
            zoomImage()
        }
    });
    greenSlider();
    $('.modal').on('shown.bs.modal', function (e) {
        $('.js-modal-doctors-slider').slick('setPosition');
        $('.doctors-modal__slider-wrap').addClass('open');
        $('.js-trending-slider-fix').slick('refresh');
        $('.js-modal-doctors-slider').slick('setPosition')
    });
    var trendingSlideCurrent = 0;
    $('.js-trending-slider .js-el-plus').on('click', function (e) {
        trendingSlideCurrent = $(this).closest('.slick-slide').data('slick-index');
        $('.js-trending-slider-fix').slick('slickGoTo', parseInt(trendingSlideCurrent));
        $('.trending-slider-fix__overlay').addClass('open');
        $('body').addClass('overflow__hidden');
        $('.wrapper').addClass('overflow__layout');
        $('.trending-slider-fix__wrap').addClass('open');
        $('.js-trending-slider-fix').slick('refresh');
        $('.js-trending-slider-fix').slick('setPosition')
    });
    $('.js-trending-slider-fix .close').on('click', function (e) {
        $('.trending-slider-fix__overlay').removeClass('open');
        $('body').removeClass('overflow__hidden');
        $('.wrapper').removeClass('overflow__layout')
    });
    $(document).mouseup(function (e) {// событие клика по веб-документу
        var div = $('.trending-slider-fix__wrap.open');// тут указываем ID элемента
        if (div.length) {
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $('.trending-slider-fix__overlay').removeClass('open');
                $('body').removeClass('overflow__hidden');
                $('.wrapper').removeClass('overflow__layout')
            }
        }
    });
    $('.js-trending-slider-fix').slick({
        infinite: true,
        dots: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: '.trending-slider-fix__arrow',
        responsive: [{breakpoint: 1024, settings: {arrows: false}}, {
            breakpoint: 576,
            settings: {arrows: false, dots: true}
        }]
    });// 	.on( 'beforeChange', function( event, slick, currentSlide, nextSlide ) {
// 	slick.$slider.find( '.slick-cloned' ).css(
// 		{
// 			'opacity': 0.8,
// 			'transform': 'scale(0.8)'
//
// 		});
//
// }).on( 'afterChange', function( event, slick ) {
// 	slick.$slider.find( '.slick-cloned' ).css(
// 		{
// 			'opacity': 0.8,
// 			'transform': 'scale(0.8)'
// 		});
// });
    if ($('.pdp__images .pdp__image').length > 1) {
        $('.js-slider-pdp').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            appendArrows: '.pdp__slider-arrow',
            responsive: [{breakpoint: 768, settings: {arrows: false, dots: true}}]
        })
    }/* - - - - - - - - - - - - - -       pdp-modal__slider       - - - - - - - - - - - - - - - */
    function setPdpModalSliderSmall(count) {
        var nextSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var countShow = 5;
        $('.js-main-reviews-slider-small .slick-slide').css({'z-index': ''});
        if (count <= 5) {
            for (var _i = 0; _i < countShow; _i++) {
                $('.js-main-reviews-slider-small .slick-slide[data-slick-index="' + _i + '"]').css({'z-index': countShow - _i})
            }
        } else {
            for (var _i2 = 0; _i2 < countShow; _i2++) {
                var currentIndex = _i2 + nextSlide;
                $('.js-main-reviews-slider-small .slick-slide[data-slick-index="' + currentIndex + '"]').css({'z-index': countShow - _i2})
            }
        }
    }

    $('.js-pdp-modal-slider-small').on('init', function (event, slick) {// const count = slick.slideCount;
        var countShow = 5;
        for (var _i3 = 0; _i3 < countShow; _i3++) {
            $('.js-pdp-modal-slider-small .slick-slide[data-slick-index="' + _i3 + '"]').css({'z-index': countShow - _i3})
        }
    });
    $('.js-pdp-modal-slider-big').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 500,
        asNavFor: '.js-pdp-modal-slider-small',
        appendArrows: '.pdp-modal__slider-big-arrow',
        appendDots: '.pdp-modal__slider-big-dots',
        responsive: [{breakpoint: 992, settings: {arrows: false}}]
    }).on('afterChange', function (event, slick) {
    });
    $('.js-pdp-modal-slider-small').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 500,
        swipe: false,
        focusOnSelect: true,
        asNavFor: '.js-pdp-modal-slider-big'
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var count = slick.slideCount;
        setPdpModalSliderSmall(count, nextSlide);
        var countShow = 5;
        if (currentSlide === count - 1 && nextSlide === 0) {
            setTimeout(function () {
                slick.$slider.find('.slick-slide[data-slick-index="' + count + '"]').addClass('slick-current')
            }, 10);
            for (var _i4 = 0; _i4 < countShow; _i4++) {
                var currentIndex = count + _i4;
                slick.$slider.find('.slick-slide[data-slick-index="' + currentIndex + '"]').css({
                    'z-index': countShow - _i4,
                    'opacity': 1
                })
            }
        }
        if (currentSlide === 0 && nextSlide === count - 1) {
            setTimeout(function () {
                slick.$slider.find('.slick-slide[data-slick-index="-1"]').addClass('slick-current')
            }, 10);
            for (var _i5 = 0; _i5 < countShow; _i5++) {
                var _currentIndex = _i5 - 1;
                slick.$slider.find('.slick-slide[data-slick-index="' + _currentIndex + '"]').css({
                    'z-index': countShow - _i5,
                    'opacity': 1
                })
            }
        }
    }).on('afterChange', function (event, slick) {
        slick.$slider.find('.slick-slide').css({'opacity': ''});// slick.$slider.find( '.slick-cloned' ).removeClass( 'slick-current' );
    });
    var pdpSlideCurrent = 0;
    $('.js-slider-pdp .js-pdp-modal').on('click', function (e) {
        pdpSlideCurrent = $(this).closest('.slick-slide').data('slick-index');
        $('.js-pdp-modal-slider-big').slick('slickGoTo', parseInt(pdpSlideCurrent));
        $('.js-pdp-modal-slider-big').slick('refresh');
        $('.js-pdp-modal-slider-big').slick('setPosition');
        $('.js-pdp-modal-slider-small').slick('refresh');
        $('.js-pdp-modal-slider-small').slick('setPosition')
    });/* end-sliders */
    function accordeonFooter() {
        var acc = document.getElementsByClassName('acc-head');
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function () {
                this.classList.toggle('active');
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px'
                }
            })
        }
    }

    function checkPosition() {
        if (window.matchMedia('(max-width: 767px)').matches) {
            accordeonFooter()
        }
    }

    checkPosition();/* - - - - - - - - - - - - - -       FAQ       - - - - - - - - - - - - - - - */
    if ($('#Faq').length) {
        faqAccordion()
    }
    $(document).on('click', '.js-sharing', function (e) {
        $(this).find('.sharing__list').addClass('active')
    });
    $(document).mouseup(function (e) {// событие клика по веб-документу
        var div = $('.js-sharing');// тут указываем ID элемента
        if (div.length) {
            if (!div.is(e.target)// если клик был не по нашему блоку
                && div.has(e.target).length === 0) {// и не по его дочерним элементам
                $('.sharing__list').removeClass('active')
            }
        }
    });

    function faqAccordion() {
        var acc = document.getElementsByClassName('accordion');
        var i;
        acc[0].classList.add('active');
        var panel0 = acc[0].nextElementSibling;
        if (panel0.style.maxHeight) {
            panel0.style.maxHeight = null
        } else {// panel0.style.maxHeight = panel0.scrollHeight + "px";
            panel0.style.maxHeight = '100%'
        }
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function () {
                this.classList.toggle('active');
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px'
                }
            })
        }
    }

    function checkQtHidden() {
        if ($('.button-more-js').length) {
            if ($('.js-faq-wrap .hidden').length) {
                $('.button-more-js').removeClass('hide')
            } else {
                $('.button-more-js').addClass('hide')
            }
        }
    }

    var question = $('.js-faq-wrap .accordion');
    var panel = $('.js-faq-wrap .panel');
    for (var _i6 = 0; _i6 < question.length; _i6++) {
        if (_i6 > 5) {
            question.eq(_i6).addClass('hidden');
            panel.eq(_i6).addClass('hidden')
        }
    }
    checkQtHidden();
    $(document).on('click', '.button-more-js', function (e) {
        e.preventDefault();
        var accordionHidden = $('.js-faq-wrap .accordion.hidden');
        var panelHidden = $('.js-faq-wrap .panel.hidden');
        for (var _i7 = 0; _i7 < accordionHidden.length; _i7++) {
            if (_i7 <= 3) {
                accordionHidden.removeClass('hidden');
                panelHidden.removeClass('hidden')
            } else {
                break
            }
        }
        checkQtHidden()
    });/* - - - - - - - - - - - - - -       Ingredients       - - - - - - - - - - - - - - - */
    if ($('.main-ingredients').length) {
        ingredientsAccordion()
    }

    function ingredientsAccordion() {
        var acc = document.querySelectorAll('.accordion-ingredients');
        var i;
        acc[0].classList.add('active');
        var panel0 = acc[0].nextElementSibling;
        if (panel0.style.maxHeight) {
            panel0.style.maxHeight = null
        } else {// panel0.style.maxHeight = panel0.scrollHeight + "px";
            panel0.style.maxHeight = '100%'
        }
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function () {
                this.classList.toggle('active');
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px'
                }
            })
        }
    }

    function checkQtHiddenIngredients() {
        if ($('.button-ingredients-more-js').length) {
            if ($('.js-ingredients-wrap .hidden').length) {
                $('.button-ingredients-more-js').removeClass('hide')
            } else {
                $('.button-ingredients-more-js').addClass('hide')
            }
        }
    }

    var questionIngredients = $('.js-ingredients-wrap .accordion-ingredients');
    for (var _i8 = 0; _i8 < questionIngredients.length; _i8++) {
        if (_i8 > 5) {
            questionIngredients.eq(_i8).addClass('hidden')
        }
    }
    checkQtHiddenIngredients();
    $(document).on('click', '.button-ingredients-more-js', function (e) {
        e.preventDefault();
        var accordionHidden = $('.js-ingredients-wrap .accordion-ingredients.hidden');
        var panelHidden = $('.js-ingredients-wrap .panel.hidden');
        for (var _i9 = 0; _i9 < accordionHidden.length; _i9++) {
            if (_i9 <= 3) {
                accordionHidden.removeClass('hidden');
                panelHidden.removeClass('hidden')
            } else {
                break
            }
        }
        checkQtHiddenIngredients()
    });
    $(document).on('click', '.js-ingredients-filter:not(.active)', function (e) {
        e.preventDefault();
        var $this = $(this);
        var filterName = $this.data('filter');
        $('.js-ingredients-filter').removeClass('active');
        $('.js-ingredients-search-wrap').removeClass('active');
        $('.js-ingredients-toogle-search').removeClass('active');
        if (filterName == 'all') {
            $('.js-ingredients-wrap .accordion-ingredients').show();
            $('.js-ingredients-wrap .panel').css('height', 'auto')
        } else {
            $('.js-ingredients-wrap .accordion-ingredients:not([data-ingredients="' + filterName + '"])').hide();
            $('.js-ingredients-wrap .accordion-ingredients[data-ingredients="' + filterName + '"]').show();
            $('.js-ingredients-wrap .panel:not([data-ingredients="' + filterName + '"])').css('height', 0);
            $('.js-ingredients-wrap .panel[data-ingredients="' + filterName + '"]').css('height', 'auto');// $('.js-ingredients-wrap .accordion-ingredients:not([data-ingredients="'+ filterName +'"])').removeClass('active');
        }
        questionIngredients = $('.js-ingredients-wrap .accordion-ingredients:visible');
        for (var _i10 = 0; _i10 < questionIngredients.length; _i10++) {
            if (_i10 > 5) {
                questionIngredients.eq(_i10).addClass('hidden')
            }
        }
        checkQtHiddenIngredients();
        $(this).addClass('active')
    });
    $(document).on('click', '.js-ingredients-toogle-search', function (e) {
        e.preventDefault();
        $('.js-ingredients-filter').removeClass('active');
        $('.js-ingredients-filter[data-filter="all"]').addClass('active');
        $('.js-ingredients-wrap .accordion-ingredients').show();
        $('.js-ingredients-search-wrap').toggleClass('active');
        $('.js-ingredients-toogle-search').toggleClass('active')
    });/* - - - - - - - - - - - - - -       video play       - - - - - - - - - - - - - - - */
    $(document).on('click', '.js-video', function () {
        $(this).fadeOut();
        $(this).parent().find('video')[0].play()
    });/* - - - - - - - -- - - - - - -       8 Wellness     - - - - - -- - - - - - - - - - - -*/
    $(document).on('click', '.js-wellness-toggle', function (e) {
        e.preventDefault();
        $(this).closest('.wellness__item').toggleClass('active')
    });
    $(document).on('click', 'body', function (e) {// e.preventDefault();
        if ($(e.target).find('.wellness__item').length) {
            $('.wellness__item').removeClass('active')
        }
    });/* - - - - - - - - - - - - - -       input search       - - - - - - - - - - - - - - - */
    $('.js-input-search').on('input focus', function () {
        var $field = $(this), $parent = $field.closest('.input-search'), $parentFaq = $field.closest('.main-faq'),
            $result = $parent.find('.input-search__result'), $list = $parent.find('.input-search__list'),
            $empty = $parent.find('.input-search__empty'), value = $field.val(), count = value.length;
        var resultListTpl = '';
        if (value.length > 0) {
            $(this).addClass('filed');
            $parentFaq.addClass('active');
            $result.addClass('show');
            if (typeof searchArray !== 'undefined' && searchArray.length > 0) {
                searchArray.map(function (item) {
                    var str = item.text.toLowerCase(), srtResult = '', posStart = -1;
                    posStart = str.indexOf(value.toLowerCase(), posStart + 1);
                    var svgSearch = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '\t\t\t\t\t\t\t\t\t\t\t<path d="M15.3217 8.10999C15.3217 11.8849 12.3188 14.9153 8.65108 14.9153C4.98334 14.9153 1.98047 11.8849 1.98047 8.10999C1.98047 4.33505 4.98334 1.30469 8.65108 1.30469C12.3188 1.30469 15.3217 4.33505 15.3217 8.10999Z" stroke="#B7B4AE" stroke-width="2"></path>\n' + '\t\t\t\t\t\t\t\t\t\t\t<path d="M13.4453 12.9883L18.7189 18.3544" stroke="#B7B4AE" stroke-width="2"></path>\n' + '\t\t\t\t\t\t\t\t\t\t</svg>';
                    srtResult += item.text.substr(0, posStart) + item.text.substr(posStart, count) + item.text.substr(posStart + count);
                    if (~str.indexOf(value.toLowerCase())) {
                        resultListTpl += '<li data-title="' + srtResult + '">' + svgSearch + '<span>' + srtResult + '</span></li>'
                    }
                });
                $list.html('').append('<ul>' + resultListTpl + '</ul>');
                if (resultListTpl !== '') {
                    $list.show();
                    $empty.hide()
                } else {
                    $list.hide();
                    $empty.show()
                }
            } else {
                $list.hide();
                $empty.show()
            }
        } else {
            $parentFaq.removeClass('active');
            $(this).removeClass('filed');
            $result.removeClass('show');
            $list.text('').hide();
            $empty.hide()
        }
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest('.input-search').length) return;
        $('.input-search__result').removeClass('show');
        e.stopPropagation()
    });
    $(document).on('click', '.js-search-close', function (e) {
        $('#faq-search').val('');
        $('.main-faq__search').val('');
        $('.js-input-ingredients-search').val('')
    });/* - - - - - - - - - - - - - -       input search product      - - - - - - - - - - - - - - - */
    $('.js-input-product-search').on('input focus', function () {
        var $field = $(this), $parent = $field.closest('.input-search'),
            $result = $parent.find('.input-search__result'), $list = $parent.find('.input-search__list'),
            $empty = $parent.find('.input-search__empty'), value = $field.val(), count = value.length;
        var resultListTpl = '';
        if (value.length > 0) {
            $(this).addClass('filed');// $parent.addClass('show');
            $result.addClass('show');
            if (typeof searchArray !== 'undefined' && searchArray.length > 0) {
                searchArray.map(function (item) {
                    var str = item.text.toLowerCase(), srtResult = '', posStart = -1;
                    posStart = str.indexOf(value.toLowerCase(), posStart + 1);
                    srtResult += '<span class="search-result__image"> <img src="' + item.img + '" alt="' + item.text + '"></span>' + '<span class="search-result__content">' + '<span class="search-result__name">' + item.text.substr(0, posStart) + item.text.substr(posStart, count) + item.text.substr(posStart + count) + '</span>' + '<span class="search-result__type">' + item.type + '</span>' + '</span>' + '</span>';
                    if (~str.indexOf(value.toLowerCase())) {
                        if (item.url !== '') {
                            resultListTpl += '<li><a class="search-result__item" href="' + item.url + '">' + srtResult + '</a></li>'
                        } else {
                            resultListTpl += '<li><span class="search-result__item">' + srtResult + '</span></li>'
                        }
                    }
                });
                $list.html('').append('<ul>' + resultListTpl + '</ul>');
                if (resultListTpl !== '') {
                    $list.show();
                    $empty.hide()
                } else {
                    $list.hide();
                    $empty.show()
                }
            } else {
                $list.hide();
                $empty.show()
            }
        } else {
            $(this).removeClass('filed');// $(this).removeClass('filed_on');
// $parent.removeClass('show');
            $result.removeClass('show');
            $list.text('').hide();
            $list.hide();
            $empty.hide()
        }
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest('.input-search').length) return;
        $('.input-search').removeClass('show');
        $('.input-search__result').removeClass('show');
        $('.js-input-product-search').removeClass('show, filed');
        $('.input-search__list').hide();
        $('.input-search__empty').hide();
        e.stopPropagation()
    });/* - - - - - - - - - - - - - -       input search blog      - - - - - - - - - - - - - - - */
    $('.js-input-blog-search').on('input focus', function () {
        var $field = $(this), $parent = $field.closest('.input-search'),
            $result = $parent.find('.input-search__result'), $list = $parent.find('.input-search__list'),
            $empty = $parent.find('.input-search__empty'), value = $field.val(), count = value.length;
        var resultListTpl = '';
        if (value.length > 0) {
            $(this).addClass('filed');// $parent.addClass('show');
            $result.addClass('show');
            if (typeof searchArray !== 'undefined' && searchArray.length > 0) {
                searchArray.map(function (item) {
                    var str = item.text.toLowerCase(), srtResult = '', posStart = -1;
                    posStart = str.indexOf(value.toLowerCase(), posStart + 1);
                    srtResult += '<span class="search-result__content">' + '<span class="search-result__name search-result__name-blog">' + item.text.substr(0, posStart) + item.text.substr(posStart, count) + item.text.substr(posStart + count) + '</span>';
                    if (item.tags !== '') {
                        srtResult += '<span class="search-result__tags">' + item.tags + '</span>'
                    }
                    srtResult += '</span>' + '</span>';
                    if (~str.indexOf(value.toLowerCase())) {
                        if (item.url !== '') {
                            resultListTpl += '<li class="blog-search__item">' + '<a class="search-result__item" href="' + item.url + '">' + srtResult + '</a></li>'
                        } else {
                            resultListTpl += '<li class="blog-search__item"><span class="search-result__item">' + srtResult + '</span></li>'
                        }
                    }
                });
                $list.html('').append('<ul>' + resultListTpl + '</ul>');
                if (resultListTpl !== '') {
                    $list.show();
                    $empty.hide()
                } else {
                    $list.hide();
                    $empty.show()
                }
            } else {
                $list.hide();
                $empty.show()
            }
        } else {
            $(this).removeClass('filed');// $parent.removeClass('show');
            $result.removeClass('show');
            $list.text('').hide();
            $list.hide();
            $empty.hide()
        }
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest('.input-search').length) return;
        $('.input-search').removeClass('show');
        $('.input-search__result').removeClass('show');
        $('.main-faq__search').removeClass('show, filed');
        $('.input-search__list').hide();
        $('.input-search__empty').hide();
        e.stopPropagation()
    });/* - - - - - - - - - - - - - -       input search ingredients      - - - - - - - - - - - - - - - */
    $('.js-input-ingredients-search').on('input focus', function () {
        var $field = $(this), $parent = $field.closest('.input-search'),
            $result = $parent.find('.input-search__result'), $list = $parent.find('.input-search__list'),
            $empty = $parent.find('.input-search__empty'), value = $field.val(), count = value.length;
        var resultListTpl = '';
        if (value.length > 0) {
            $(this).addClass('filed');// $parent.addClass('show');
            $result.addClass('show');
            if (typeof searchArrayIngredients !== 'undefined' && searchArrayIngredients.length > 0) {
                searchArrayIngredients.map(function (item) {
                    var str = item.text.toLowerCase(), srtResult = '', posStart = -1;
                    posStart = str.indexOf(value.toLowerCase(), posStart + 1);
                    srtResult += '<span class="search-result__image"> <img src="' + item.img + '" alt="' + item.text + '"></span>' + '<span class="search-result__content">' + '<span class="search-result__name">' + item.text.substr(0, posStart) + item.text.substr(posStart, count) + item.text.substr(posStart + count) + '</span>' + '<span class="search-result__type">' + item.type + '</span>' + '</span>' + '</span>';
                    if (~str.indexOf(value.toLowerCase())) {
                        if (item.url !== '') {
                            resultListTpl += '<li><a class="search-result__item" href="' + item.url + '">' + srtResult + '</a></li>'
                        } else {
                            resultListTpl += '<li data-ingredients="' + item.text + '"><span class="search-result__item">' + srtResult + '</span></li>'
                        }
                    }
                });
                $list.html('').append('<ul>' + resultListTpl + '</ul>');
                if (resultListTpl !== '') {
                    $list.show();
                    $empty.hide()
                } else {
                    $list.hide();
                    $empty.show()
                }
            } else {
                $list.hide();
                $empty.show()
            }
        } else {
            $(this).removeClass('filed');// $(this).removeClass('filed_on');
// $parent.removeClass('show');
            $result.removeClass('show');
            $list.text('').hide();
            $list.hide();
            $empty.hide()
        }
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest('.input-search').length) return;
        $('.input-search').removeClass('show');
        $('.input-search__result').removeClass('show');
        $('.js-input-product-search').removeClass('show, filed');
        $('.input-search__list').hide();
        $('.input-search__empty').hide();
        e.stopPropagation()
    });//
// const searchResultItem = document.querySelectorAll('search-result__item');
//
// for (let i = 0; i < searchResultItem; i++) {
//
// }
    /*
        WAVE-ANIMATION
         */
    var waveText = document.querySelectorAll('.wave-text');
    waveText.forEach(function (el) {
        var waveTextItem = el;
        var texto = waveTextItem.innerHTML;
        waveTextItem.innerHTML = '';
        texto.split('').forEach(function (e) {
            e = e === ' ' ? '&nbsp;' : e;
            var span = document.createElement('span');
            span.innerHTML = e;
            waveTextItem.appendChild(span)
        })
    });/*
	END-WAVE-ANIMATION
	 */
    if ($('.intro-section').length) {
        setTimeout(function () {
            $('.intro-section ').addClass('animate')
        }, 300)
    }/* - - - - - - - - - - - - - -      select2       - - - - - - - - - - - - - - - */
    $('.js-select').select2({width: '100%', minimumResultsForSearch: -1, dropdownPosition: 'below'});/* - - - - - - - -- - - - - - -       scroll-to     - - - - - -- - - - - - - - - - - -*/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top - 100}, 500)
    });/* - - - - - - - -- - - - - - -      TABS     - - - - - - - - - - - -*/
    $('.tab .js-tab-trigger').click(function () {
        var $this = $(this);// if ($this.closest('.nutritionist-tab').length){
// 	$('.js-nutritional-plans-slider').slick('setPosition');
// 	$('.js-nutritional-plans-slider').slick('refresh');
//
//
// 	$('.js-articles-resources-slider').slick('setPosition');
// 	$('.js-articles-resources-slider').slick('refresh');
// }
        var id = $(this).attr('data-tab'), parentWrap = $(this).closest('.tab'),
            content = parentWrap.find('.js-tab-content[data-tab="' + id + '"]');
        parentWrap.find('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');
        parentWrap.find('.js-tab-content.active').removeClass('active');
        content.addClass('active')
    });/* - - - - - - - -- - - - - - -   ZOOM image   - - - - - - - - - - - -*/
    function zoomImage() {
        if ($('.js-slider-pdp .slick-slide').length) {
            $('.js-slider-pdp .pdp__image img').wrap('<span style="display:inline-block"></span>').css('display', 'block').parent().zoom()
        } else {
            $('.pdp__image img').wrap('<span style="display:inline-block"></span>').css('display', 'block').parent().zoom()
        }
    }

    if ($(window).width() >= 1280) {
        zoomImage()
    }/* - - - - - - - -- - - - - - -   Open Cart-Popup   - - - - - - - - - - - -*/
    $('.js-header-cart').click(function (e) {
        $('body').toggleClass('overflow__hidden');
        $('.wrapper').toggleClass('overflow__layout');
        $(this).toggleClass('open');
        $('#CartDrawer').toggleClass('open')
    });
    $('.js-ajaxcart-close').on('click', function () {
        $('body').removeClass('overflow__hidden');
        $('.wrapper').removeClass('overflow__layout');
        $('.js-header-cart').removeClass('open');
        $('#CartDrawer').removeClass('open')
    });
    $(document).mouseup(function (e) {// событие клика по веб-документу
        var div = $('#CartDrawer.open');// тут указываем ID элемента
        if (div.length) {
            if (!div.is(e.target)// если клик был не по нашему блоку
                && div.has(e.target).length === 0) {// и не по его дочерним элементам
                $('body').removeClass('overflow__hidden');
                $('.wrapper').removeClass('overflow__layout');
                $('.js-header-cart').removeClass('open');
                $('#CartDrawer').removeClass('open')
            }
        }
    })
});
var headerH = 100;
if (window.matchMedia('(max-width: 1390px)').matches) {
    headerH = 60
}
var points = gsap.utils.toArray('.supplement-box');
var height = 100 * points.length;
var tl = gsap.timeline({
    duration: points.length,
    scrollTrigger: {id: 'list', trigger: '.supplement', start: 'top center', end: '+=' + height + '%', scrub: true}
});
var pinner = gsap.timeline({
    scrollTrigger: {
        id: 'box',
        trigger: '.supplement-box',
        start: 'top top+=' + headerH,
        end: '+=' + height + '%',
        scrub: true,
        pin: '.supplement-list'
    }
});
points.forEach(function (elem, i) {
    gsap.set(elem, {position: 'absolute', top: 0});
    tl.from(elem.querySelector('.supplement-box__img'), {autoAlpha: 0}, i);
    tl.from(elem.querySelector('.supplement-box__title'), {autoAlpha: 0}, i);
    if (i !== points.length - 1) {
        tl.to(elem.querySelector('.supplement-box__img'), {autoAlpha: 0}, i + 0.75);
        tl.to(elem.querySelector('.supplement-box__title'), {autoAlpha: 0}, i + 0.75)
    }
});//header input
var searchBtn = document.querySelector('.header__search');
var searchInput = document.querySelector('.header__search-input');
var header = document.querySelector('.header');
var mSearchInput = document.querySelector('.mobile__search');
var mainBlock = document.querySelector('.main__filled');
var announcement = document.querySelector('.announcement');
var mobileSearchBg = document.querySelector('.mobile__search-bg');
mobileSearchBg.addEventListener('click', function (e) {
    mSearchInput.classList.remove('active');
    this.classList.remove('active')
});
searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth <= 575) {
        mobileSearchBg.classList.toggle('active');
        mSearchInput.classList.toggle('active')
    } else if (window.innerWidth >= 575) {
        searchBtn.classList.add('hidden');
        searchInput.classList.add('active')
    } else {
        searchBtn.classList.remove('hidden');
        searchInput.classList.remove('active')
    }
    if (mainBlock && window.innerWidth <= 575 && !header.classList.contains('header--fixed')) {
        mainBlock.classList.toggle('ptop')
    }
});
if (announcement) {
    mSearchInput.classList.add('under-announcement')
} else {
    mSearchInput.classList.remove('under-announcement')
}// console.log(header)
/*
	 TICKER
	 */
var $ticker = $('[data-ticker="list"]'), tickerItem = '[data-ticker="item"]', itemCount = $(tickerItem).length,
    viewportWidth = 0;

function setupViewport() {
    $ticker.find(tickerItem).clone().prependTo('[data-ticker="list"]');
    for (i = 0; i < itemCount; i++) {
        var itemWidth = $(tickerItem).eq(i).outerWidth();
        viewportWidth = viewportWidth + itemWidth
    }
    $ticker.css('width', viewportWidth)
}

function animateTicker() {
    $ticker.animate({marginLeft: -viewportWidth}, $ticker.width() * 10, 'linear', function () {
        $ticker.css('margin-left', '0px');
        animateTicker()
    })
}

function initializeTicker() {
    setupViewport();
    animateTicker();// $ticker.on('mouseenter', function(){
// 	$(this).stop(true);
// }).on('mouseout', function(){
// 	animateTicker();
// });
}

initializeTicker();// search tabs
(function ($) {
    $(function () {
        $('ul.search__tab-head').each(function (i) {
            var storage = localStorage.getItem('tab' + i);
            if (storage) {
                $(this).find('li').removeClass('active').eq(storage).addClass('active').closest('div.search__tabs').find('div.search__tab-content').removeClass('active').eq(storage).addClass('active')
            }
        });
        $('ul.search__tab-head').on('click', 'li:not(.active)', function () {
            $(this).addClass('active').siblings().removeClass('active').closest('div.search__tabs').find('div.search__tab-content').removeClass('active').eq($(this).index()).addClass('active');
            var ulIndex = $('ul.tabs__caption').index($(this).parents('ul.search__tab-head'));
            localStorage.removeItem('tab' + ulIndex);
            localStorage.setItem('tab' + ulIndex, $(this).index())
        })
    })
})(jQuery);
//# sourceMappingURL=app.js.map
