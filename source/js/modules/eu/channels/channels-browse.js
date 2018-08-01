define(['jquery'], function($){

  'use strict';

  function initTitleBar(){
    require(['eu_title_bar'], function(EuTitleBar){

      var anchorList = $('.anchor-list');
      var conf = {
        $container:        $('.header-wrapper'),
        $detectionElement: anchorList,
        markup:            '<div class="title-bar">' + anchorList[0].outerHTML + '</div>'
      };

      var titleBar = EuTitleBar.init(conf);

      $(document, '.cc_btn cc_btn_accept_all').on('click', function(){
        titleBar.test();
      });

    });
  }

  function initEllipsis(){
    require(['util_eu_ellipsis'], function(Ellipsis){
      $('.gridlayout-card .inner-text h3').each(function(){
        Ellipsis.create($(this), {textSelectors:['a']});
      });

      $('.gridlayout-card .inner-text p').each(function(){
        Ellipsis.create($(this), {textSelectors:['span']});
      });

    });
  }

  function initPage(){
    initEllipsis();
    initTitleBar();
  }

  return {
    initPage: function(){
      initPage();
    }
  };
});
