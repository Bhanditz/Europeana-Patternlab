module.exports=function(a){a.initConfig({concat:{"build/MIDI.js":["js/midi/audioDetect.js","js/midi/gm.js","js/midi/loader.js","js/midi/player.js","js/midi/plugin.audiotag.js","js/midi/plugin.webaudio.js","js/midi/plugin.webmidi.js","js/util/dom_request_xhr.js","js/util/dom_request_script.js","inc/polyfill/Base64.js","inc/polyfill/base64binary.js"]},uglify:{"build/MIDI.min.js":["build/MIDI.js"]}}),a.loadNpmTasks("grunt-contrib-concat"),a.loadNpmTasks("grunt-contrib-uglify"),a.registerTask("default",["concat","uglify"])};