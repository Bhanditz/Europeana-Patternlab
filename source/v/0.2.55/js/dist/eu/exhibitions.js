define(["jquery","util_resize","purl","jqScrollto"],function(a){function b(a){}function c(){var b,c;a(".editor").size()>0&&(w=!0),w&&a(".ve-slide").css("border","2px dotted red"),m(),c=v(),u(),o(),t(),r(),l(),s(),j(),w?F=!0:(b=n(),a.when(c,b).done(function(){if(!w){var b=k(!0);b&&a(window).scrollTo(b,0),setTimeout(function(){F=!0},200)}})),w||i();var g=function(){if(a(window).stop(!0),d())if(J){var b=k(!0);f(),n(),b?p(b,!0):H=!1}else v(),n();else J&&(window.scrollTo(0,0),a(".ve-slide.first").closest(".scrollmagic-pin-spacer").removeAttr("style").css({"box-sizing":"content-box","min-height":"100vh"}),f())};a(window).europeanaResize(function(){B||g()});var h=a(".ve-intro").data("growl-msg");h&&e(h)}function d(){return a("#desktop_detect").width()>0}function e(b){var c="eu_exhibitions_oneoff_scroll_instruction";if(A.param("clearGrowl")&&localStorage.removeItem(c),0==a(document).scrollTop()){var e=!1;"undefined"==typeof Storage?e=!0:localStorage.getItem(c)||(localStorage.setItem(c,!0),e=!0),d()&&!w||(e=!1),e&&a("body").append('<div class="growl">'+b+"</div>")}}function f(){H=!0,a.each(C,function(a,b){b.destroy(!0)}),a(".scrollmagic-pin-spacer > .ve-slide, .scrollmagic-pin-spacer > .ve-image, .scrollmagic-pin-spacer > .ve-base-quote").removeAttr("style"),a(K+", .ve-slide.first .ve-intro-full-description, .ve-slide.first, .ve-slide.first .ve-intro, .ve-slide.first").removeAttr("style"),a(".scrollmagic-pin-spacer").remove()}function g(){a(document).on("keydown",function(c){if(c.ctrlKey)return void b("ctrl held");if([33,34,37,38,39,40].indexOf(c.keyCode)>-1){H&&a(window).stop(!0);var d=[33,37,38].indexOf(c.keyCode)>-1,e=a(q(d));I&&p(e)&&c.preventDefault()}})}function h(b){var c=[b];require(["imagesloaded"],function(){require(["photoswipe","photoswipe_ui"],function(b,d){a("body").append('<div id="img-measure" style="position:absolute; visibility:hidden;">');for(var e=0;e<c.length;e++)a("#img-measure").append('<img src="'+c[e]+'">');var f=[];a("#img-measure").imagesLoaded(function(c,e,g){for(var h=0;h<c.length;h++){var i=a(c[h]);f.push({src:i.attr("src"),h:i.height(),w:i.width()})}a("#img-measure").remove();var j={index:0};k(!0);E=!0;var l=new b(a(".pswp")[0],d,f,j);l.listen("close",function(){setTimeout(function(){E=!1},500)}),setTimeout(function(){l.init()},100)})})})}function i(){var b=require.toUrl("../../lib/photoswipe/photoswipe.css"),c=require.toUrl("../../lib/photoswipe/default-skin/default-skin.css");a(".photoswipe-wrapper > img");a("head").append('<link rel="stylesheet" href="'+b+'" type="text/css"/>'),a("head").append('<link rel="stylesheet" href="'+c+'" type="text/css"/>'),a("head").append("<style>.pswp__button--share{ display: none; }</style>"),a(".rich_image .ve-image img, .ve-base-image picture").click(function(b){var c=a(b.target);h(c.data("hi-res")||c.closest("picture").data("hi-res"))})}function j(){a(window).on("hashchange",function(){E||H||k()}),window.onpopstate=function(){E||(H&&a(window).stop(!0),k())}}function k(b){var c=window.location.hash;if(c=c.indexOf("&")>-1?c.substr(0,c.indexOf("&")):c){var d=a(c);if(d.size()>0){if(d.hasClass("ve-element-anchor")&&(c=d.closest(".ve-slide").find(".ve-anchor").attr("id"),d=a("#"+c)),b)return d;p(d)}}else{if(b)return null;p(a(".ve-slide.first .ve-anchor:not(.no-js)"))}}function l(){a(".ve-base-embed iframe").each(function(b,c){c=a(c),c.removeAttr("height style width"),c.is(".ve-base-small, .ve-base-medium, .ve-base-large")||c.addClass("ve-base-medium")})}function m(){require(["smartmenus"],function(){require(["smartmenus_keyboard"],function(){a(".nav_primary>ul").smartmenus({mainMenuSubOffsetX:-1,mainMenuSubOffsetY:4,subMenusSubOffsetX:6,subMenusSubOffsetY:-6,subMenusMaxWidth:null,subMenusMinWidth:null}),a("#settings-menu").smartmenus({mainMenuSubOffsetX:-62,mainMenuSubOffsetY:4,subMenusSubOffsetX:0,subMenusSubOffsetY:-6,subMenusMaxWidth:null,subMenusMinWidth:null}),a(".js-hack-smartmenu a").click(function(){var b=a(this).attr("href");"#"!=b&&(window.location=a(this).attr("href"))}),a(".nav_primary>ul").smartmenus("keyboardSetHotkey","123","shiftKey"),a("#settings-menu").smartmenus("keyboardSetHotkey","123","shiftKey")})})}function n(){var c=a.Deferred();return d()?(require(["ScrollMagic","TweenMax"],function(d){require(["gsap"],function(){J.removeScene(C),C=[];var e=y.size()>0,f=z.size()>0;if((f||e)&&(B||(a(".ve-intro-full-description").removeClass("intro-disabled"),C.push(new d.Scene({triggerElement:x,triggerHook:"onLeave",duration:e?1.2*D:D}).setTween(TweenMax.to(x.find(K),1,{opacity:0,ease:Cubic.easeOut})).addTo(J)),C.push(new d.Scene({triggerElement:x,triggerHook:"onLeave",duration:e?1.2*D:D}).setTween(TweenMax.to(a(".ve-base-intro-texts .ve-branding"),1,{opacity:0,ease:Cubic.easeOut})).addTo(J)))),!B&&f)C.push(new d.Scene({triggerElement:x,triggerHook:"onLeave",duration:D}).setPin(x[0]).setTween(TweenMax.to(x.find(".ve-intro"),1.25,{delay:.25,width:L.ve_image_column_width,ease:Cubic.easeOut,minHeight:"60vh"})).addTo(J)),C.push(new d.Scene({triggerElement:x,triggerHook:"onLeave",duration:2*D}).setTween(TweenMax.fromTo(x.find(".ve-intro-full-description"),1,{opacity:0},{opacity:1,delay:.25,ease:Cubic.easeOut})).addTo(J));else if(!B&&e){var g=x.find(".ve-intro-full-description"),h=a(".page_header").height(),i=y.height();C.push(new d.Scene({triggerElement:y,triggerHook:0,duration:D/1.1,reverse:!0,offset:h}).setPin(y[0]).addTo(J).on("progress",function(a){var b=a.progress;y.css("filter","grayScale("+b+")"),y.css("-webkit-filter","grayScale("+b+")")})),C.push(new d.Scene({triggerElement:y,triggerHook:0,duration:D/1.1,reverse:!0}).addTo(J).setTween(TweenMax.fromTo(g,1,{top:i},{top:D/1.1+(i-g.height())/2,ease:Cubic.easeIn})))}else b("first slide is not an intro!");a(".ve-base-title-image-text").each(function(b,c){c=a(c);var e=a(c).find(".ve-image"),f=a(c).find(".ve-base-quote"),g=a(c).find(".ve-col-50-left").height(),h=a(c).find(".ve-col-50-right").height(),i=Math.abs(g-h),j=e.closest(".ve-col-50-left").size()>0;j&&h>g||!j&&g>h?i>100&&C.push(new d.Scene({triggerElement:c[0],triggerHook:0,duration:i+30,reverse:!0}).setPin(e[0]).addTo(J)):f.size()>0&&f.height()<i&&(j&&g>h||!j&&h>g)&&C.push(new d.Scene({triggerElement:c[0],triggerHook:0,reverse:!0,duration:i}).setPin(f[0]).setTween(TweenMax.fromTo(f[0],1,{opacity:0},{opacity:1,ease:Cubic.easeIn})).addTo(J))}),c.resolve()})}),c):(c.resolve(),c)}function o(){var b=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,c=a("header").height(),d=a(a(".ve-anchor").get(0)).height(),e=b?-1:4,f=0-c+(d-e);a(".ve-anchor").not(":first").css("top",f)}function p(b,c){if(0==b.size())return!1;H=!0;var d=function(){a(window).scrollTo(b,c?G/2:G,{onAfter:function(){H=!1}})};return c||a(".ve-progress-nav a:first .ve-state-button").hasClass("ve-state-button-on")?a(window).scrollTo(b,c?G/2:G,{axis:"y",easing:"linear",offset:0-a(window).height()/2,onAfter:function(){d()}}):d(),!0}function q(b){var c=a(".ve-progress-nav .ve-state-button-on").parent(),d=b?c.prev("a"):c.next("a");return d.attr("href")}function r(){a(".slide-nav-next").not(":first").hide(),a(".slide-nav-next:first").css("position","fixed"),a(".slide-nav-next:first").on("click",function(b){if(J){var c=q();p(a(c)),b.preventDefault()}})}function s(){var b=[],c=a(".ve-foyer-card-state .text-box.description:not(.js-ellipsis)"),d=[];c.each(function(){a(this).addClass("js-ellipsis"),d.push(a(this))}),d.length>0&&require(["util_ellipsis"],function(c){for(var e=c.create(a(d)),f=0;f<e.length;f++)b.push(e[f])})}function t(){function b(a){var b=this;b.stateIndex=0,b.cardStates=a.find(".ve-foyer-card-state"),b.label=a.find(".ve-label"),b.$el=a,a.find(".ve-card-nav-left").on("click",function(){b.left()}),a.find(".ve-card-nav-right").on("click",function(){b.right()}),this.prepNextShift()}b.prototype.updateButton=function(a){this.$el.find(".ve-state-button-on").removeClass("ve-state-button-on").addClass("ve-state-button-off"),this.$el.find(".ve-state-"+a).removeClass("ve-state-button-off").addClass("ve-state-button-on")},b.prototype.prepNextShift=function(b){var c=this.stateIndex==this.states.length-1?0:this.stateIndex+1,d=0==this.stateIndex?this.states.length-1:this.stateIndex-1;c=a(this.cardStates.get(c)),d=a(this.cardStates.get(d)),c.hasClass("hide-left")&&c.removeClass("animating hide-left").addClass("hide-right"),d.hasClass("hide-right")&&d.removeClass("animating hide-right").addClass("hide-left")},b.prototype.shiftState=function(b){var c=a(this.cardStates.get(this.stateIndex));c.addClass("animating "+(b>0?"hide-left":"hide-right"));var d=this.stateIndex+b;d==this.states.length?d=0:0>d&&(d=this.states.length-1),this.stateIndex=d,0==this.stateIndex?this.label.show():this.label.hide();var e=a(this.cardStates.get(this.stateIndex));e.removeClass("animating"),b>0?(e.addClass("hide-right").removeClass("hide-left"),e.addClass("animating"),e.removeClass("hide-right")):(e.addClass("hide-left").removeClass("hide-right"),e.addClass("animating"),e.removeClass("hide-left")),this.prepNextShift(),this.updateButton(this.stateIndex)},b.prototype.left=function(){this.shiftState(-1)},b.prototype.right=function(){this.shiftState(1)},b.prototype.states=["title","description","credits"],a(".ve-foyer-card").each(function(){new b(a(this))})}function u(){a(".ve-progress-nav a").each(function(b,c){c=a(c);var d,e=a(c.attr("href")),f=e.closest(".ve-slide"),g=c.find(".speech-bubble .speech-bubble-inner"),h=f.find(".ve-base-image"),i=f.find(".ve-intro"),j=f.find(".ve-base-title-image-text"),k=f.find(".ve-base-quote"),l=f.find(".ve-base-embed"),m=f.find(".image-compare");i.size()>0?(d=i.css("background-image"),d=d.replace(/^url\(["']?/,"").replace(/["']?\)$/,"")):h.size()>0?d=h.find("img").attr("src"):j.size()>0?d=j.find("img").attr("src"):m.size()>0?d=m.find(">img").attr("src"):k.size()>0?g.html('<span style="white-space:nowrap">"Quote..."</span>'):l.size()>0&&g.html('<span style="white-space:nowrap">Embed</span>'),d&&g.html('<img src="'+d+'">')})}function v(){var c=a.Deferred();return d()?(require(["ScrollMagic","TweenMax","jqScrollto"],function(d){require(["gsap"],function(){function e(c){a(".ve-progress-nav .ve-state-button-on").removeClass("ve-state-button-on").addClass("ve-state-button-off");var d=a(".ve-progress-nav .ve-state-button").get(c);if(d=a(d),d.addClass("ve-state-button-on").removeClass("ve-state-button-off"),F&&!H){b("pushing state...  not scrolling and pageInitComplete ");var e=d.closest("a").attr("href");window.history.pushState({},"",e)}}J=new d.Controller,a(".ve-slide-container section").each(function(a,b){new d.Scene({triggerElement:this,triggerHook:"onCenter"}).on("progress",function(b){"FORWARD"===b.scrollDirection&&e(a)}).addTo(J),new d.Scene({triggerElement:this,triggerHook:"onLeave"}).on("progress",function(b){"REVERSE"===b.scrollDirection&&e(a)}).addTo(J)}),new d.Scene({triggerElement:"#ve-end",triggerHook:"onEnter"}).addTo(J).setTween(TweenMax.to(".ve-progress-nav",1,{right:"-1em",ease:Cubic.easeOut})).on("enter",function(){I=!1,a(".slide-nav-next:first").hide()}).on("leave",function(){I=!0,a(".slide-nav-next:first").show()}),a(".ve-progress-nav a").on("click",function(b){b.preventDefault();var c=a(this).attr("href");window.history.pushState({},"",c),p(a(c))}),g(),c.resolve()})}),c):(b("too small for scroll-magic"),c.resolve(),c)}var w=!1,x=a(".ve-slide.first"),y=a(".ve-exhibition .ve-slide.first .ve-intro"),z=a(".ve-chapter .ve-slide.first .ve-intro"),A=a.url(),B="ontouchstart"in document.documentElement&&window.orientation,C=[],D=400;A.param("introDuration")&&(A.param("introDuration")==parseInt(A.param("introDuration"))+""?D=parseInt(A.param("introDuration")):alert("introDuration has to be an int - using default ("+D+")"));var E=!1,F=!1,G=1400;A.param("scrollDuration")&&(A.param("scrollDuration")==parseInt(A.param("scrollDuration"))+""?G=parseInt(A.param("scrollDuration")):alert("scrollDuration has to be an int - using default ("+G+")"));var H=!1,I=!0,J=null,K=".ve-base-intro-texts .ve-title-group, .ve-base-intro-texts .ve-description, .ve-base-intro-texts .ve-image-credit",L={ve_image_column_width:"75%"};return{initPage:function(){c()}}});