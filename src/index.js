/**
 * jq-bgRandom
 * @version 0.0.0-development
 * @author jsmh
 * @license The MIT License (MIT)
 */

(function(global, $){
  //funciones de sentencia
  function BgRandom(){

  }

  //funcion declarativa
  BgRandom.prototype.setup = function(clientId) {
    this.clientId = clientId;
  };

  var getPhoto = function(){
    return (
      $.ajax({
        url: 'https://api.unsplash.com/photos/random',
        beforeSend: function(request) {
          request.setRequestHeader('Authorization', 'Client-ID ' + global.BgRandom.clientId);
        }
      })
    );
  };

  $.fn.bgRandom = function(options) {
    options = options || {};
    var $self = $(this);
    $self.css({
      width: '100%',
      heigth: '100vh',
      minHeight: options.minHeight || '800px',
      backgroundSize: options.backgroundSize || 'cover',
      backgroundPosition: options.backgroundPosition || 'center',
      backgroundColor: options.backgroundColor || 'black',
    });

    if (options.usePromise) {
      var def = $.Deferred();
      getPhoto().then(function(photo){
        $self.css({
          backgroundImage: 'url(' + photo.urls.regular + ')'
        });
        def.resolve($self);
      })
        .catch(function(){
          $self.css({
            backgroundImage: 'url(' + options.backgroundImage + ')'
          });
          def.reject($self);
        });
      return def.promise();
    }

    getPhoto().then(function(photo){
      $self.css({
        backgroundImage: 'url(' + photo.urls.regular + ')'
      });
    })
      .catch(function(){
        $self.css({
          backgroundImage: 'url(' + options.backgroundImage + ')'
        });
      });
    return $self;
  };

  global.BgRandom = new BgRandom();
})(window, jQuery);
