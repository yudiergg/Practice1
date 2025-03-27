$(document).ready(function () {
    $('.infor .tab > li').on('click', function () {
        $('.infor .tab > li').removeClass('active').removeAttr('title'); // 모든 li에서 active 클래스 제거 및 title 삭제
        $(this).addClass('active').attr('title', '선택됨'); // 클릭한 li에 active 클래스 추가 및 title 부여
    });
});
