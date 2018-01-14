(function($){
  var trigger = false;

  // �Ϥ��e���׵���Ĥ@���Ҥ��e���� + �W�U padding
  $('.photo-contents').css('height', $('.photo-boxes div').eq(0).height() + 0);

  // �� each �M������
  var tabs = $('.view-items a').each(function(i){
    var _i = i;

    // ���C�ӭ��ҷs�W tabid �ݩ�
    // �j�w click �ƥ�쭶�ҤW�A�Y�n�אּ�ƹ����J�������Ҫ��ܡA�N click �אּ mouseenter
    $(this).attr('tabid', i).click(function(){
      // �� trigger �� false �ɤ~�@�ΡA�קK�����I���y���s���� crash
      if (trigger == false){
        // ���o�ثe�� tabid�A�H�p��ʵe�����Z�ȡ]���e�e�� * ���Ҷ��Z�^
        var now = parseInt($(this).parent().children('.focus').attr('tabid')),
          gap = 620 * (_i - now);
          trigger = true;

        // ������L���Ҫ� class�A�ñN class �s�W�ܥثe����
        $(this).parent().children().removeClass('focus').eq(_i).addClass('focus');
        // �Ϥ��e���ʤ@�w���Z
        $('.photo-boxes').animate({left: '-='+gap}, 620);
        // �Ϥ��e���ײŦX�ҿﭶ�Ҥ��e�����ס]�ҿﭶ�Ҥ��e���� + �W�U padding�^�A�ʵe����������A�� trigger �Ȫ�^ false
        $('.photo-contents').animate({height: $('.photo-boxes').children().eq(_i).height() + 0}, 620, function(){
          trigger = false;
        });
      }
    });
  });
})(jQuery);