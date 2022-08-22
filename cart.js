//paypal.minicart.view.show();

cart_open = false;
cartstatus = true;

function activateCheckoutButton(){
	$('.ppcheckout').not('.inactive').mouseover(function() {
		currlabel = $(this).attr('total');
		currfontsize = $(this).css('font-size');

		$(this).css('font-size','.78em');
		ppcheckout_label = $(this).text();			
		$(this).attr('value', ppcheckout_label)
		$(this).text('CHECKOUT');
	});
	$('.ppcheckout').not('.inactive').mouseout(function() {
		$(this).css('font-size',currfontsize);
		$(this).text($(this).attr('data-minicart-alt'));
	});
}
activateCheckoutButton();

function checkCart(){
	console.log("checkCart - from cart.min.js");
	if(cart_open){
		return;
	} else {
		paypal.minicart.view.show();
	}
}

function showCart(speed){
	// Fade page content
	$("#project-container").animate({ 
		opacity: '0.5'
	}, 200 , function(){
	});
	$("#container").animate({ 
		opacity: '0.5'
	}, 200 , function(){
	});

	// Change status of cart button
	$('#cart-button').addClass('selected');

	// Stylize 'Empty Cart' notice
	cartisempty = $(".minicart-footer p").hasClass('minicart-empty-text');
	if (cartisempty){
		$('.minicart-footer').css('outline', '0px solid');
		$('#minicart-item-table').css('padding-bottom', '18px');
	} else if (!cartisempty) {
		$('.minicart-footer').css('outline', '4px solid white');
		$('#minicart-item-table').css('padding-bottom', '10px');
	}
	
	var carth = $('#minicart-item-table').height();
	$("#PPMiniCart").animate({ 
		top: '58px'
	}, speed , function(){
		cart_open = true;
	});
};

function hideCart(speed){
	// Fade page content
	$("#project-container").animate({ 
		opacity: '1'
	}, 200 , function(){
	});
	$("#container").animate({ 
		opacity: '1'
	}, 200 , function(){
	});
	
	// Change status of cart button
	$('#cart-button').removeClass('selected');

	var carth = $('#minicart-item-table').height();	

	$("#PPMiniCart").animate({ 
		top: -(carth+58)
	}, speed , function(){
		cart_open = false;
	});
						
};

function adjustCartH(){
	var carth = $('#minicart-item-table').height();	
	$('.minicart-footer').css('height', carth+10);
};
function adjustCartContainerH(){
	var carth = $('#minicart-item-table').height();	
	$('#ppcart_container').css('height', carth+10);
};

$(window).on('resize', function(){
	adjustCartH();
	if(!cart_open){
		hideCart();
	}
});
adjustCartH();
