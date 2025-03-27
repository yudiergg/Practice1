$(document).ready(function(){
    $('.infor .tab > li').on('click', function(){
        $('.infor .tab > li').removeClass('active')
        $(this).addClass('active')
    })
})