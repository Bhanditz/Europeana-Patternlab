define(["jquery"],function(a){a(".eu-foldable-title").on("click",function(){$this=a(this),$ul=$this.next("ul"),$ul.toggleClass("is-hidden"),$this.toggleClass("opened")})});