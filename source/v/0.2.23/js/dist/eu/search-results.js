define(["jquery","ga","purl"],function(a,b){function c(a){console.log(a)}var d=a.url(),e=a(".search-results"),f=[],g=a(".icon-view-grid").closest("a"),h=a(".icon-view-list").closest("a"),i=function(){var b=e.find(".result-items h1:not(.js-ellipsis)"),c=[];b.css("overflow-y","auto"),b.each(function(){a(this).find("a")[0].offsetHeight>a(this).height()&&(a(this).addClass("js-ellipsis"),c.push(a(this)))}),b.css("overflow-y","hidden"),c.length>0&&require(["util_ellipsis"],function(b){for(var d=b.create(a(c)),e=0;e<d.length;e++)f.push(d[e])});var d=e.find(".search-list-item.missing-image .item-image .missing-image-text:not(.js-ellipsis)");d.size()>0&&(require(["util_ellipsis"],function(a){for(var b=a.create(d),c=0;c<b.length;c++)f.push(b[c])}),d.addClass("js-ellipsis"))},j=function(b,c){var e={};e[b]=c;var f=d.param();f[b]=c;var g=a.param(f);window.history.pushState(e,"","?"+g)};window.onpopstate=function(a){a.state&&("grid"==a.state.view?n(!0):"list"==a.state.view&&o(!0),"undefined"!=typeof a.state.results&&k(a.state.results))};var k=function(b){var c=a(".result-items>li"),d=c.size();if(b>d){var e=a(".result-items>li").slice(0,b-d);e.each(function(b,c){a(c).parent().append(a(c).clone())}),a(".result-items>li").size()<b&&k(b)}else if(d>b){var f=a(".result-items>li").slice(b,d);f.remove()}l(b)},l=function(b){if(a(".result-actions a.dropdown-trigger").size()>0){var c=a(".result-actions a.dropdown-trigger").text(),d=c.match(/\d+/)[0];b=b?b:d,c=c.replace(d,""),a(".result-actions a.dropdown-trigger").html(c+'<span class="active">'+b+"</span>")}},m=function(a){"undefined"!=typeof Storage&&localStorage.setItem("eu_portal_results_view",a)},n=function(b){a("body").addClass("display-grid"),g.addClass("is-active"),h.removeClass("is-active"),b&&m("grid");for(var c=0;c<f.length;c++)f[c].enable();i()},o=function(b){a("body").removeClass("display-grid");for(var c=0;c<f.length;c++)f[c].disable();h.addClass("is-active"),g.removeClass("is-active"),b&&m("list")},p=function(){a(".item-origin .external").on("click",function(){var d=a(this).attr("href");b("send",{hitType:"event",eventCategory:"Redirect",eventAction:d,eventLabel:"CTR List"}),c("GA: Redirect, Action = "+d)})},q=function(){if(p(),j("results",a(".result-items>li").size()),"undefined"!=typeof Storage){var b=a(".breadcrumbs").data("store-channel-label"),c=a(".breadcrumbs").data("store-channel-name"),d=a(".breadcrumbs").data("store-channel-url");sessionStorage.eu_portal_channel_label=b,sessionStorage.eu_portal_channel_name=c,sessionStorage.eu_portal_channel_url=d}};return{initPage:function(){q()}}});