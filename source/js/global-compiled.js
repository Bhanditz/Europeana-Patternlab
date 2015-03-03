jQuery&&function($){function e(e,o){var r=e?$(this):o,a=$(r.attr("data-dropdown")),s=r.hasClass("dropdown-open");if(e){if($(e.target).hasClass("dropdown-ignore"))return;e.preventDefault(),e.stopPropagation()}else if(r!==o.target&&$(o.target).hasClass("dropdown-ignore"))return;t(),s||r.hasClass("dropdown-disabled")||(r.addClass("dropdown-open"),a.data("dropdown-trigger",r).show(),n(),a.trigger("show",{dropdown:a,trigger:r}))}function t(e){var t=e?$(e.target).parents().addBack():null;if(t&&t.is(".dropdown")){if(!t.is(".dropdown-menu"))return;if(!t.is("A"))return}$(document).find(".dropdown:visible").each(function(){var e=$(this);e.hide().removeData("dropdown-trigger").trigger("hide",{dropdown:e})}),$(document).find(".dropdown-open").removeClass("dropdown-open")}function n(){var e=$(".dropdown:visible").eq(0),t=e.data("dropdown-trigger"),n=t?parseInt(t.attr("data-horizontal-offset")||0,10):null,o=t?parseInt(t.attr("data-vertical-offset")||0,10):null;0!==e.length&&t&&e.css(e.hasClass("dropdown-relative")?{left:e.hasClass("dropdown-anchor-right")?t.position().left-(e.outerWidth(!0)-t.outerWidth(!0))-parseInt(t.css("margin-right"),10)+n:t.position().left+parseInt(t.css("margin-left"),10)+n,top:t.position().top+t.outerHeight(!0)-parseInt(t.css("margin-top"),10)+o}:{left:e.hasClass("dropdown-anchor-right")?t.offset().left-(e.outerWidth()-t.outerWidth())+n:t.offset().left+n,top:t.offset().top+t.outerHeight()+o})}$.extend($.fn,{dropdown:function(n,o){switch(n){case"show":return e(null,$(this)),$(this);case"hide":return t(),$(this);case"attach":return $(this).attr("data-dropdown",o);case"detach":return t(),$(this).removeAttr("data-dropdown");case"disable":return $(this).addClass("dropdown-disabled");case"enable":return t(),$(this).removeClass("dropdown-disabled")}}}),$(document).on("click.dropdown","[data-dropdown]",e),$(document).on("click.dropdown",t),$(window).on("resize",n)}(jQuery);var Site=window.Site||{};!function($){var e=$("body"),t=function(e){var t=$(e.target);e.preventDefault(),t.closest(".menu-right, .nav-toggle-menu, .nav-toggle-search, .search-global, .nav-toggle-sites, .menu-top").length||Site.resetMenu()};Site.resetMenu=function(){e.removeClass("is-open-menu-right is-open-globalsearch is-open-menu-top"),document.removeEventListener("click",t)},Site.placeholders=function(){var e="#333",t="#171207";$("input[placeholder]").each(function(){var n=$(this),o=n.attr("placeholder");n.attr("value",o).bind("focus",function(){n.val()===o&&n.val("").css("color",t)}).bind("blur",function(){""===n.val()&&n.val(o).css("color",e)})})},Site.featuredetect=function(){var e={},t=document.documentElement;e.svg=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),t.className+=e.svg?" svg":" no-svg"},$(function(){Site.featuredetect(),$(".nav-toggle-menu").on("click",function(n){e.hasClass("is-open-menu-right")?Site.resetMenu():(e.addClass("is-open-menu-right"),document.addEventListener("click",t)),n.preventDefault()}),$(".nav-toggle-search").on("click",function(n){e.hasClass("is-open-globalsearch")?Site.resetMenu():(e.addClass("is-open-globalsearch"),document.addEventListener("click",t)),$("input.js-global-search").focus(),n.preventDefault()}),$(".nav-toggle-sites").on("click",function(n){e.hasClass("is-open-menu-top")?Site.resetMenu():(e.addClass("is-open-menu-top"),document.addEventListener("click",t)),n.preventDefault()}),Site.placeholders()})}(jQuery);