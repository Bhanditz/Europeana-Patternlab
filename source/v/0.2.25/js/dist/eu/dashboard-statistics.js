Site_DASHBOARD={common:{init:function(){require(["smartmenus"],function(){require(["smartmenus_keyboard"],function(){$(".nav_primary>ul").smartmenus({mainMenuSubOffsetX:-1,mainMenuSubOffsetY:4,subMenusSubOffsetX:6,subMenusSubOffsetY:-6,subMenusMaxWidth:null,subMenusMinWidth:null}),$(".nav_primary>ul").smartmenus("keyboardSetHotkey","123","shiftKey")})})},finalize:function(){}},page_dashboard:{init:function(){require(["graphs"],function(){$("head").append('<link rel="stylesheet" href="'+require.toUrl("../lib/graphs/style/graphs.css")+'" type="text/css"/>')})}}},UTIL={fire:function(a,b,c){var d=Site_DASHBOARD;b=void 0===b?"init":b,""!==a&&d[a]&&"function"==typeof d[a][b]&&d[a][b](c)},loadEvents:function(){UTIL.fire("common"),$.each(document.body.className.split(/\s+/),function(a,b){UTIL.fire(b)}),UTIL.fire("common","finalize")}},UTIL.loadEvents();