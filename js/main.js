$(document).on('scroll', function()
{
	if($(document).scrollTop() >= 396)
	{
		$('nav.magic_float').addClass('floating');
	}
	else
	{
		$('nav.magic_float').removeClass('floating');
	}
});