function Replayer(a,b,c){function d(){for(var b=null,c=null,d=null,e=0;e<f.length;e++)null!=f[e].ticksToNextEvent&&(null==b||f[e].ticksToNextEvent<b)&&(b=f[e].ticksToNextEvent,c=e,d=f[e].nextEventIndex);if(null!=c){var g=a.tracks[c][d];a.tracks[c][d+1]?f[c].ticksToNextEvent+=a.tracks[c][d+1].deltaTime:f[c].ticksToNextEvent=null,f[c].nextEventIndex+=1;for(var e=0;e<f.length;e++)null!=f[e].ticksToNextEvent&&(f[e].ticksToNextEvent-=b);return{ticksToEvent:b,event:g,track:c}}return null}function e(){function a(){if("meta"==j.event.type&&"setTempo"==j.event.subtype&&(g=6e7/j.event.microsecondsPerBeat),j.ticksToEvent>0)var a=j.ticksToEvent/h,c=a/(g/60);var e=1e3*c*b||0;k.push([j,e]),j=d()}if(j=d())for(;j;)a(!0)}for(var f=[],g=120,h=a.header.ticksPerBeat,i=0;i<a.tracks.length;i++)f[i]={nextEventIndex:0,ticksToNextEvent:a.tracks[i].length?a.tracks[i][0].deltaTime:null};var j,k=[];return e(),{getData:function(){return clone(k)}}}var clone=function(a){if("object"!=typeof a)return a;if(null==a)return a;var b="number"==typeof a.length?[]:{};for(var c in a)b[c]=clone(a[c]);return b};