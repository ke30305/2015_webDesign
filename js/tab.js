(function($){
  // �� each �M������
  $('.WorkTab li').each(function(i){
    var _i = i;

    // �j�w click �ƥ�쭶�ҤW�A�Y�n�אּ�ƹ����J�������Ҫ��ܡA�N click �אּ mouseenter
    $(this).click(function(){
      // ������L���Ҫ� class�A�ñN class �s�W�ܩҿﭶ��
      $(this).parent().children().removeClass('focus').eq(_i).addClass('focus');
      // ���è�L���Ҫ����e�A����ܩҿﭶ�Ҫ����e
      $('.WorkContent').children('ul').hide().eq(_i).show();
    });
  });
})(jQuery);