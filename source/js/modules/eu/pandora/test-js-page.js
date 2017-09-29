define(['jquery', 'mustache', 'smartmenus'], function($, Mustache){

  function getMarkup(urlTemplate, urlData, callback){

    $.get(urlTemplate, function(html){
      $.get(urlData, function(json){

        Mustache.tags = ['[[', ']]'];
        callback(Mustache.render(html, json));

      }, 'json');
    }, 'html');
  }

  return {
    getMarkup: function(urlTemplate, urlData, callback){
      getMarkup(urlTemplate, urlData, callback);
    }
  }
});
