var expect = require('expect.js');
var jsdom = require('jsdom');
var dom = new jsdom.JSDOM('<html><body><section></section></body></html>');
var $ = global.jQuery = require('jquery')(dom.window);

require('jsdom-global')();
require('../src');

describe('jq-bgRandom', function() {
  var $section;

  beforeEach(function(){
    window.BgRandom.setup('3734a25ef51023c4760d4042cd4c1ce1e3e65453f57c50d22958ff97f49b66b3');
    $section = $('section');
    //3734a25ef51023c4760d4042cd4c1ce1e3e65453f57c50d22958ff97f49b66b3
  });
  it('should have the default values', function(){
    /* Con esto tomamos el valor de un promesa
    return $section.bgRandom().then(function($this){
      expect($this.css('width')).to.be('100%');
      expect($this.css('minHeight')).to.be('800px');
      expect($this.css('backgroundImage')).to.contain('url');
    });*/
    $section.bgRandom();
    expect($section.css('width')).to.be('100%');
    expect($section.css('minHeight')).to.be('800px');
    expect($section.css('backgroundSize')).to.be('cover');
    expect($section.css('backgroundPosition')).to.be('center');
    expect($section.css('backgroundColor')).to.be('black');
  });
  it('should have the defined values', function(){
    $section.bgRandom({
      minHeight: '700px',
      backgroundSize: 'contain',
      backgroundPosition: 'top center',
      backgroundColor: 'red'
    });
    expect($section.css('minHeight')).to.be('700px');
    expect($section.css('backgroundSize')).to.be('contain');
    expect($section.css('backgroundPosition')).to.be('top center');
    expect($section.css('backgroundColor')).to.be('red');
  });
  it('should set clien id attr', function(){
    expect(window.BgRandom.clientId).to.be('3734a25ef51023c4760d4042cd4c1ce1e3e65453f57c50d22958ff97f49b66b3');
  });
  it('should set default image width promise', function(){
    window.BgRandom.setup('1234');
    return $section.bgRandom({
      backgroundImage: 'path/defaultimage.jpg',
      usePromise: true
    }).catch(function(){
      expect($section.css('backgroundImage')).to.contain('path/defaultimage.jpg');
    });
  });
  it('should set default image without promise', function(){
    //Es necesario refactorisar para validar correctamente
    window.BgRandom.setup('1234');
    $section.bgRandom({
      backgroundImage: 'path/defaultimage.jpg'
    });
    expect($section.css('width')).to.be('100%');
  });
  it('should set random image unsplash', function(){
    return $section.bgRandom({
      backgroundImage: 'path/defaultimage.jpg',
      usePromise: true
    }).then(function(){
      expect($section.css('backgroundImage')).to.contain('url(https://');
    });
  });

});
