// JavaScript Document
// JavaScript Document

//关于我们
$(window).scroll(function() {	
			if ($(window).scrollTop() > 650) {
				$(".aboiutcontent").attr('id','tc1');
			} else {
				$(".aboiutcontent").removeAttr('id','tc1');
			}											
});

//产品
$(window).scroll(function() {	
			if ($(window).scrollTop() > 1200) {
				$(".cpright ul li:nth-child(1)").attr('id','atc1');
				$(".cpright ul li:nth-child(2)").attr('id','atc2');
				$(".cpright ul li:nth-child(3)").attr('id','atc3');
				$(".cpright ul li:nth-child(4)").attr('id','atc4');
				$(".cpright ul li:nth-child(5)").attr('id','atc5');
				$(".cpright ul li:nth-child(6)").attr('id','atc6');
				$(".cpright ul li:nth-child(7)").attr('id','atc7');
				$(".cpright ul li:nth-child(8)").attr('id','atc8');
			} else {
				$(".cpright ul li:nth-child(1)").removeAttr('id','atc1');
				$(".cpright ul li:nth-child(2)").removeAttr('id','atc2');
				$(".cpright ul li:nth-child(3)").removeAttr('id','atc3');
				$(".cpright ul li:nth-child(4)").removeAttr('id','atc4');
				$(".cpright ul li:nth-child(5)").removeAttr('id','atc5');
				$(".cpright ul li:nth-child(6)").removeAttr('id','atc6');
				$(".cpright ul li:nth-child(7)").removeAttr('id','atc7');
				$(".cpright ul li:nth-child(8)").removeAttr('id','atc8');
				
			}											
});

//新闻
$(window).scroll(function() {	
			if ($(window).scrollTop() > 1800) {
				$(".newright ul li:nth-child(1)").animate({opacity:'1'},500);
				$(".newright ul li:nth-child(2)").animate({opacity:'1'},1000);
				$(".newright ul li:nth-child(3)").animate({opacity:'1'},1500);
				$(".newright ul li:nth-child(4)").animate({opacity:'1'},2000);
			} else {
			}											
});
//新闻
$(window).scroll(function() {	
			if ($(window).scrollTop() > 1800) {
				$(".dianshi").attr('id','tc1');
				
			} else {
				$(".dianshi").removeAttr('id','tc1');
			}											
});
		
//案例
$(window).scroll(function() {	
			if ($(window).scrollTop() > 2500) {
				$(".anliMain ul li:nth-child(1)").attr('id','tc1');
				$(".anliMain ul li:nth-child(2)").attr('id','tc2');
				$(".anliMain ul li:nth-child(3)").attr('id','tc3');
				$(".anliMain ul li:nth-child(4)").attr('id','tc4');
				
			} else {
				$(".anliMain ul li:nth-child(1)").removeAttr('id','tc1');
				$(".anliMain ul li:nth-child(2)").removeAttr('id','tc2');
				$(".anliMain ul li:nth-child(3)").removeAttr('id','tc3');
				$(".anliMain ul li:nth-child(4)").removeAttr('id','tc4');
			}											
});

//合作伙伴
$(window).scroll(function() {	
			if ($(window).scrollTop() > 3000) {
				$(".hezuoMain ul li:nth-child(1)").attr('id','tc1');
				$(".hezuoMain ul li:nth-child(2)").attr('id','tc2');
				$(".hezuoMain ul li:nth-child(3)").attr('id','tc3');
				$(".hezuoMain ul li:nth-child(4)").attr('id','tc4');	
				$(".hezuoMain ul li:nth-child(5)").attr('id','tc5');
			} else {
				$(".hezuoMain ul li:nth-child(1)").removeAttr('id','tc1');
				$(".hezuoMain ul li:nth-child(2)").removeAttr('id','tc2');
				$(".hezuoMain ul li:nth-child(3)").removeAttr('id','tc3');
				$(".hezuoMain ul li:nth-child(4)").removeAttr('id','tc4');
				$(".hezuoMain ul li:nth-child(5)").removeAttr('id','tc5');
			}											
});