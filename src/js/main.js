(function ($) {
    $(document).ready(function () {
        var $slickElement = $('.block-values .fl-row-content'),
            $status = $('.block-values__count');

        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.html(i >= 10
                ? i + ' / ' + slick.slideCount
                : '0' + i + ' / ' + '0' + slick.slideCount
            );
        });

        $slickElement.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        });
        $('.form-contact').validate({
            errorClass: "error",
            rules: {
                project: "required",
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                }
            },
            submitHandler: function() {
                let form_data = $(this.currentForm).serializeArray();
                $.ajax({
                    url: '/sendMail',
                    method: 'POST',
                    dataType: 'json',
                    data: form_data,
                    success: function (response) {
                        let text = '',
                            notify_class = '';
                        if (response.data !== undefined) {
                            text = 'Сообщение успешно отправлено!';
                            notify_class = 'success';
                        } else {
                            text =  'Сообщение не отправлено!';
                            notify_class = 'error';
                        }
                        $('.form-contact').append('<div id="email_notify" class="'+ notify_class +'">'+ text +'!</div>')
                        setTimeout(function () {
                            $('#email_notify').fadeOut(500, function () {
                                $(this).remove();
                            });
                        }, 4000)
                    }
                })
            }
        });

        /** HEIGHT BLOCK **/
        function heightEL(el) {
            var elH = el;
            var maxHeight = 0;
            for (var i = 0; i < elH.length; ++i) {
                elH[i].style.height = "";
                if (maxHeight < elH[i].clientHeight) {
                    maxHeight = elH[i].clientHeight;
                }
            }
            for (var i = 0; i < elH.length; ++i) {
                elH[i].style.height = maxHeight + "px";
            }
        }

        if ($(window).width() >= 767) {
            heightEL($(''));
        }

        if ($(window).width() >= 360) {
            heightEL($(''));
        }


        if ($(window).width() > 1025) {
            var slider = $('.block-heading__wrap');

            slider.slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                vertical: true,
                verticalScrolling: true,
                verticalSwiping: true,
                customPaging: function (slider, i) {
                    return '0' + i;
                },
            });

            slider.on('wheel', (function (e) {
                e.preventDefault();

                if (e.originalEvent.deltaY < 0) {
                    $(this).slick('slickPrev');
                } else {
                    $(this).slick('slickNext');
                }
            }));

            $('.menu li').each(function (idx, itm) {
                $('a', itm).on('click', function (e) {
                    e.preventDefault();
                    $(this).parent().siblings().removeClass('active');
                    $(this).parent().addClass('active');
                    slider.slick('slickGoTo', idx);
                })
            });

            slider.on('afterChange', function (event, slick, currentSlide) {
                $('header').attr('class', '');
                $('body').attr('class', '');
                $('header').addClass($(slick.$slides[currentSlide]).attr('data-header-class'));
                $('body').addClass($(slick.$slides[currentSlide]).attr('data-header-class'));
            });


            $(".on-main").on("click", function () {
                slider.slick('slickGoTo', 0);
            });
        }

        if ($(window).width() < 1025) {
            $('.menu li').on('click', function () {
                var href = $('a', this).attr('href');
                $('ul.menu').removeClass('open');
                $('body').removeClass('menu-fixed');
                $('.btn-toggle').removeClass('active');
                $("html, body").animate({scrollTop: $(href).offset().top}, 600);
            });
        }


        $(document).mousemove(function (e) {
            $('.cursor').show();
            $('.cursor').css({
                "transform": "translate(" + (e.clientX) + "px," + (e.clientY - 10) + "px)",
            });
        })

        $(document).mouseleave(function (e) {
            $('.cursor').hide()
        })

    });

    $(".btn-toggle").on("click", function () {
        $(this).toggleClass("active");
        $(this).toggleClass("open");
        $(this).siblings('.menu').toggleClass('open');
        $('.header-top__wrap').toggleClass("open");
        $('body').toggleClass('menu-fixed');
    });

})(jQuery);
