define([],function(){"use strict";function a(a){console.log("midi-player: "+a)}var b,c=require.toUrl("../lib/midijs/style/MIDIPlayer.css"),d=$("#capsule"),e=$("#capsule #cursor"),f=$("#time1"),g=$("#time2"),h=!1,i=function(a){$("head").append('<link rel="stylesheet" href="'+c+'" type="text/css"/>'),b?b.loadFile(a,b.start):require(["touch_move","touch_swipe"],function(){require(["midi_dom_load_xmlhttp","midi_dom_load_script"],function(){require(["midi_audio_detect","midi_load_plugin","midi_plugin","midi_player","midi_widget_loader"],function(){require(["midi_stream","midi_file","midi_replayer"],function(){require(["midi_vc_base64","midi_base64"],function(){var c=function(a){a?(b.stop(),$("#pause-play-midi").removeClass("playing")):b.playing?($("#pause-play-midi").removeClass("playing"),b.pause(!0)):($("#pause-play-midi").addClass("playing"),b.resume())},i=function(a){var b=a/60>>0,c=String(a-60*b>>0);return 1==c.length&&(c="0"+c),b+":"+c};$(document).ready(function(){$("#pause-play-midi").click(function(){c()}),$("#stop-midi").click(function(){c(!0)}),$("#midi-volume").on("change",function(){var a=$(this).val(),c=b.playing;"normal"!=MIDI.volume_scheme&&(a=2*a-100),b.pause(!0),MIDI.setVolume(parseFloat(a/100)),c&&b.resume()});var k=function(a,c){var h=d.width(),j=100*parseFloat(a/h);e.css("width",j+"%"),j>=100&&(f.html(f.data("end")),g.html("-"+i(0))),c||(b.currentTime=b.endTime/100*j,b.playing&&b.resume())};d.on("click",function(a){k(a.pageX-$(a.target).offset().left)}),$("#capsule").on("movestart",function(a){var b=($(a.target),a.distX>a.distY&&a.distX<-a.distY||a.distX<a.distY&&a.distX>-a.distY);return b?void a.preventDefault():void(h=!0)}).on("move",function(a){a.stopPropagation(),k(a.pageX-$(a.target).offset().left,!0)}).on("moveend",function(a){a.stopPropagation(),k(a.pageX-$(a.target).offset().left),h=!1}),MIDI.soundfont_mp3_url=require.toUrl("../lib/midijs/soundfont/soundfont-mp3.js"),MIDI.soundfont_ogg_url=require.toUrl("../lib/midijs/soundfont/soundfont-ogg.js"),MIDI.volume_scheme="normal",MIDI.loadPlugin(function(){b=MIDI.Player,b.timeWarp=1,b.loadFile(a,b.start),j(b)})});var j=function(a){a.setAnimation(function(a,b){if(!h){var c=a.now/a.end,d=a.now>>0,j=a.end>>0;e.css("width",100*c+"%"),f.data("end")||f.data("end",i(a.end)),f.html(i(d)),g.html("-"+i(Math.max(0,j-d)))}})}})})})})})},j=function(){a("hide (TODO)")},k=function(){a("show (TODO)")};return{init:function(a){i(a)},hide:function(){j()},show:function(){k()}}});