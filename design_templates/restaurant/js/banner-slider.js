(function($){
  var trigger = false;

  // �Ϥ��e���׵���Ĥ@���Ҥ��e���� + �W�U padding
  $('.slider-container').css('height', $('.slider-contents div').eq(0).height() + 0);

  // �� each �M������
  var tabs = $('.slider-ctrl a').each(function(i){
    var _i = i;

    // ���C�ӭ��ҷs�W tabid �ݩ�
    // �j�w click �ƥ�쭶�ҤW�A�Y�n�אּ�ƹ����J�������Ҫ��ܡA�N click �אּ mouseenter
    $(this).attr('tabid', i).click(function(){
      // �� trigger �� false �ɤ~�@�ΡA�קK�����I���y���s���� crash
      if (trigger == false){
        // ���o�ثe�� tabid�A�H�p��ʵe�����Z�ȡ]���e�e�� * ���Ҷ��Z�^
        var now = parseInt($(this).parent().children('.enable').attr('tabid')),
          gap = 960 * (_i - now);
          trigger = true;

        // ������L���Ҫ� class�A�ñN class �s�W�ܥثe����
        $(this).parent().children().removeClass('enable').eq(_i).addClass('enable');
        // �Ϥ��e���ʤ@�w���Z
        $('.slider-contents').animate({left: '-='+gap}, 960);
        // �Ϥ��e���ײŦX�ҿﭶ�Ҥ��e�����ס]�ҿﭶ�Ҥ��e���� + �W�U padding�^�A�ʵe����������A�� trigger �Ȫ�^ false
        $('.slider-container').animate({height: $('.slider-contents').children().eq(_i).height() + 0}, 960, function(){
          trigger = false;
        });
      }
    });
  });
})(jQuery);