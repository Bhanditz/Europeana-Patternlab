window.GoogleAnalyticsObject="__ga__",window.__ga__={q:[["create","UA-12776629-1","auto"]],l:Date.now()},require.config({paths:{aurora:"../lib/audiocogs/aurora",blacklight:"../lib/blacklight/blacklight_all",channels:"../eu/channels",eu_carousel:"../eu/eu-carousel",eu_carousel_appender:"../eu/eu-carousel-appender",eu_hierarchy:"../eu/eu-hierarchy",featureDetect:"../global/feature-detect",flac:"../lib/audiocogs/flac",ga:"//www.google-analytics.com/analytics",global:"../eu/global",hotjar:"../lib/hotjar",leaflet:"../application-map",leaflet_iiif:"../lib/iiif/leaflet-iiif",jqDropdown:"../lib/jquery.dropdown",jquery:"../lib/jquery",jqScrollto:"../lib/jquery.scrollTo",jsTree:"../lib/jstree/jstree",media_controller:"../eu/media/search-media-controller",media_viewer_iiif:"../eu/media/search-iiif-viewer",media_viewer_pdf:"../eu/media/search-pdf-ui-viewer",media_viewer_image:"../eu/media/search-image-viewer",media_viewer_videojs:"../eu/media/search-videojs-viewer",media_player_midi:"../eu/media/search-midi-player",media_player_oembed:"../eu/media/search-oembed-viewer",menus:"../global/menus",midi_dom_load_xmlhttp:"../lib/midijs/DOMLoader.XMLHttp",midi_dom_load_script:"../lib/midijs/DOMLoader.script",midi_audio_detect:"../lib/midijs/MIDI.audioDetect",midi_load_plugin:"../lib/midijs/MIDI.loadPlugin",midi_plugin:"../lib/midijs/MIDI.Plugin",midi_player:"../lib/midijs/MIDI.Player",midi_widget_loader:"../lib/midijs/Widgets.Loader",midi_stream:"../lib/midijs/stream",midi_file:"../lib/midijs/midifile",midi_replayer:"../lib/midijs/replayer",midi_vc_base64:"../lib/midijs/VersionControl.Base64",midi_base64:"../lib/midijs/base64binary",NOFlogger:"../lib/904Labs/904-logger",NOFremote:"../lib/904Labs/noflogging-0.2.min",pdfjs:"../lib/pdfjs/pdf",pdf_ui:"../lib/pdfjs/pdf-ui",pdf_lang:"../lib/pdfjs/l10n",purl:"../lib/purl/purl",photoswipe:"../lib/photoswipe/photoswipe",photoswipe_ui:"../lib/photoswipe/photoswipe-ui-default",pinterest:"http://assets.pinterest.com/js/pinit_main",util_ellipsis:"../eu/util/ellipsis",util_foldable:"../eu/util/foldable-list",util_resize:"../eu/util/resize",util_scrollEvents:"../eu/util/scrollEvents",settings:"../eu/settings",search_landing:"../eu/channel-landing",search_form:"../eu/search-form",search_home:"../eu/search-home",search_object:"../eu/search-object",search_results:"../eu/search-results",smartmenus:"../lib/smartmenus/jquery.smartmenus",smartmenus_keyboard:"../lib/smartmenus/keyboard/jquery.smartmenus.keyboard",touch_move:"../lib/jquery.event.move",touch_swipe:"../lib/jquery.event.swipe",videojs:"//vjs.zencdn.net/4.12/video",videojs_aurora:"../lib/videojs-aurora/videojs-aurora",videojs_silverlight:"../lib/videojs-silverlight/videojs-silverlight"},shim:{blacklight:["jquery"],featureDetect:["jquery"],jqDropdown:["jquery"],menus:["jquery"],placeholder:["jquery"],smartmenus:["jquery"],ga:{exports:"__ga__"}}}),require(["jquery"],function(a){a.holdReady(!0),require(["blacklight"],function(b){require(["channels","global"],function(b){a.holdReady(!1),a("html").addClass("styled"),require(["ga"],function(a){b.getPromisedPageJS().done(function(b){if(b&&"undefined"!=typeof b.getAnalyticsData)for(var c=b.getAnalyticsData(),d=0;d<c.length;d++)"undefined"!=c[d].name&&a("set",c[d].dimension,c[d].name);a("send","pageview")})});var c=window.location.href;c.indexOf("europeana.eu")>-1&&require(["hotjar"],function(){}),a(".pinit").length>0&&require(["pinterest"],function(){b.getPromisedPageJS().done(function(b){if(b&&"undefined"!=typeof b.getPinterestData){var c=b.getPinterestData();if(c){var d=a(".pinit");d.on("click",function(){0==a(".tmp-pinterest").size()&&(a("body").append('<div id="tmp-pinterest-container" style="width:0px; overflow:hidden;">'),a(".object-media-nav .mlt-img-div").each(function(b,c){var d=a(c).css("background-image").replace("url(","").replace(")","");"none"!=d&&a("#tmp-pinterest-container").append("<img src="+d+' class="tmp-pinterest" style="position: absolute; top: 2000px;"/>')})),0==a(".tmp-pinterest").size()?PinUtils.pinOne({media:c.media?c.media:"http://styleguide.europeana.eu/images/europeana-logo-collections.svg",description:c.desc?c.desc:"Europeana Record"}):PinUtils.pinAny()})}}})})})})});