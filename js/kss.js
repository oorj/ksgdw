$(function(){
    $('.gnb > ul > li').on('mouseover', function(){
    $('.bgGnb').fadeIn();
    $('.gnb .sub').fadeIn();
    })
    $('.gnb > ul > li').on('mouseleave', function(){
        $('.bgGnb').fadeOut();
        $('.gnb .sub').fadeOut();
        })
})


$(function(){
    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 10){
            $(".bg").addClass("active");
        }else{
            $(".bg").removeClass("active");
        }
    })
});


$(function() {
    let tab = $('.tab_nav button');

    tab.on('click', function() {
        let depth2 = $(this).next();
        let idx = $(this).parent().index();
        
        $(this).parent().addClass('on');
        $(this).parent().siblings().removeClass('on');

        if (depth2.hasClass('tab_nav') || $(this).parent().parent().parent().hasClass('tab')) {
            let $this = $('.tab_nav button').parents('.tab_group').children('.tab_content').eq(idx);

            $this.addClass('on').siblings().removeClass('on');
        } else {
            let parentIdx = $(this).parent('li').parent('.tab_nav').parent('li').index();
            console.log(parentIdx)
            let $this = $('.tab_nav button').parents('.tab_group').children('.tab_content').eq(parentIdx).children().eq(idx);
            console.log($this)

            $this.addClass('on').siblings().removeClass('on')
        }
    })
});
$(function() {
    let depth3 = $('.tab > .tab_nav > li')
    let depth4 = $('.tab_nav > li > .tab_nav > li > button')
    let depth5 = $('.tab > .tab_nav > li:first-child > .tab_nav li')
    let content = $('.tab_content:last-child')
    depth4.on('click', function(){
        $(this).parents('li').addClass('on')
        $(this).parents('li').siblings('.tab .tab_nav > li').removeClass('on')
        $(content).siblings('.tab_content').addClass('on')
        $(content).addClass('on').siblings('.tab_content').removeClass('on')
    })

    depth5.on('click', function(){
        $(content).removeClass('on')
        $(content).removeClass('on').siblings('.tab_content').addClass('on')
    })
    depth3.on('click', function(){
        $(this).addClass('on').siblings().children().children().removeClass('on')
    })
})

$(function(){
    $('.fa').on('click', function(){
        $('.modal').addClass('on')
        $('.mai').addClass('on')
        $('.plu').addClass('on')
    })
    $('.foot03 .modal button').on('click', function(){
        $('.modal').removeClass('on')
        $('.mai').removeClass('on')
        $('.plu').removeClass('on')
    })
})


/* mobile */

$(function(){
    $('.mob .mobile').on('click', function(){
        $('header').on('scroll touchmove mousewheel', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    }) 
})

$(function(){
    $('.mob .mobile').on('click', function(){
        $('.m-gnb').toggleClass('on')
    })
    $('.m-gnb > ul > li').on('click', function(){
        $(this).children('.m-gnb > ul > li > .m-sub').slideToggle()
        $(this).siblings().children('.m-sub').stop().slideUp()
    })
    $('.m-sub > li').on('click', function(){
        $('.m-sub02').toggleClass('on')
        $(this).siblings().children().removeClass('on')
    })
})

