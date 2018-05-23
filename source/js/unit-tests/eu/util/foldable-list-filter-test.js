define(['jasmine_jquery', 'util_filterable', 'jquery'], function(x, Filter, $){
  'use strict';
  var basePath = 'base/js/unit-test-fixtures/util';

  describe('Eu Foldable List Filter', function(){

    var elInput;
    var waitTime = 100;

    beforeEach(function(){

      jasmine.getFixtures().fixturesPath = basePath;
      window.loadFixtures('fx-foldable.html');

      elInput = $('.eu-filter');
      elInput.val();

      Filter.init(elInput,
        {
          selector:  '.eu-foldable > li',
          sel_title:   ' > h4 > a',
          children: {
            selector:  '.eu-foldable-data > li',
            sel_title: 'a',
            actions: {
              select: function($el){
                $el.closest('.eu-foldable-data').addClass('filter-force-show');
              },
              deselect: function($el){
                $el.closest('.eu-foldable-data').removeClass('filter-force-show');
              }
            }
          }
        }
      );
    });

    it('hides non-matching items', function(done){

      var thirdItem = $('.eu-foldable-title').eq(2);
      thirdItem.click();

      setTimeout(function(){
        expect(thirdItem.next('.eu-foldable-data').find('li:visible').length).toEqual(5);

        elInput.val('Aj');
        elInput.keydown();
        elInput.keyup();

        setTimeout(function(){
          expect(thirdItem.next('.eu-foldable-data').find('li:visible').length).toEqual(1);
          done();
        }, waitTime);
      }, waitTime);
    });

    it('shows matching items even if hidden', function(done){

      expect($('.eu-foldable-data li:visible').length).toEqual(0);

      elInput.val('a');
      elInput.keydown();
      elInput.keyup();

      setTimeout(function(){
        expect($('.eu-foldable-data li:visible').length).toEqual(8);
        done();
      }, waitTime);
    });

    it('is case insensitive', function(done){

      elInput.val('bavaria');
      elInput.keydown();
      elInput.keyup();

      setTimeout(function(){

        var text = $('.eu-foldable-data li a:visible').contents().filter(function() {
          return this.nodeType == Node.TEXT_NODE;
        }).text();

        expect(text.indexOf('bavaria')).toEqual(-1);
        expect(text.indexOf('Bavaria')).toBeGreaterThan(-1);

        done();
      }, waitTime);
    });

  });
});
