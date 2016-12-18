// Created by Hivan Du 2015(Siso brand interactive team).

"use strict";

//  limit browser drag move
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
},true);

var app = {
    create: function (){

        var swiperSlide = $('.swiper-slide');
        var scene01 = $('.scene01');

        //mySwiper
        app.mySwiper = new Swiper ('.swiper-container', {
            direction: 'vertical',
            parallax : true,
            noSwiping: false,

            // init
            onInit: function () {
                swiperSlide.eq(0).addClass("active");
            },

            onTransitionStart: function (swiper) {

            },
            onTransitionEnd: function (swiper) {
                $('.swiper-slide').removeClass("active")
                    .eq(swiper.activeIndex).addClass("active");

                if(swiper.isEnd){
                    $('.icon').hide()
                }else{
                    $('.icon').show()
                }
            }
        });
        $('.fenx').click(function(){
            $('.fx-page').fadeIn();
        })
        $('.fx-page').click(function(){
            $('.fx-page').fadeOut();
        })
        //  first time play BGM
        window.addEventListener('deviceorientation',function(event){
            $('#audio')[0].play();
        },false)
        var initSound = function () {
            //  delay play
            $('#audio')[0].play();
            document.removeEventListener('touchstart', initSound, false);
        };
        document.addEventListener('touchstart', initSound, false);
    },

    start: function (){
        this.create();
    }
};

$(function (){
    // init app
    app.start();
    console.log('app started success...');
});

