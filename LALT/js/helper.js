/* typeScale */
function typeScale(){var a=window,b=document,c=b.documentElement,d=b.getElementsByTagName("body")[0],e=a.innerWidth||c.clientWidth||d.clientWidth;d.style.fontSize=e/375+15+"px",d.style.lineHeight=e/8e3+1.4}window.addEventListener("resize",typeScale),typeScale();
/* full width/height/both */
function fullsizes(){var a=$(window).width(),b=$(window).height();$(".fullwidth").each(function(){$(this).width(a)}),$(".fullheight").each(function(){$(this).height(b)}),$(".fullscreen").each(function(){$(this).width(a),$(this).height(b)})}window.addEventListener("resize",fullsizes),fullsizes();
/* middlize */
$(window).load(function(){function a(){$(".middlize").each(function(){var a=($(this).parent().height()-$(this).height())/2;$(this).css({top:a})})}window.addEventListener("resize",a)});