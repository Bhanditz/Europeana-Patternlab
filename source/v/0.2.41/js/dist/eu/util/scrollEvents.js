define([],function(){var a=function(a){"function"==typeof jQuery&&a instanceof jQuery&&(a=a[0]);var b=a.getBoundingClientRect();return b.top>=0&&b.left>=0&&b.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&b.right<=(window.innerWidth||document.documentElement.clientWidth)},b=function(b){if(a(b[0])){var c=function(a,b){var c=a.data("fire-on-open"),d=a.data("fire-on-open-params");a.attr("data-enabled",!1),$('*[data-disable-when-fired="'+c+'"]').attr("data-enabled",!1);var e=window.getComputedStyle(a[0],":before").getPropertyValue("content");if(e&&e.length>0&&"none"!=e){var f=JSON.parse(e);"string"==typeof f&&(f=JSON.parse(f));for(var g in f)d[g]=f[g]}$(window).trigger(c,d)};if(b.hasClass("trigger-chain")){var d=$("#"+b.data("fire-on-open-params").trigger+".scroll-trigger");d.length>0?(b.attr("data-enabled",!1),c(d,!1)):(b.attr("data-enabled",!1),console.warn("scroll-trigger chaining must reference a valid target trigger in the fire-on-open-params"))}else c(b,!0)}},c=function(){$(".scroll-trigger").each(function(){$(this).data("enabled")&&b($(this))})};return $(window).on("scroll",function(){$('.scroll-trigger[data-enabled="true"]').each(function(){b($(this))})}),$(window).on("fire-visible-scroll-triggers",function(){c()}),{fireAllVisible:function(){c()}}});