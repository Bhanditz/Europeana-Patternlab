"undefined"==typeof widgets&&(widgets={}),function(a){var b=Math.PI,c={id:"loader",bars:12,radius:0,lineWidth:20,lineHeight:70};a.Loader=function(a){function d(){r.save(),r.clearRect(0,0,m,m),r.translate(m/2,m/2);for(var c=360-360/p,d=0;p>d;d++){var f=d/p*2*b+o;r.save(),r.translate(q*Math.sin(-f),q*Math.cos(-f)),r.rotate(f);var g=-a.lineWidth/2,h=0,i=a.lineWidth,j=a.lineHeight,k=i/2;r.beginPath(),r.moveTo(g+k,h),r.lineTo(g+i-k,h),r.quadraticCurveTo(g+i,h,g+i,h+k),r.lineTo(g+i,h+j-k),r.quadraticCurveTo(g+i,h+j,g+i-k,h+j),r.lineTo(g+k,h+j),r.quadraticCurveTo(g,h+j,g,h+j-k),r.lineTo(g,h+k),r.quadraticCurveTo(g,h,g+k,h);var l=d/(p-1)*c;r.fillStyle="hsla("+l+", 100%, 50%, 0.85)",r.fill(),r.restore()}if(r.restore(),o+=.07,a.messageAnimate){var n=o/.07>>0;if(n%10==0){var s=a.messageAnimate.length,t=n/10%s;e.span.innerHTML=a.message+a.messageAnimate[t]}}}var e=this;if(document.body){a||(a={});for(var f in c)"undefined"==typeof a[f]&&(a[f]=c[f]);var g=document.getElementById(a.id);if(!g){var h=document.createElement("div");if(h.style.cssText="color: #fff; pointer-events: none; -webkit-transition-property: opacity; -webkit-transition-duration: .5s; position: fixed; left: 0; top: 0; width: 100%; height: 100%; z-index: 10000; background: rgba(0,0,0,0.5); opacity: 1",a.message){var i=document.createElement("span");i.style.cssText="font-family: courier; opacity: 1; display: inline-block;background: rgba(0,0,0,0.65); border-radius: 10px; padding: 10px; width: 200px; text-align: center; position: absolute; z-index: 1000;",h.appendChild(i),e.span=i}var g=document.createElement("canvas");document.body.appendChild(g),g.id=a.id,g.style.cssText="opacity: 1; position: absolute; z-index: 1000;",h.appendChild(g),document.body.appendChild(h)}if(window.innerWidth&&window.innerHeight)var j=window.innerWidth,k=window.innerHeight;else if(document.body&&document.body.offsetWidth)var j=document.body.offsetWidth,k=document.body.offsetHeight;else if("CSS1Compat"===document.compatMode&&document.documentElement&&document.documentElement.offsetWidth)var j=document.documentElement.offsetWidth,k=document.documentElement.offsetHeight;var l=a.lineHeight+20,m=2*l+a.radius;j-=m,k-=m,g.width=m,g.height=m,g.style.left=j/2+"px",g.style.top=k/2+"px",a.message&&(e.span.style.left=(j+m)/2-e.span.offsetWidth/2+"px",e.span.style.top=k/2+m-10+"px");var e=this,n=0,o=0,p=(a.delay,a.bars),q=a.radius,r=g.getContext("2d");return r.globalCompositeOperation="lighter",r.shadowOffsetX=1,r.shadowOffsetY=1,r.shadowBlur=1,r.shadowColor="rgba(0, 0, 0, 0.5)",this.message=function(b){n||this.start(),a.message=b,"..."===b.substr(-3)?(a.message=b.substr(0,b.length-3),a.messageAnimate=[".&nbsp;&nbsp;","..&nbsp;","..."].reverse()):a.messageAnimate=!1,e.span.innerHTML=a.message+(a.messageAnimate[0]||"")},this.stop=function(){n&&(window.clearInterval(n),n=0),g&&g.style&&(g.parentNode.style.opacity=0,window.setTimeout(function(){g.parentNode.style.display="none",r.clearRect(0,0,m,m)},500))},this.start=function(b){n||(g.parentNode.style.top=document.body.scrollTop+"px",g.parentNode.style.opacity=1,g.parentNode.style.display="block",g.style.left=j/2+"px",g.style.top=k/2+"px",a.delay||d(),n=window.setInterval(d,30),a.message&&this.message(a.message))},this.start(3e4),this}}}(widgets);