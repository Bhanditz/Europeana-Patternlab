!function(a){"function"==typeof define&&define.amd?define(a):window.purl=a()}(function(){function a(a,b){for(var c=decodeURI(a),d=p[b?"strict":"loose"].exec(c),e={attr:{},param:{},seg:{}},g=14;g--;)e.attr[n[g]]=d[g]||"";return e.param.query=f(e.attr.query),e.param.fragment=f(e.attr.fragment),e.seg.path=e.attr.path.replace(/^\/+|\/+$/g,"").split("/"),e.seg.fragment=e.attr.fragment.replace(/^\/+|\/+$/g,"").split("/"),e.attr.base=e.attr.host?(e.attr.protocol?e.attr.protocol+"://"+e.attr.host:e.attr.host)+(e.attr.port?":"+e.attr.port:""):"",e}function b(a){var b=a.tagName;return"undefined"!=typeof b?m[b.toLowerCase()]:b}function c(a,b){if(0===a[b].length)return a[b]={};var c={};for(var d in a[b])c[d]=a[b][d];return a[b]=c,c}function d(a,b,e,f){var g=a.shift();if(g){var h=b[e]=b[e]||[];"]"==g?j(h)?""!==f&&h.push(f):"object"==typeof h?h[k(h).length]=f:h=b[e]=[b[e],f]:~g.indexOf("]")?(g=g.substr(0,g.length-1),!q.test(g)&&j(h)&&(h=c(b,e)),d(a,h,g,f)):(!q.test(g)&&j(h)&&(h=c(b,e)),d(a,h,g,f))}else j(b[e])?b[e].push(f):"object"==typeof b[e]?b[e]=f:"undefined"==typeof b[e]?b[e]=f:b[e]=[b[e],f]}function e(a,b,c){if(~b.indexOf("]")){var e=b.split("[");d(e,a,"base",c)}else{if(!q.test(b)&&j(a.base)){var f={};for(var h in a.base)f[h]=a.base[h];a.base=f}""!==b&&g(a.base,b,c)}return a}function f(a){return i(String(a).split(/&|;/),function(a,b){try{b=decodeURIComponent(b.replace(/\+/g," "))}catch(c){}var d=b.indexOf("="),f=h(b),g=b.substr(0,f||d),i=b.substr(f||d,b.length);return i=i.substr(i.indexOf("=")+1,i.length),""===g&&(g=b,i=""),e(a,g,i)},{base:{}}).base}function g(a,b,c){var d=a[b];"undefined"==typeof d?a[b]=c:j(d)?d.push(c):a[b]=[d,c]}function h(a){for(var b,c,d=a.length,e=0;d>e;++e)if(c=a[e],"]"==c&&(b=!1),"["==c&&(b=!0),"="==c&&!b)return e}function i(a,b){for(var c=0,d=a.length>>0,e=arguments[2];d>c;)c in a&&(e=b.call(void 0,e,a[c],c,a)),++c;return e}function j(a){return"[object Array]"===Object.prototype.toString.call(a)}function k(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b}function l(b,c){return 1===arguments.length&&b===!0&&(c=!0,b=void 0),c=c||!1,b=b||window.location.toString(),{data:a(b,c),attr:function(a){return a=o[a]||a,"undefined"!=typeof a?this.data.attr[a]:this.data.attr},param:function(a){return"undefined"!=typeof a?this.data.param.query[a]:this.data.param.query},fparam:function(a){return"undefined"!=typeof a?this.data.param.fragment[a]:this.data.param.fragment},segment:function(a){return"undefined"==typeof a?this.data.seg.path:(a=0>a?this.data.seg.path.length+a:a-1,this.data.seg.path[a])},fsegment:function(a){return"undefined"==typeof a?this.data.seg.fragment:(a=0>a?this.data.seg.fragment.length+a:a-1,this.data.seg.fragment[a])}}}var m={a:"href",img:"src",form:"action",base:"href",script:"src",iframe:"src",link:"href",embed:"src",object:"data"},n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"],o={anchor:"fragment"},p={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},q=/^[0-9]+$/;return l.jQuery=function(a){null!=a&&(a.fn.url=function(c){var d="";return this.length&&(d=a(this).attr(b(this[0]))||""),l(d,c)},a.url=l)},l.jQuery(window.jQuery),l});