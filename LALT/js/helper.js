/* typeScale */
function typeScale(){var a=window.innerWidth,b=document.getElementsByTagName("body")[0].style;b.fontSize=a/375+15+"px",b.lineHeight=a/8e3+1.4}window.addEventListener("resize",typeScale),typeScale();
/* heights */
function heights(){function c(c,d){var e=new RegExp(d+"-h8s-[\\d+w]+-[\\d+\\w]+","g"),f=c.attr("class").match(e)[0].split("-");if(isFinite(f.slice(2,3))&&isFinite(f.slice(3,4))){var g=String(f.slice(2,3)),h=String(f.slice(3,4));return[a,g,h]}var g=parseInt(f.slice(2,3)),h=parseInt(f.slice(3,4));return[b,g,h]}var a=window.innerHeight,b=window.innerWidth;656>b&&$('[class*="m-h8s-"]').each(function(){var a=c($(this),"m");$(this).height(a[0]/(a[2]/a[1]))}),1024>b&&b>=656&&$('[class*="t-h8s-"]').each(function(){var a=c($(this),"t");$(this).height(a[0]/(a[2]/a[1]))}),b>=1024&&$('[class*="d-h8s-"]').each(function(){var a=c($(this),"d");$(this).height(a[0]/(a[2]/a[1]))})}window.addEventListener("resize",heights),heights();
/* full width/height/both */
function fullsizes(){$(".fullheight,.fullscreen").each(function(){var a=window.innerHeight;$(this).height(a)})}window.addEventListener("resize",fullsizes),fullsizes();
/* middlize */
$(window).load(function(){function a(){$(".middlize").each(function(){var a=($(this).parent().height()-$(this).height())/2;$(this).css({top:a})})}window.addEventListener("resize",a)});

