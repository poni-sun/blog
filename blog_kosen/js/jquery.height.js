  $(window).on('load resize', function() {
    var w = window.innerWidth ? window.innerWidth : $(window).width();
    var footer = $('footer').outerHeight(true);
    
 //フッター位置の調整
 
    if (w > 600) {
      $('#wrapper').css('padding-bottom', footer + 40 + 'px');
      
    } else {
      $('#wrapper').css('padding-bottom', '');
    }
  });
