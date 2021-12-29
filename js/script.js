$(document).ready(function(){
    //$('html').offset().top;
    $(window).scroll(function(event){
    	var y = $(this).scrollTop();
    	//console.log(y);
    	if(y>=32){
    		$('#hand-with-phone').addClass('moveUp');
    	}
    	if(y>=450){
    		$('.feature-icon').addClass('zoomIn'); 
            //$('.feature-icon').addClass('fadeIn'); 
    	}  	
    });
    
});