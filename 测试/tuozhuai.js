(function ($) {
    $.extend($.prototype,{
    tuozhuai :function(){
     var that=this[0];
        that.onmousedown = function(eve){
            var e = eve || event;
            var x = e.offsetX;
            var y = e.offsetY;
            document.onmousemove = function(eve){
                var e = eve || event;
                var l = e.clientX - x;
                var t = e.clientY - y;
                var maxL = document.documentElement.clientWidth - 200;
                var maxH = document.documentElement.clientHeight - 200;
                
                l = l < 0 ? 0 : (l > maxL ? maxL : l);
                t = t < 0 ? 0 : (t > maxH ? maxH : t);
                
                that.style.left = l + "px";
                that.style.top = t + "px";

                window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            }
            document.onmouseup = function(){		
                document.onmousemove = null;
            }
        }
    }
        });
}(jQuery));