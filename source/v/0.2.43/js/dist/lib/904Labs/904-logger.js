define([],function(){var a=function(){alert("init904 "+window.NOFLogging_ready),window.NOFLogging_ready=window.NOFLogging_ready||[],console.log("push window.NOFLogging_ready"),window.NOFLogging_ready.push(function(){alert("window.NOFLogging_read");var a={api_url:"http://analytics.904labs.com",project_key:"c6k2l3csHzhHlRMIEEyVPCEERcSDSozQDf1IPk0rfhg",log_mouse_movements:!1,log_mouse_clicks:!1,post_events_queue_on_browser_close:!0,log_browser_close:!0,debug:!1};NOFLogging.init(a,function(){alert("bind bu"),$(window).bind("beforeunload",function(a){var b="Why are you leaving?";return a.returnValue=b,alert(b),b});var a=function(a,b){var c=$.url(a),d=c.param("q"),e=c.param("qf");if(e||d){var f=c.param("qf"),g=c.param("rows"),h={NTW:1==window.history.length};if(g&&(h.rows=g),b&&(h.saved_search=!0),f){f=f instanceof Array?f:[f];for(var i={},j=0;j<f.length;j++){var k=f[j].replace(/http:\/\//g,"").split(":"),l=k[0],m=k.length>1?k[1]:"";0==m.length&&(m=l,l="refinements"),"RIGHTS"==l&&(m="http://"+m),i[k[0]]?i[l].push(m):i[l]=[m]}h.facets=i}console.error("NOFLogging.query "+h)}};$(".search-multiterm").submit(function(b){var c="http://x.com/?q="+encodeURIComponent($(".search-input").val());a(c)}),$('#language-settings form input[type="submit"]').click(function(){var a=NOFLogging.getState();a.portal_language=eu.europeana.vars.NOF_languageItem?eu.europeana.vars.NOF_languageItem:"en",a.portal_translate_keywords=$('#keyword-languages input[type="checkbox"]:checked').map(function(a,b){return $(b).val()}).get(),NOFLogging.setState(a)}),$("#saved-searches a").click(function(b){var c=$(this).attr("href");a(c,!0)});var b=null,c=null,d=null,e=window.location.href.split("record/")[1].split(".html")[0],f=function(){if(null!=d){var a=$.url(d);d=parseInt(a.param("start"))}null!=b&&null!=c&&NOFLogging.logEvent(c,{to:b,to_rank:d,from:e})};$("#navigation li:nth-child(1) a").click(function(){var a=$(this).attr("href"),b=$.url(a),c=parseInt(b.param("start")?b.param("start"):1);c=Math.ceil(c/eu.europeana.vars.rows),NOFLogging.logEvent("return_to_results",{results_page:c,rows:parseInt(eu.europeana.vars.rows)})}),$("#navigation li a.pagination-previous").click(function(){b=$(this).attr("href"),d=$(this).attr("href"),b=b.split("record/")[1].split(".html")[0],c="prev_result",f()}),$("#navigation li a.pagination-next").click(function(){b=$(this).attr("href"),d=$(this).attr("href"),b=b.split("record/")[1].split(".html")[0],c="next_result",f()});var g=function(){var a=[];return $(".thumb-frame>a").each(function(){var b=$(this).attr("href");b=/\/record\/([^;]+).html/.exec(b)[1],a.push(b)}),a};NOFLogging.queryResults(g(),eu.europeana.vars.msg.result_count,$(".thumb-frame").length),$(".nav-next a").add(".nav-prev a").add(".nav-first a").add(".nav-last a").click(function(a){var b=$(a.target).attr("href"),c=$.url(b).param("start"),d=Math.ceil(eu.europeana.vars.msg.start/eu.europeana.vars.rows),e=Math.ceil(c/eu.europeana.vars.rows);NOFLogging.paginate(e,d)}),$(".jump-to-page").submit(function(a){var b=Math.ceil(eu.europeana.vars.msg.start/eu.europeana.vars.rows),c=$(a.target).find("#start-page").val();c&&"number"==typeof parseInt(c)?NOFLogging.paginate(parseInt(c),b):js.console.log("not a number = "+c)}),$(".thumb-frame").add(".thumb-frame + a").click(function(a){var b=$(a.target).closest(".li").find("a").attr("href"),c=$.url(b),d=parseInt(c.param("start")?c.param("start"):1);b=b.split("record/")[1].split(".html")[0],NOFLogging.logEvent("clicked_result",{url:b,rank:d})}),$("#facets-actions li input[type=checkbox]").click(function(b){var c=("LABEL"==$(b.target)[0].nodeName.toUpperCase()?$(b.target).closest("a"):$(b.target).next("a")).attr("href");a(c),b.stopPropagation()}),$("#search-filter a").add("#search-filter a span").click(function(b){var c=("SPAN"==$(b.target)[0].nodeName.toUpperCase()?$(b.target).closest("a"):$(b.target)).attr("href");a(c),b.stopPropagation()}),$("#refine-search-form").submit(function(b){var c="&qf="+encodeURIComponent($("#refine-search-form #newKeyword").val());a(window.location.href+c)});var h=NOFLogging.getState(),i=function(){h.portal_language="en",h.portal_translate_keywords=[],NOFLogging.setState(h)};if(!eu.europeana.vars.NOF.user&&h.user_id&&(i(),NOFLogging.userLogout()),h.user_id||i(),eu.europeana.vars.NOF.user){if(!NOFLogging.getState().user_id){var j=eu.europeana.vars.NOF.username,h=NOFLogging.getState();h.portal_language=eu.europeana.vars.NOF.portal_language,h.portal_translate_keywords=eu.europeana.vars.NOF.portal_translate_keywords?eu.europeana.vars.NOF.portal_translate_keywords:[],NOFLogging.setState(h),NOFLogging.userLogin(j)}}else{var h=NOFLogging.getState();"undefined"!=typeof $.cookie("portalLanguage")&&(h.portal_language=$.cookie("portalLanguage")),"undefined"!=typeof $.cookie("keywordLanguagesApplied")&&"true"==$.cookie("keywordLanguagesApplied")&&"undefined"!=typeof $.cookie("keywordLanguages")&&(h.portal_translate_keywords=$.cookie("keywordLanguages").split("|"))}$('a[href="logout.html"]').click(function(){i(),NOFLogging.userLogout()})})})};return{init904:function(){a()}}});