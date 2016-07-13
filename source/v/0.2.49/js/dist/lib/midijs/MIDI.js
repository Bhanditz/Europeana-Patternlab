if("undefined"==typeof MIDI)var MIDI={};if(function(){"use strict";var a={},b=0,c=function(c){b++;var d=new Audio,e=c.split(";")[0];d.id="audio",d.setAttribute("preload","auto"),d.setAttribute("audiobuffer",!0),d.addEventListener("error",function(){a[e]=!1,b--},!1),d.addEventListener("canplaythrough",function(){a[e]=!0,b--},!1),d.src="data:"+c,document.body.appendChild(d)};MIDI.audioDetect=function(d){if(navigator.requestMIDIAccess){var e=Function.prototype.toString.call(navigator.requestMIDIAccess).indexOf("[native code]");if(e)a.webmidi=!0;else for(var f=0;navigator.plugins.length>f;f++){var g=navigator.plugins[f];g.name.indexOf("Jazz-Plugin")>=0&&(a.webmidi=!0)}}if("undefined"==typeof Audio)return d({});a.audiotag=!0,(window.AudioContext||window.webkitAudioContext)&&(a.webaudio=!0);var h=new Audio;if("undefined"==typeof h.canPlayType)return d(a);var i=h.canPlayType('audio/ogg; codecs="vorbis"');i="probably"===i||"maybe"===i;var j=h.canPlayType("audio/mpeg");if(j="probably"===j||"maybe"===j,!i&&!j)return void d(a);i&&c("audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA="),j&&c("audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");var k=(new Date).getTime(),l=window.setInterval(function(){var c=(new Date).getTime(),e=c-k>5e3;b&&!e||(window.clearInterval(l),d(a))},1)}}(),"undefined"==typeof MIDI)var MIDI={};if("undefined"==typeof MIDI.Player&&(MIDI.Player={}),function(){"use strict";var a=MIDI.Player;a.callback=void 0,a.currentTime=0,a.endTime=0,a.restart=0,a.playing=!1,a.timeWarp=1,a.startDelay=0,a.BPM=120,a.start=a.resume=function(b){a.currentTime<-1&&(a.currentTime=-1),l(a.currentTime,null,b)},a.pause=function(){var b=a.restart;m(),a.restart=b},a.stop=function(){m(),a.restart=0,a.currentTime=0},a.addListener=function(a){g=a},a.removeListener=function(){g=void 0},a.clearAnimation=function(){a.interval&&window.clearInterval(a.interval)},a.setAnimation=function(b){var c="function"==typeof b?b:b.callback,d=b.interval||30,e=0,g=0,h=0;a.clearAnimation(),a.interval=setInterval(function(){if(0!==a.endTime){a.playing?(e=h===a.currentTime?g-(new Date).getTime():0,e=0===a.currentTime?0:a.currentTime-e,h!==a.currentTime&&(g=(new Date).getTime(),h=a.currentTime)):e=a.currentTime;var b=a.endTime,d=e/1e3,i=d/60,j=d-60*i,k=60*i+j,l=b/1e3;-1>l-k||c({now:k,end:l,events:f})}},d)},a.loadMidiFile=function(b){a.replayer=new Replayer(MidiFile(a.currentData),a.timeWarp,null,a.BPM),a.data=a.replayer.getData(),a.endTime=j(),MIDI.loadPlugin({instruments:a.getFileInstruments(),callback:b})},a.loadFile=function(b,c){if(a.stop(),-1!==b.indexOf("base64,")){var d=window.atob(b.split(",")[1]);return a.currentData=d,void a.loadMidiFile(c)}var e=new XMLHttpRequest;e.open("GET",b),e.overrideMimeType("text/plain; charset=x-user-defined"),e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){for(var b=this.responseText||"",d=[],e=b.length,f=String.fromCharCode,g=0;e>g;g++)d[g]=f(255&b.charCodeAt(g));var h=d.join("");a.currentData=h,a.loadMidiFile(c)}},e.send()},a.getFileInstruments=function(){for(var b={},c={},d=0;d<a.data.length;d++){var e=a.data[d][0].event;if("channel"===e.type){var f=e.channel;switch(e.subtype){case"controller":break;case"programChange":c[f]=e.programNumber;break;case"noteOn":var g=c[f],h=MIDI.GM.byId[isFinite(g)?g:f];b[h.id]=!0}}}var i=[];for(var j in b)i.push(j);return i};var b,c,d=[],e=0,f={},g=void 0,h=function(c,e,h,i,j,k,m){return setTimeout(function(){var i={channel:c,note:e,now:h,end:a.endTime,message:j,velocity:k};128===j?delete f[e]:f[e]=i,g&&g(i),a.currentTime=h,d.shift(),d.length<1e3?l(b,!0):a.currentTime===b&&b<a.endTime&&l(b,!0)},h-i)},i=function(){return"WebAudioAPI"===MIDI.lang?MIDI.Player.ctx:(a.ctx||(a.ctx={currentTime:0}),a.ctx)},j=function(){for(var b=a.data,c=b.length,d=.5,e=0;c>e;e++)d+=b[e][1];return d},k=function(){return window.performance&&window.performance.now?window.performance.now():Date.now()},l=function(f,g,l){if(a.replayer){g||("undefined"==typeof f&&(f=a.restart),a.playing&&m(),a.playing=!0,a.data=a.replayer.getData(),a.endTime=j());var n,o=0,p=0,q=a.data,r=i(),s=q.length;b=.5;var t=(d[0]&&d[0].interval||0,f-a.currentTime);if("webaudio"!==MIDI.api){var u=k();c=c||u,r.currentTime=(u-c)/1e3}e=r.currentTime;for(var v=0;s>v&&100>p;v++){var w=q[v][1];if((b+=w)<=f)o=b;else{f=b-o;var x=q[v][0].event;if("channel"===x.type){var y=x.channel,z=MIDI.channels[y],A=r.currentTime+(f+t+a.startDelay)/1e3,B=b-o+a.startDelay;switch(x.subtype){case"controller":MIDI.setController(y,x.controllerType,x.value,A);break;case"programChange":MIDI.programChange(y,x.programNumber,A);break;case"pitchBend":MIDI.pitchBend(y,x.value,A);break;case"noteOn":if(z.mute)break;n=x.noteNumber-(a.MIDIOffset||0);var C={event:x,time:B,source:MIDI.noteOn(y,x.noteNumber,x.velocity,A),interval:h(y,n,b+a.startDelay,o-t,144,x.velocity)};d.push(C),p++;break;case"noteOff":if(z.mute)break;n=x.noteNumber-(a.MIDIOffset||0);var C={event:x,time:B,source:MIDI.noteOff(y,x.noteNumber,A),interval:h(y,n,b,o-t,128,0)};d.push(C)}}}}l&&l(d)}},m=function(){var b=i();for(a.playing=!1,a.restart+=1e3*(b.currentTime-e);d.length;){var c=d.pop();window.clearInterval(c.interval),c.source&&("number"==typeof c.source?window.clearTimeout(c.source):c.source.disconnect(0))}for(var h in f){var c=f[h];144===f[h].message&&g&&g({channel:c.channel,note:c.note,now:c.now,end:c.end,message:128,velocity:c.velocity})}f={}}}(),"undefined"==typeof MIDI)var MIDI={};if("undefined"==typeof MIDI.Soundfont&&(MIDI.Soundfont={}),function(a){"use strict";window.AudioContext=window.AudioContext||window.webkitAudioContext,a.DEBUG=!1,a.USE_XHR=!0,a.soundfontUrl="./soundfont/",a.loadPlugin=function(d){"function"==typeof d&&(d={callback:d}),a.soundfontUrl=d.soundfontUrl||a.soundfontUrl,a.audioDetect(function(e){var f=window.location.hash,g="";if(g=e[d.api]?d.api:e[f.substr(1)]?f.substr(1):e.webmidi?"webmidi":window.AudioContext?"webaudio":window.Audio?"audiotag":"flash",c[g]){if(d.targetFormat)var h=d.targetFormat;else var h=e["audio/ogg"]?"ogg":"mp3";a.lang=g,a.supports=e;var i=b(d);c[g](h,i,d)}})};var b=function(b){var c=b.instruments||b.instrument;"object"!=typeof c&&(c=c?[c]:[]);for(var d=0;d<c.length;d++){var e=c[d];"number"==typeof e&&(c[d]=a.GeneralMIDI.byId[e])}return c},c={};c.webmidi=function(b,c,d){a.loader&&a.loader.message("Web MIDI API..."),a.WebMIDI.connect(d)},c.flash=function(b,c,d){a.loader&&a.loader.message("Flash API..."),dom.loadScript.add({url:d.soundManagerUrl||"./inc/SoundManager2/script/soundmanager2.js",verify:"SoundManager",callback:function(){a.Flash.connect(c,d)}})},c.audiotag=function(b,c,e){a.loader&&a.loader.message("HTML5 Audio API...");new Queue({items:c,progress:function(b){a.loader&&c.length&&a.loader.update(null,"Downloading...",100*b>>0)},next:function(a){d(this,a,b)},callback:function(){a.AudioTag.connect(e)}})},c.webaudio=function(b,c,e){a.loader&&a.loader.message("Web Audio API...");new Queue({items:c,progress:function(b){a.loader&&c.length&&a.loader.update(null,"Downloading...",100*b>>0)},next:function(a,c,e,f){d(this,a,b)},callback:function(){a.WebAudio.connect(e)}})};var d=function(b,c,d){var g=a.soundfontUrl+c+"-"+d+".js";MIDI.Soundfont[c]?b.next():a.USE_XHR?dom.request({url:g,onprogress:f,onload:function(a){e({text:a.responseText}),b.next()}}):dom.loadScript.add({url:g,verify:"MIDI.Soundfont['"+c+"']",callback:function(){console.log(MIDI.Soundfont),b.next()}})},e=function(a){var b=document.createElement("script");b.language="javascript",b.type="text/javascript",a.text&&(b.text=a.text),a.src&&(b.src=a.src),document.body.appendChild(b)},f=function(b){this.totalSize||(this.getResponseHeader("Content-Length-Raw")?this.totalSize=parseInt(this.getResponseHeader("Content-Length-Raw")):this.totalSize=b.total);var c=this.totalSize?Math.round(b.loaded/this.totalSize*100):"";a.loader&&a.loader.update(null,"Downloading...",c)}}(MIDI),function(){"use strict";var a=function(a){for(var b in a)MIDI[b]=a[b]};!function(){var b=null,c=null,d=MIDI.WebMIDI={api:"webmidi"};d.send=function(a,b){c.send(a,1e3*b)},d.setController=function(a,b,d,e){c.send([a,b,d],1e3*e)},d.setVolume=function(a,b,d){c.send([176+a,7,b],1e3*d)},d.programChange=function(a,b,d){c.send([192+a,b],1e3*d)},d.pitchBend=function(a,b,d){c.send([224+a,b],1e3*d)},d.noteOn=function(a,b,d,e){c.send([144+a,b,d],1e3*e)},d.noteOff=function(a,b,d){c.send([128+a,b,0],1e3*d)},d.chordOn=function(a,b,d,e){for(var f=0;f<b.length;f++){var g=b[f];c.send([144+a,g,d],1e3*e)}},d.chordOff=function(a,b,d){for(var e=0;e<b.length;e++){var f=b[e];c.send([128+a,f,0],1e3*d)}},d.stopAllNotes=function(){c.cancel();for(var a=0;16>a;a++)c.send([176+a,123,0])},d.connect=function(e){a(d),navigator.requestMIDIAccess().then(function(a){b=a,c=b.outputs()[0],MIDI.loader&&MIDI.loader.stop(),e.callback&&e.callback()},function(a){window.AudioContext?e.api="webaudio":window.Audio?e.api="audiotag":e.api="flash",MIDI.loadPlugin(e)})}}(),window.AudioContext&&function(){var b,c=function(a,b,c){if(d){var e=new Audio;e.src=a,e.controls=!1,e.autoplay=!1,e.preload=!1,e.addEventListener("canplay",function(){callback(e)}),e.addEventListener("error",function(a){console.log(a)}),document.body.appendChild(e)}else if(0===a.indexOf("data:audio")){var f=a.split(",")[1],g=Base64Binary.decodeArrayBuffer(f),h=MIDI.Player.ctx;h.decodeAudioData(g,b,c)}else{var i=new XMLHttpRequest;i.open("GET",a,!0),i.responseType="arraybuffer",i.onload=function(){var a=MIDI.Player.ctx;a.decodeAudioData(i.response,b,c)},i.send()}},d=(new AudioContext,!1),e=MIDI.WebAudio={api:"webaudio"},f={},g=127,h={},i=function(a,b,d,e,f,g){var i=MIDI.Soundfont[b];if(i.isLoaded)return g(b);var j=MIDI.GM.byName[b],k=j.number,l=d[e],m=MIDI.Soundfont[b][l];if(!m)return g(b);var n=function(a){console.log(a)},o=function(a){for(var c=l;c.length<3;)c+="&nbsp;";if("undefined"!=typeof MIDI.loader&&MIDI.loader.update(null,j.instrument+"<br>Processing: "+(e/87*100>>0)+"%<br>"+c),a.id=l,f[e]=a,f.length===d.length){for(;f.length;)if(a=f.pop()){var m=MIDI.keyToNote[a.id];h[k+""+m]=a}i.isLoaded=!0,g(b)}},p=i[l];c(p,o,n)};e.send=function(a,b){},e.setController=function(a,b,c,d){},e.setVolume=function(a,b,c){setTimeout(function(){g=b},c||0)},e.programChange=function(a,b,c){setTimeout(function(){var c=MIDI.channels[a];c.instrument=b},c||0)},e.pitchBend=function(a,b,c){setTimeout(function(){var c=MIDI.channels[a];c.pitchBend=b},c||0)},e.noteOn=function(a,c,i,j){var k=MIDI.getChannel(a),l=k.instrument,m=l+""+c,n=h[m];if(!n)return void(MIDI.DEBUG&&console.log("missing instrument",l,MIDI.GM.byId[l]));if(j<b.currentTime&&(j+=b.currentTime),d)var o=b.createMediaElementSource(n);else{var o=b.createBufferSource();o.buffer=n}e.ff&&o.connect(e.ff.input),f[a+""+c]=o,o.connect(b.destination),o.gainNode=b.createGain();var p=i/127*(g/127)*2-1;return o.gainNode.connect(b.destination),o.gainNode.gain.value=Math.min(1,Math.max(-1,p)),o.connect(o.gainNode),d?setTimeout(function(){n.currentTime=0,n.play()},1e3*(j||0)):o.noteOn?o.noteOn(j||0):o.start(j||0),o},e.noteOff=function(a,c,e){var g=MIDI.getChannel(a);if(g){var i=g.instrument,j=i+""+c,k=h[j];if(k){e=e||0,e<b.currentTime&&(e+=b.currentTime);var l=f[a+""+c];if(l){if(l.gainNode){var m=l.gainNode.gain;m.linearRampToValueAtTime(m.value,e),m.linearRampToValueAtTime(-1,e+.4)}d?setTimeout(function(){k.pause()},1e3*e):l.noteOff?l.noteOff(e+.5):l.stop(e+.5),delete f[a+""+c]}}}},e.chordOn=function(a,b,c,d){for(var f,g={},h=0,i=b.length;i>h;h++)g[f=b[h]]=e.noteOn(a,f,c,d);return g},e.chordOff=function(a,b,c){for(var d,f={},g=0,h=b.length;h>g;g++)f[d=b[g]]=e.noteOff(a,d,c);return f},e.stopAllNotes=function(){for(var a in f){var c=0;c<b.currentTime&&(c+=b.currentTime),f[a].gain.linearRampToValueAtTime(1,c),f[a].gain.linearRampToValueAtTime(0,c+.2),f[a].noteOff(c+.3),delete f[a]}},e.connect=function(c){a(e),null==MIDI.Player.ctx?MIDI.Player.ctx=b=new AudioContext:b=MIDI.Player.ctx,b.createScriptProcessor||(b.createScriptProcessor=b.createJavaScriptNode),b.createDelay||(b.createDelay=b.createDelayNode),b.createGain||(b.createGain=b.createGainNode);var d=[],f=MIDI.keyToNote;for(var g in f)d.push(g);var h=[],j={},k=function(a){delete j[a];for(var b in j)break;b||(MIDI.loader&&MIDI.loader.stop(),c.callback&&c.callback())};for(var l in MIDI.Soundfont){j[l]=!0;for(var m=0;m<d.length;m++)i(b,l,d,m,h,k)}h.length||k()}}(),window.Audio&&function(){for(var b=MIDI.AudioTag={api:"audiotag"},c={},d=127,e=-1,f=[],g=[],h={},i=0;12>i;i++)f[i]=new Audio;var j=function(a,b){if(MIDI.channels[a]){var c=MIDI.channels[a].instrument,i=MIDI.GM.byId[c].id,b=h[b];if(b){var j=i+""+b.id,k=(e+1)%f.length,l=f[k];if(g[k]=j,!MIDI.Soundfont[i])return void(MIDI.DEBUG&&console.log(i));l.src=MIDI.Soundfont[i][b.id],l.volume=d/127,l.play(),e=k}}},k=function(a,b){if(MIDI.channels[a]){var c=MIDI.channels[a].instrument,d=MIDI.GM.byId[c].id,b=h[b];if(b)for(var i=d+""+b.id,j=0;j<f.length;j++){var k=(j+e+1)%f.length,l=g[k];if(l&&l==i)return f[k].pause(),void(g[k]=null)}}};b.send=function(a,b){},b.setController=function(a,b,c,d){},b.setVolume=function(a,b){d=b},b.programChange=function(a,b){MIDI.channels[a].instrument=b},b.pitchBend=function(a,b,c){},b.noteOn=function(a,b,d,e){var f=c[b];if(h[f])return e?setTimeout(function(){j(a,f)},1e3*e):void j(a,f)},b.noteOff=function(a,b,c){},b.chordOn=function(a,b,d,e){for(var f=0;f<b.length;f++){var g=b[f],i=c[g];if(h[i]){if(e)return setTimeout(function(){j(a,i)},1e3*e);j(a,i)}}},b.chordOff=function(a,b,d){for(var e=0;e<b.length;e++){var f=b[e],g=c[f];if(h[g]){if(d)return setTimeout(function(){k(a,g)},1e3*d);k(a,g)}}},b.stopAllNotes=function(){for(var a=0,b=f.length;b>a;a++)f[a].pause()},b.connect=function(d){for(var e in MIDI.keyToNote)c[MIDI.keyToNote[e]]=e,h[e]={id:e};a(b),MIDI.loader&&MIDI.loader.stop(),d.callback&&d.callback()}}(),function(){var b=MIDI.Flash={api:"flash"},c={},d={};b.send=function(a,b){},b.setController=function(a,b,c,d){},b.setVolume=function(a,b){},b.programChange=function(a,b){MIDI.channels[a].instrument=b},b.pitchBend=function(a,b,c){},b.noteOn=function(a,b,e,f){if(MIDI.channels[a]){var g=MIDI.channels[a].instrument,h=MIDI.GM.byId[g].number;if(b=h+""+c[b],d[b])return f?setTimeout(function(){d[b].play({volume:2*e})},1e3*f):void d[b].play({volume:2*e})}},b.noteOff=function(a,b,c){},b.chordOn=function(a,b,e,f){if(MIDI.channels[a]){var g=MIDI.channels[a].instrument,h=MIDI.GM.byId[g].number;for(var i in b){var j=b[i],k=h+""+c[j];d[k]&&d[k].play({volume:2*e})}}},b.chordOff=function(a,b,c){},b.stopAllNotes=function(){},b.connect=function(e,f){soundManager.flashVersion=9,soundManager.useHTML5Audio=!0,soundManager.url=f.soundManagerSwfUrl||"../inc/SoundManager2/swf/",soundManager.useHighPerformance=!0,soundManager.wmode="transparent",soundManager.flashPollingInterval=1,soundManager.debugMode=!1,soundManager.onload=function(){for(var g=function(a,b,c){var e=MIDI.GM.byName[a],f=e.number;d[f+""+b]=soundManager.createSound({id:b,url:MIDI.soundfontUrl+a+"-mp3/"+b+".mp3",multiShot:!0,autoLoad:!0,onload:c})},h=[],i=88,j=e.length*i,k=0;k<e.length;k++)for(var l=e[k],m=function(){h.push(this.sID),"undefined"!=typeof MIDI.loader&&MIDI.loader.update(null,"Processing: "+this.sID)},n=0;i>n;n++){var o=c[n+21];g(l,o,m)}a(b);var p=setInterval(function(){h.length<j||(clearInterval(p),MIDI.loader&&MIDI.loader.stop(),f.callback&&f.callback())},25)},soundManager.onerror=function(){};for(var g in MIDI.keyToNote)c[MIDI.keyToNote[g]]=g}}(),MIDI.GM=function(a){var b=function(a){return a.replace(/[^a-z0-9 ]/gi,"").replace(/[ ]/g,"_").toLowerCase()},c={byName:{},byId:{},byCategory:{}};for(var d in a)for(var e=a[d],f=0,g=e.length;g>f;f++){var h=e[f];if(h){var i=parseInt(h.substr(0,h.indexOf(" ")),10);h=h.replace(i+" ",""),c.byId[--i]=c.byName[b(h)]=c.byCategory[b(d)]={id:b(h),instrument:h,number:i,category:d}}}return c}({Piano:["1 Acoustic Grand Piano","2 Bright Acoustic Piano","3 Electric Grand Piano","4 Honky-tonk Piano","5 Electric Piano 1","6 Electric Piano 2","7 Harpsichord","8 Clavinet"],"Chromatic Percussion":["9 Celesta","10 Glockenspiel","11 Music Box","12 Vibraphone","13 Marimba","14 Xylophone","15 Tubular Bells","16 Dulcimer"],Organ:["17 Drawbar Organ","18 Percussive Organ","19 Rock Organ","20 Church Organ","21 Reed Organ","22 Accordion","23 Harmonica","24 Tango Accordion"],Guitar:["25 Acoustic Guitar (nylon)","26 Acoustic Guitar (steel)","27 Electric Guitar (jazz)","28 Electric Guitar (clean)","29 Electric Guitar (muted)","30 Overdriven Guitar","31 Distortion Guitar","32 Guitar Harmonics"],Bass:["33 Acoustic Bass","34 Electric Bass (finger)","35 Electric Bass (pick)","36 Fretless Bass","37 Slap Bass 1","38 Slap Bass 2","39 Synth Bass 1","40 Synth Bass 2"],Strings:["41 Violin","42 Viola","43 Cello","44 Contrabass","45 Tremolo Strings","46 Pizzicato Strings","47 Orchestral Harp","48 Timpani"],Ensemble:["49 String Ensemble 1","50 String Ensemble 2","51 Synth Strings 1","52 Synth Strings 2","53 Choir Aahs","54 Voice Oohs","55 Synth Choir","56 Orchestra Hit"],Brass:["57 Trumpet","58 Trombone","59 Tuba","60 Muted Trumpet","61 French Horn","62 Brass Section","63 Synth Brass 1","64 Synth Brass 2"],Reed:["65 Soprano Sax","66 Alto Sax","67 Tenor Sax","68 Baritone Sax","69 Oboe","70 English Horn","71 Bassoon","72 Clarinet"],Pipe:["73 Piccolo","74 Flute","75 Recorder","76 Pan Flute","77 Blown Bottle","78 Shakuhachi","79 Whistle","80 Ocarina"],"Synth Lead":["81 Lead 1 (square)","82 Lead 2 (sawtooth)","83 Lead 3 (calliope)","84 Lead 4 (chiff)","85 Lead 5 (charang)","86 Lead 6 (voice)","87 Lead 7 (fifths)","88 Lead 8 (bass + lead)"],"Synth Pad":["89 Pad 1 (new age)","90 Pad 2 (warm)","91 Pad 3 (polysynth)","92 Pad 4 (choir)","93 Pad 5 (bowed)","94 Pad 6 (metallic)","95 Pad 7 (halo)","96 Pad 8 (sweep)"],"Synth Effects":["97 FX 1 (rain)","98 FX 2 (soundtrack)","99 FX 3 (crystal)","100 FX 4 (atmosphere)","101 FX 5 (brightness)","102 FX 6 (goblins)","103 FX 7 (echoes)","104 FX 8 (sci-fi)"],Ethnic:["105 Sitar","106 Banjo","107 Shamisen","108 Koto","109 Kalimba","110 Bagpipe","111 Fiddle","112 Shanai"],Percussive:["113 Tinkle Bell","114 Agogo","115 Steel Drums","116 Woodblock","117 Taiko Drum","118 Melodic Tom","119 Synth Drum"],"Sound effects":["120 Reverse Cymbal","121 Guitar Fret Noise","122 Breath Noise","123 Seashore","124 Bird Tweet","125 Telephone Ring","126 Helicopter","127 Applause","128 Gunshot"]}),MIDI.getChannel=function(a){return MIDI.channels[a]},MIDI.getInstrument=function(a){var b=MIDI.getChannel(a);return b&&b.instrument},MIDI.getMono=function(a){var a=MIDI.getChannel(ch);return a&&a.mono},MIDI.getOmni=function(a){var a=MIDI.getChannel(ch);return a&&a.omni},MIDI.getSolo=function(a){var a=MIDI.getChannel(ch);return a&&a.solo},MIDI.channels=function(){for(var a={},b=0;16>b;b++)a[b]={instrument:b,pitchBend:0,mute:!1,mono:!1,omni:!1,solo:!1};return a}(),MIDI.pianoKeyOffset=21,MIDI.keyToNote={},MIDI.noteToKey={},function(){for(var a=21,b=108,c=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],d=a;b>=d;d++){var e=(d-12)/12>>0,f=c[d%12]+e;MIDI.keyToNote[f]=d,MIDI.noteToKey[d]=f}}()}(),"undefined"==typeof dom)var dom={};if(function(a){"use strict";dom.request=function(b){if("undefined"==typeof XMLHttpRequest&&(XMLHttpRequest,function(){for(var a=[function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],b=0;b<a.length;b++){try{a[b]()}catch(c){continue}break}XMLHttpRequest=a[b]}()),"undefined"==typeof(new XMLHttpRequest).responseText){var c="<!-- IEBinaryToArray_ByteStr -->\r\n<script type='text/vbscript'>\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr = CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex = LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last = \"\"\r\n   End If\r\nEnd Function\r\n</script>\r\n";document.write(c),dom.request=function(a){function b(a){for(var b={},c=0;256>c;c++)for(var d=0;256>d;d++)b[String.fromCharCode(c+256*d)]=String.fromCharCode(c)+String.fromCharCode(d);var e=IEBinaryToArray_ByteStr(a),f=IEBinaryToArray_ByteStr_Last(a);return e.replace(/[\s\S]/g,function(a){return b[a]})+f}"string"==typeof a&&(a={url:a});var c=XMLHttpRequest();if(c.open(a.body?"POST":"GET",a.url,!0),c.overrideMimeType&&c.overrideMimeType("text/plain; charset=x-user-defined"),a.headers)for(var d in a.headers)c.setRequestHeader(d,a.headers[d]);else a.body&&c.setRequestHeader("Content-type","application/x-www-form-urlencoded");return a.responseType&&(c.responseType=a.responseType),a.onerror&&"onerror"in c&&(c.onerror=a.onerror),a.onprogress&&"onprogress"in c&&(c.onprogress=a.onprogress),c.onreadystatechange=function(d){4===c.readyState&&(200===c.status||304===c.status||0===c.status?(c.responseText=b(c.responseBody),a.onload&&a.onload(c)):a.onerror&&a.onerror(d,!1))},c.setRequestHeader("Accept-Charset","x-user-defined"),c.send(null),c}}else dom.request=function(b){"string"==typeof b&&(b={url:b});var c=new XMLHttpRequest;if(c.open(b.body?"POST":"GET",b.url,!0),c.overrideMimeType&&c.overrideMimeType("text/plain; charset=x-user-defined"),b.headers)for(var d in b.headers)c.setRequestHeader(d,b.headers[d]);else b.body&&c.setRequestHeader("Content-type","application/x-www-form-urlencoded");return b.responseType&&(c.responseType=b.responseType),b.onerror&&"onerror"in c&&(c.onerror=b.onerror),b.onprogress&&c.upload&&"onprogress"in c.upload&&(c.upload.onprogress=b.onprogress),c.onreadystatechange=function(d){4===c.readyState&&(200===c.status||304===c.status||0===c.status&&a.userAgent.cordova?b.onload&&b.onload(c):b.onerror&&b.onerror(d,!1))},c.send(b.body),c};dom.request(b)}}(dom),"undefined"!=typeof module&&module.exports&&(XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest,module.exports=dom.request),"undefined"==typeof dom)var dom={};!function(){"use strict";dom.loadScript=function(){return this.loaded={},this.loading={},this},dom.loadScript.prototype.add=function(b){var c=this;"string"==typeof b&&(b={url:b});var d=b.urls;"undefined"==typeof d&&(d=[{url:b.url,verify:b.verify}]);var e=document.getElementsByTagName("head")[0],f=function(b,d){c.loaded[b.url]||d&&a(d)===!1||(c.loaded[b.url]=!0,c.loading[b.url]&&c.loading[b.url](),delete c.loading[b.url],b.callback&&b.callback(),"undefined"!=typeof m&&m())},g=!1,h=[],i=function(a){if("string"==typeof a&&(a={url:a,verify:b.verify}),/([\w\d.\[\]\'\"])$/.test(a.verify)){var d=a.test=a.verify;if("object"==typeof d)for(var i=0;i<d.length;i++)h.push(d[i]);else h.push(d)}if(!c.loaded[a.url]){var k=document.createElement("script");k.onreadystatechange=function(){"loaded"!==this.readyState&&"complete"!==this.readyState||f(a)},k.onload=function(){f(a)},k.onerror=function(){if(g=!0,delete c.loading[a.url],"object"==typeof a.test)for(var b in a.test)j(a.test[b]);else j(a.test)},k.setAttribute("type","text/javascript"),k.setAttribute("src",a.url),e.appendChild(k),c.loading[a.url]=function(){}}},j=function(a){for(var b=[],c=0;c<h.length;c++)h[c]!==a&&b.push(h[c]);h=b},k=function(c){if(c)f(c,c.test);else for(var e=0;e<d.length;e++)f(d[e],d[e].test);for(var i=!0,e=0;e<h.length;e++)a(h[e])===!1&&(i=!1);!b.strictOrder&&i?g?b.error&&b.error():b.callback&&b.callback():setTimeout(function(){k(c)},10)};if(b.strictOrder){var l=-1,m=function(){if(l++,d[l]){var a=d[l],e=a.url;c.loading[e]?c.loading[e]=function(){a.callback&&a.callback(),m()}:c.loaded[e]?m():(i(a),k(a))}else g?b.error&&b.error():b.callback&&b.callback()};m()}else for(var l=0;l<d.length;l++)i(d[l]),k(d[l])},dom.loadScript=new dom.loadScript;var a=function(a,b){try{a=a.split('"').join("").split("'").join("").split("]").join("").split("[").join(".");for(var c=a.split("."),d=c.length,e=b||window,f=0;d>f;f++){var g=c[f];if(null==e[g])return!1;e=e[g]}return!0}catch(h){return!1}}}(),"undefined"!=typeof module&&module.exports&&(module.exports=dom.loadScript);var Queue=function(a){var b=this,c=a.oncomplete||a.complete||a.callback,d=a.onprogress||a.progress,e=a.flatten!==!1;return this.canceled=!1,this.cancel=function(){b.canceled||b.remaining<=0||(a.oncancel&&a.oncancel(),b.canceled=!0)},this.next=function(){if(!b.canceled){var f=b.queue,g=b.remaining,h=b.length,i=h-g-1,j=b.keys[i];if(d&&d(h?1-(g+1)/h:1),!f.length)return void(c&&c());b.remaining--;var k="[object Object]"===String(m),l=k&&m.length;if(e)a.next.call(b,f.shift(),j,i);else{var m=f[0];k&&!l&&f.shift(),k&&l?a.next.call(b,m.shift(),j,i):a.next.call(b,f.shift(),j,i)}}},this.reset=function(b){if(a.range)for(var c=a.range,d=c.from,b=[];d<=c.to;d++)b.push(d);else b=b||a.items;this.length=0,this.remaining=-1,this.queue=[],this.keys=[];for(var f in b)if(b.hasOwnProperty(f))if("[object Object]"!==String(b[f])||e)this.keys.push(f),this.queue.push(b[f]),this.length++,this.remaining++;else{var g=[];this.queue.push(g);for(var h in b[f])b[f].hasOwnProperty(h)&&(g.push(b[f][h]),this.keys.push(h),this.length++,this.remaining++)}},this.reset(),this.next(),this};!function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.btoa||(a.btoa=function(a){a=escape(a);var c,d,e,f,g,h="",i="",j="",k=0;do c=a.charCodeAt(k++),d=a.charCodeAt(k++),i=a.charCodeAt(k++),e=c>>2,f=(3&c)<<4|d>>4,g=(15&d)<<2|i>>6,j=63&i,isNaN(d)?g=j=64:isNaN(i)&&(j=64),h=h+b.charAt(e)+b.charAt(f)+b.charAt(g)+b.charAt(j),c=d=i="",e=f=g=j="";while(k<a.length);return h}),a.atob||(a.atob=function(a){var c,d,e,f,g,h="",i="",j="",k=0,l=/[^A-Za-z0-9\+\/\=]/g;l.exec(a)&&alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do e=b.indexOf(a.charAt(k++)),f=b.indexOf(a.charAt(k++)),g=b.indexOf(a.charAt(k++)),j=b.indexOf(a.charAt(k++)),c=e<<2|f>>4,d=(15&f)<<4|g>>2,i=(3&g)<<6|j,h+=String.fromCharCode(c),64!=g&&(h+=String.fromCharCode(d)),64!=j&&(h+=String.fromCharCode(i)),c=d=i="",e=f=g=j="";while(k<a.length);return unescape(h)})}(this);var Base64Binary={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decodeArrayBuffer:function(a){var b=Math.ceil(3*a.length/4),c=new ArrayBuffer(b);return this.decode(a,c),c},decode:function(a,b){var c=this._keyStr.indexOf(a.charAt(a.length-1)),d=this._keyStr.indexOf(a.charAt(a.length-1)),e=Math.ceil(3*a.length/4);64==c&&e--,64==d&&e--;var f,g,h,i,j,k,l,m,n=0,o=0;for(f=b?new Uint8Array(b):new Uint8Array(e),a=a.replace(/[^A-Za-z0-9\+\/\=]/g,""),n=0;e>n;n+=3)j=this._keyStr.indexOf(a.charAt(o++)),k=this._keyStr.indexOf(a.charAt(o++)),l=this._keyStr.indexOf(a.charAt(o++)),m=this._keyStr.indexOf(a.charAt(o++)),g=j<<2|k>>4,h=(15&k)<<4|l>>2,i=(3&l)<<6|m,f[n]=g,64!=l&&(f[n+1]=h),64!=m&&(f[n+2]=i);return f}};