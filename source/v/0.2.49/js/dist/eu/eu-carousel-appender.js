define(["jquery"],function(a){var b=function(a){console.log("carousel-appender: "+a)},c=function(a){console.warn("carousel-appender: "+a)},d={tumblr:function(c){b("tumblr template: "+c);var d="";return a.each(c.items,function(a,b){d+='<li class="js-carousel-item"><div class="mlt-img-div height-to-width" style="background-image: url('+b.img.src+')"><div class="inner"><a title="'+b.img.alt+'" class="link" href="'+b.url+'">&nbsp;</a></div></div></li>'}),{markup:d,added:c.items}},mlt:function(c){b("mlt template: "+c);var d="";return a.each(c.documents,function(a,b){d+='<li class="js-carousel-item"><div class="mlt-img-div height-to-width" style="background-image: url('+b.img.src+')"><div class="inner"><a title="'+b.img.alt+'" class="link" href="'+b.url+'">&nbsp;</a></div></div><span class="js-carousel-title"><a href="'+b.url+'">'+b.title+"</a>"}),{markup:d,added:c.documents}},media_thumb:function(b){var c="";return a.each(b,function(a,b){var d=null,e=null,f=null,g=null,h=null,i=null,j=null,k=null,l=null,m=null,n=null,o=null;if(b.downloadable&&b.download&&b.download.url&&(e=b.download.url),b.technical_metadata){var p=b.technical_metadata;p.codec&&(d=p.codec),p.language&&(k=p.language),p.mime_type&&(j=p.mime_type),p.width&&(o=p.width),p.height&&(i=p.height),p.format&&(f=p.format),p.file_size&&(g=p.file_size),p.file_unit&&(h=p.file_unit),p.runtime&&(l=p.runtime),p.runtime_unit&&(m=p.runtime_unit),p.size_unit&&(n=p.size_unit)}c+='<li class="js-carousel-item"><div class="mlt-img-div height-to-width" style="background-image: url('+b.thumbnail+')"><div class="inner"><a class="link'+(b.playable?" playable":"")+'" href="#"'+(b.play_url?' data-uri="'+b.play_url+'"':"")+(e?' data-download-uri="'+e+'"':"")+(k?' data-language="'+k+'"':"")+(j?' data-mime-type="'+j+'"':"")+(d?' data-codec="'+d+'"':"")+(f?' data-format="'+f+'"':"")+(g?' data-file-size="'+g+'"':"")+(h?' data-file-unit="'+h+'"':"")+(o?' data-width="'+o+'"':"")+(i?' data-height="'+i+'"':"")+(l?' data-runtime="'+l+'"':"")+(m?' data-runtime-unit="'+m+'"':"")+(n?' data-size-unit="'+n+'"':"")+(b.is_audio?' data-type="audio"':"")+(b.is_iiif?' data-type="iiif"':"")+(b.is_image?' data-type="image"':"")+(b.is_video?' data-type="video"':"")+">&nbsp;</a></div></div></li>"}),{markup:c,added:b}}},e=function(e){var f=e.cmp,g=e.loadUrl,h=e.template,i=f.find("li").size();if(!d[h])return void c("no valid template found ("+h+")");var j=function(a){var b=d[h](a);return f.append(b.markup),i=f.find("li").size(),b.added},k=function(c,d){var e=d||4,h=parseInt(Math.floor(i/e))+1,k=g+"?page="+h+"&per_page="+e;b("load more from: "+k),a.getJSON(k,null).done(function(a){var b=j(a);c(b)}).fail(function(a){f.removeClass("loading"),b("failed to load data ("+JSON.stringify(a)+") from url: "+k),c(!1)})};return{append:function(a,c){b("append..."),k(a,c)},getDataCount:function(){return b("data count is "+i),i}}};return{create:function(a){return new e(a)}}});