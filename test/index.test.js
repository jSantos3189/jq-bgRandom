var expect = require('expect.js');
var jsdom = require('jsdom');

var dom = new jsdom.JSDOM('<html><body><section></section></body></html>');
var $ = global.jQuery = require('jquery')(dom.window);

require('../src');

describe('jq-bgRandom', function() {
  var $section;

  beforeEach(function(){
    $section = $('section');
    $section.bgRandom();
  });
  it('should have a width of 100 %', function(){
    expect($section.css('width')).to.be('100%');
  });
  it('should have a heigth of 800px', function(){
    expect($section.css('minHeight')).to.be('800px');
  });
});
