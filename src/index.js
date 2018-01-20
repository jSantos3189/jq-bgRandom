/**
 * jq-bgRandom
 * @version 0.0.0-development
 * @author jsmh
 * @license The MIT License (MIT)
 */

(function($){

  $.fn.bgRandom = function() {
    $(this).css({
      width: '100%',
      heigth: '100vh',
      minHeight: '800px'
    });
    return $(this);
  };

})(jQuery);
