$(document).ready(function(){
	var speedOfAnimation = 300;
	setTimeout(function(){
				$('#content-titles').slideDown(speedOfAnimation);			
		}, 1000);
		setTimeout(function(){			
				$('#content-title-smaller').slideDown(speedOfAnimation);			
		}, 1300);
		setTimeout(function(){			
				$('p').fadeIn(speedOfAnimation);			
		}, 1600);
		setTimeout(function(){			
				$('button').fadeIn(speedOfAnimation);			
		}, 1700);

			var oTop = $('#crown').offset().top - window.innerHeight;
			$(window).scroll(function(){
				var pTop = $('body').scrollTop();
				if(pTop > oTop)
					
				{
					setTimeout(function(){
						$('#crown').fadeIn(1000);
						$('.titles').slideDown(500);
											// setTimeout(function(){
						$('.line').show(1200);
						setTimeout(function(){
							$('#lines').show(1200);
						}, 500);
						
					// },1000);
					},600);


				}
			});				
			//git test 
var timer = [];
var iteration = [];
var isOver = [];
var time = 7;
var counter = 0;
var timerValue = [];
	
		for (var i = 0; i < 4; i++) 
		{
			timer[i] = document.getElementById('timer'+i);
			timerValue[i] = timer[i].innerHTML;
			iteration[i] = 0;
			isOver[i] = 0;
		};
		var fromTop = $('.numbers').offset().top - window.innerHeight;
		$(window).scroll(function(){
			var currentPos = $('body').scrollTop();
			
			if(currentPos > fromTop)
			{
				setTimeout(function(){
					$('.numbers span').fadeIn(speedOfAnimation);
					var interval = setInterval(function(){
						counter = 0;
						for (var i = 0; i < 4; i++) 
						{		
							timer[i].innerHTML = iteration[i]+'+';

							if((timerValue[i] - iteration[i]) < 100)
							{
								iteration[i]++;		
							}
							else
							{
								iteration[i]+=100;
							}
							if(iteration[i] >= timerValue[i])
							{
								iteration[i] = timerValue[i];
								isOver[i] = 1;		
							}
						};
						for(var i = 0; i < 4; i++)
						{
							counter += isOver[i];
							if(counter===4)
							{			
								clearInterval(interval);			
							}
						}
					},time);
				},500);
			}
		});				
	

});
