var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
sideNav.style.right == "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "https://i.postimg.cc/cJRss6PP/close.png";
        sideNav.style.float = "right"
    } else {
        sideNav.style.right = "-250px";
        menu.src = "../../assets/icons/hamurger.png";
    }
}

$(document).ready(function () {

    $("a").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});


window.onscroll = function(){HeaderScroll()}
let header = document.getElementById("header")
let headOnScroll = header.offsetTop
let head = document.getElementById('head')

function HeaderScroll(){
  if(window.pageYOffset > headOnScroll){
    header.classList.add('header_onScroll')
    head.classList.add('head_onScroll')
  }else{
    header.classList.remove('header_onScroll')
    head.classList.remove('head_onScroll')
  }
}



(function ($) {
    $(function () {
  
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
  
      var htTimeline = $('.js-timeline'),
        htTimelineLine = $('.js-timeline_line'),
        htTimelineLineProgress = $('.js-timeline_line-progress'),
        htTimelinePoint = $('.js-timeline-card_point-box'),
        htTimelineItem = $('.js-timeline_item'),
        htOuterHeight = $(window).outerHeight(),
        htHeight = $(window).height(),
        f = -1,
        htFlag = false;
  
      function fnOnScroll() {
        htPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        htPosY = $(window).scrollTop();
        htHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        htFlag = false;
  
        htTimelineLine.css({
          top: htTimelineItem.first().find(htTimelinePoint).offset().top - htTimelineItem.first().offset().top,
          bottom: htTimeline.offset().top + htTimeline.outerHeight() - htTimelineItem.last().find(htTimelinePoint).offset().top
        });
  
        f !== htPosY && (f = htPosY, htHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var htTop = htTimelineItem.last().find(htTimelinePoint).offset().top;
  
        i = htTop + htPosY - $(window).scrollTop();
        a = htTimelineLineProgress.offset().top + htPosY - $(window).scrollTop();
        n = htPosY - a + htOuterHeight / 2;
        i <= htPosY + htOuterHeight / 2 && (n = i - a);
        htTimelineLineProgress.css({height: n + "px"});
  
        htTimelineItem.each(function () {
          var htTop = $(this).find(htTimelinePoint).offset().top;
  
          (htTop + htPosY - $(window).scrollTop()) < htPosY + .5 * htOuterHeight ? $(this).addClass('js-ht-active') : $(this).removeClass('js-ht-active');
        })
      }
  
      function fnUpdateFrame() {
        htFlag || requestAnimationFrame(fnUpdateWindow);
        htFlag = true;
      }
  
  
    });
  })(jQuery);
  