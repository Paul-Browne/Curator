$LAB
.script(function(){
	if ($('[class*="-col-"],[class*="-center-"]').length) {return "js/jaygrid.js"; }	
	else {return null;}
})
.script(function(){
	if ($('.sortable').length) {return "js/stupidtable.js"; }	
	else {return null;}
})
.script(function(){
	if ($('[data-collapse]').length) {return "js/collapse.js"; }	
	else {return null;}
})
.script(function(){
	if ($('.sticky').length) {return "js/headroom.js"; }	
	else {return null;}
})
.script(function(){
	if ($('.datepicker,.timepicker').length) {return "js/picker.js"; }	
	else {return null;}
})
.script(function(){
	if ($('.datepicker').length) {return "js/datepicker.js"; }	
	else {return null;}
})
.script(function(){
	if ($('.timepicker').length) {return "js/timepicker.js"; }	
	else {return null;}
})
.script(function(){
	if ($('textarea').length) {return "js/elasticize.js"; }	
	else {return null;}
})
.script(function(){
	if ($('.video').length) {return "js/fitvids.js"; }	
	else {return null;}
})
.script(function(){
	if ($('input[type="checkbox"],input[type="radio"]').length) {return "js/icheck.js"; }	
	else {return null;}
})
.wait(function(){
	$.jaygrid();
})
.wait(function(){
	$(".sortable").stupidtable();
})
.wait(function(){
	$(".sticky").headroom();
})
.wait(function(){
	$(".datepicker").pickadate();
})
.wait(function(){
	$(".timepicker").pickatime();
})
.wait(function(){
	$('textarea').elasticize();
})
.wait(function(){
	$(".video").fitVids();
})
.wait(function(){
	$('input').iCheck({checkboxClass: 'icheckbox_flat-blue',radioClass: 'iradio_flat-blue'});
});