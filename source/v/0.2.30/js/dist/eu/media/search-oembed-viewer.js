define([],function(){"use strict";var a=function(a,b){var c,d,e=[],f=[],g=$("<div>"+b+"</div>");g.children().length>1?g.children().each(function(){var a=this.nodeName.toUpperCase();if("DIV"==a&&(c=$(this),d=c.attr("id")),"IFRAME"==a)c=$(this),d=c.attr("id");else if("SCRIPT"==a){var b=$(this),g=b.attr("src");g&&"string"==typeof g.toLowerCase()?e.push(g):f.push(b)}}):c=$(b);var h=function(a,b){if(a.length>0){var c=a.pop();require([c],function(){h(a,b)})}else b()};h(e.reverse(),function(){if(c.attr("width")){var b=c.attr("width");b&&b===parseInt(b)+""?a.css("width",b+"px"):a.css("width",b)}a.append(c),$(f).each(function(){a.after(this)}),a.css("max-width","100%"),a.css("position","relative"),a.css("margin","auto"),c.css("margin","auto"),$("#"+d).parent().css("margin","auto"),a.find("object").css("height","100%"),$(".media-viewer").trigger("object-media-open",{hide_thumb:!0})})};return{init:function(b,c){a(b,c)}}});