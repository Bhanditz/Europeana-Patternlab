define(["jquery"],function(a){a("head").append('<link rel="stylesheet" href="'+require.toUrl("../eu/feedback/style.css")+'" type="text/css"/>');var b=function(a){console.log("eu-feedback: "+a)},c=function(c){var d=c.find(".feedback-toggle .open"),e=c.find(".feedback-toggle .close"),f=c.find(".feedback-counter"),g=c.find(".feedback-spinner"),h=c.find(".feedback-send"),i=c.find(".feedback-text"),j=0;d.on("click",function(){c.addClass("open"),e.addClass("visible"),d.removeClass("visible")}),e.on("click",function(){c.removeClass("open"),d.addClass("visible"),e.removeClass("visible"),b("delay"),c.find(".step1").delay(200).show(0),c.find(".step2").delay(200).hide(0),c.find(".feedback-error").delay(200).hide(0)}),h.on("click",function(){if(0==i.val().length)return i.addClass("error"),void f.addClass("error");g.show();var b=c.find("form").attr("action"),d={type:c.find("input[name=type]:checked").val(),text:i.val(),page:window.location.href};a.ajax({url:b,type:"POST",data:d,success:function(a){g.hide(),c.find(".step1").hide(),c.find(".step2").show(),i.val("")},error:function(a){setTimeout(function(){c.find(".feedback-error").show(),c.find(".step1").hide(),g.hide()},2e3)}})}),c.find(".pageurl").val(window.location.href),j=parseInt(f.data("maxlength")),f.html(j-i.val().length),i.on("keyup",function(){f.html(j-i.val().length),i.removeClass("error"),f.removeClass("error")})};return{init:function(a){new c(a)}}});