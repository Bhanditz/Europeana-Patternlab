define(["jquery"],function(a){"use strict";function b(a){console.log(a)}function c(a,c,e){a.on("mousedown vmousedown",function(g){a.addClass("draggable"),c.addClass("resizable"),b("dragElement.outerWidth() = "+a.outerWidth());var h=a.outerWidth(),i=a.offset().left+h-g.pageX,j=e.offset().left,k=e.outerWidth(!1),l=j-h/2,m=j+k-h/2;a.parents().on("mousemove vmousemove",function(a){f||(f=!0,window.requestAnimationFrame?requestAnimationFrame(function(){d(a,i,h,l,m,j,k,c)}):setTimeout(function(){d(a,i,h,l,m,j,k,c)},100))}).on("mouseup vmouseup",function(b){a.removeClass("draggable"),c.removeClass("resizable")}),g.preventDefault()}).on("mouseup vmouseup",function(b){a.removeClass("draggable"),c.removeClass("resizable")})}function d(b,c,d,e,g,h,i,j){var k=b.pageX+c-d;e>k?k=e:k>g&&(k=g);var l=100*(k+d/2-h)/i+"%";a(".draggable").css("left",l).on("mouseup vmouseup",function(){a(this).removeClass("draggable"),j.removeClass("resizable")}),a(".resizable").css("width",l),f=!1}function e(){b("init image compare"),g.each(function(){var b=a(this);c(b.find(".handle"),b.find(".resize-img"),b)})}a("head").append('<link rel="stylesheet" href="'+require.toUrl("../lib/image-compare/style.css")+'" type="text/css"/>');var f=!1,g=a(".image-compare");return{init:function(){e()}}});