function autoFill(id){
	var title=$(id).attr('title'); 
	$(id).addClass("readonly").attr({ value: title }).focus(function(){
		if($(id).val()==title){
			$(id).val("").removeClass("readonly");
		}
	}).blur(function(){
		if($(id).val()==""){
			$(id).addClass("readonly").val(title);
		}
	});
}


$(document).ready(function(){  
	autoFill("#keywords");
	autoFill("#name");
	autoFill("#tel");
	autoFill("#email");
	autoFill("#message");
	    
	$('#promo').slides({
		preload: true,
		effect: 'slide, fade',
		crossfade: true,
		slideSpeed: 350,
		fadeSpeed: 500,
		generateNextPrev: true,
		generatePagination: false,
		paginationClass: 'promo-pager',
		currentClass: 'promo-pager-item_act'
    });

    $(".location-item_act a").click(function(){$(this).parent().parent(".location").addClass("location_on"); return false;});
    $(".location_on .location-item a").click(function(){$(this).parent().parent(".location").removeClass("location_on"); return false;});
    $(".btn_request").click(function(){$(".overlay").show(); $(".popup").show(); return false;});
    $(".popup-close").click(function(){$(".overlay").hide(); $(this).parent(".popup").hide(); return false;});

});