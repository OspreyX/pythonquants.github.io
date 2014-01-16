$(document).on('scroll', function()
{
	if($(document).scrollTop() >= 396)
	{
		$('.magic_float').addClass('floating');
	}
	else
	{
		$('.magic_float').removeClass('floating');
	}
		
});

var animating_scroll = false;

$(document).on('ready', function()
{
	/*
	$('a').on('click', function(e)
	{
		if($(this).attr('href').substr(0, 1) == '#')
		{
			e.preventDefault();
			console.log('PREVENT');
			window.location.hash = $(this).attr('href');
		};
	});
	*/
	$(window).on('hashchange', function(e)
	{
		if(window.location.hash.length < 3) return;
		
		var anchor = $('#anchor-' + window.location.hash.substr(1));
		
		if(!anchor) return;
		
		var scroll_to = anchor.offset().top - 90;
		if(scroll_to > $(window).innerHeight())
			scroll_to = $(window).innerHeight();
			
		
		
		$('body').animate({ scrollTop : scroll_to }, 500);
	});
});