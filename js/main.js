$(document).ready(function(){

	$(".round_bg_orange").hover(
	  function () {
	    $(this).stop().animate({width: "300px", height: "300px", top: "25px", left: "0px"}, 400);
	    $(this).children(".round_in").stop().animate({margin: "107px 50px"}, 400);
	  }, 
	  function () {
	    $(this).stop().animate({width: "250px", height: "250px", top: "50px", left: "25px"}, 400);
	    $(this).children(".round_in").stop().animate({margin: "95px 35px"}, 400);
	  }
	);	
	$(".round_bg_blue").hover(
	  function () {
	    $(this).stop().animate({width: "300px", height: "300px", top: "25px", left: "300px"}, 400);
	    $(this).children(".round_in").stop().animate({margin: "107px 50px"}, 400);
	  }, 
	  function () {
	    $(this).stop().animate({width: "250px", height: "250px", top: "50px", left: "325px"}, 400);
	    $(this).children(".round_in").stop().animate({margin: "95px 33px"}, 400);
	  }
	);	
	$(".round_bg_green").hover(
	  function () {
	    $(this).stop().animate({width: "300px", height: "300px", top: "25px", right: "0px"}, 400);
	    $(this).children(".round_in").stop().animate({margin: "122px 50px"}, 400);
	  }, 
	  function () {
	    $(this).stop().animate({width: "250px", height: "250px", top: "50px", right: "25px"}, 400);
	    $(this).children(".round_in").stop().animate({margin: "110px 33px"}, 400);
	  }
	);	






	$(".round_bg_orange").click(function(){
		$(".visible").hide();
		$("body,html").animate({"scrollTop": 100}, 'slow');
		$(".data_type_fio").fadeIn('slow').addClass('visible');
		$(".data_type_year").delay('100').fadeIn('slow').addClass('visible');
		$(".data_type_city").delay('200').fadeIn('slow').addClass('visible');
		$(".data_type_univ").delay('250').fadeIn('slow').addClass('visible');
		$(".data_type_final").delay('300').fadeIn('slow').addClass('visible');
		$(".data_type_eng").delay('350').fadeIn('slow').addClass('visible');
		$(".data_type_goals").delay('400').fadeIn('slow').addClass('visible');
		$(".data_type_from").delay('450').fadeIn('slow').addClass('visible');
		$(".data_type_time").delay('500').fadeIn('slow').addClass('visible');
	})

	$(".round_bg_blue").click(function(){
		$(".visible").hide();
		$("body,html").animate({"scrollTop": 100}, 'slow');
		$(".data_type_exp").fadeIn('slow').addClass('visible');
		$(".data_type_tech").delay('100').fadeIn('slow').addClass('visible');
		$(".data_type_edit").delay('150').fadeIn('slow').addClass('visible');
		$(".data_type_os").delay('200').fadeIn('slow').addClass('visible');
		$(".data_type_svc").delay('250').fadeIn('slow').addClass('visible');
		$(".data_type_task").delay('300').fadeIn('slow').addClass('visible');
		$(".data_type_res").delay('350').fadeIn('slow').addClass('visible');
		$(".data_type_work").delay('400').fadeIn('slow').addClass('visible');
	})


	$(".round_bg_green").click(function(){
		$(".visible").hide();
		$("body,html").animate({"scrollTop": 100}, 'slow');
		$(".data_type_mail").fadeIn('slow').addClass('visible');
		$(".data_type_phone").delay('150').fadeIn('slow').addClass('visible');
	})


});

