(function($){
  // �� each �M������
  $('.menu-tab li').each(function(i){
    var _i = i;

    // �j�w click �ƥ�쭶�ҤW�A�Y�n�אּ�ƹ����J�������Ҫ��ܡA�N click �אּ mouseenter
    $(this).click(function(){
      // ������L���Ҫ� class�A�ñN class �s�W�ܩҿﭶ��
      $(this).parent().children().removeClass('infocus').eq(_i).addClass('infocus');
      // ���è�L���Ҫ����e�A����ܩҿﭶ�Ҫ����e
      $('.menu-content').children('ul').hide().eq(_i).show();
    });
  });
})(jQuery);