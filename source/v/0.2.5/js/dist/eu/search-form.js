define(["jquery","util_resize"],function(a){function b(){var b=a(".search-multiterm"),c=b.find(".js-search-input"),d=parseInt(a(".js-hitarea").width());d-=30;var e=d;a(".search-tag").each(function(b,c){var f=parseInt(a(c).outerWidth(!0))+2;e>f?e-=f:e=d-f}),218>e&&(e=d),c.width(e+"px")}function c(){var b=a(".search-multiterm"),c=b.find(".js-search-input");b.on("click",".js-hitarea",function(a){c.focus()}),b.on("submit",function(a){return"qf[]"==c.attr("name")&&0==c.val().length?!1:void 0})}c(),b(),a(window).europeanaResize(function(){b()})});