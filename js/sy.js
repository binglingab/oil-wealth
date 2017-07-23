$(document).ready(function(){
//幻灯片	
 var i=0;

 var autoChange= setInterval(function(){
    
   if(i<$(".hdp li").length-1){
       i++;
	}else{  
	   i=0;
    }    
      changeTo(i) ;
     
	  	
   },3500);
  
  $(".hdp").find("li").each(function(item){
      $(this).hover(function(){
	     clearInterval(autoChange);
	     i=item;
	  },
	  function(){ 
	  autoChange= setInterval(function(){ 
    if(i<$(".hdp li").length-1){
       i++;
	 }else{  
	   i=0;
     }    
      changeTo(i) ;      	
      },3500);
	  });
  
  
  });


  function changeTo(num){  
   $(".hdp").find("li").removeClass("hdOn").hide().eq(i).fadeIn().addClass("hdOn"); 
	 $(".num").find("li").fadeIn().removeClass("bo").eq(i).addClass("bo"); 
 }
 
  
  $(".num").find("li").click(function(){
  	         clearInterval(autoChange);
           $(".num").find("li").removeClass("bo");
           $(".hdp").find("li").removeClass("hdOn").hide();
            $(this).addClass("bo");
            $(".hdp").find("li").eq($(this).index()).fadeIn().addClass("hdOn");

  });


 });





$(document).ready(function(){
$("#TZSX").find("li").hover(function(){
  $("#TZSX").find("li>span").removeClass("dis").addClass('undis');
  $("#TZSX").find("li>a").removeClass("dq");
  $(this).find("span").removeClass("undis").addClass("dis");
  $(this).find("a").addClass("dq"); 
});
  });


$(document).ready(function(){
      $(".span_box").find("span").click(function(){
        $(".span_box").find("span").removeClass("dq1");
        $(".nr_box").find("div").removeClass("dis").addClass("undis");
        $(this).addClass("dq1");
        $(".nr_box").find("div").eq($(this).index()).removeClass("undis").addClass("dis");
      })
  });



$(document).ready(function(){
function initMenu() {
  $('.box2 .xx_02').hide();
  $('.box2  .xx_01').mouseover(
    function() {
      var checkElement = $(this).next();
      if((checkElement.is('.xx_02')) && (!checkElement.is(':visible'))) {    
        $('.box2  .xx_02:visible').slideUp('slow');
        checkElement.slideDown('slow');
        return false;
        }
      }
    );  
  

  $('.box2  .xx_02').mouseover(
  function(){
      $(this).show();
  }
  );
  $('.box2  .xx_02').mouseout(
  function(){
      $(this).hide();
  }
  );
  
  }
$(function() {initMenu();});
  });







$(document).ready(function(){
        $("#backtop").click(function(){
          $(document).scrollTop(0);
        });
  });


$(document).ready(function (){
 $("#nave>ul>li").hover(function(){
    $(this).find("ul").css("display","block");   
 }, function(){
    $("#nave ul ul ").css("display","none"); 

  $("#nave>ul>ul").hover(function(){
     $(this).css("display","block");
     $("#nave>ul>li").addClass("nave-hover");
  })
 });  
});





$(document).ready(function(){
   $(".bl").hover(function(){
         setInterval(function(){banScroll();},900);
          function banScroll(){
    $(".bl").animate({
      opacity:"1"
    },150);

    $(".bl").delay(300).animate({
      opacity:"0"
    },150);
}
   });

});




$(window).scroll(function(){
  $("#backtop").click(function(){
          $(document).scrollTop(0);
        });
   $("#backtop2").click(function(){
      $(document).scrollTop(0);
      });
    var _top = $(document).scrollTop();
    var _bottom =$(document).height()-1060;
       
       if( _top > 0 && _top<_bottom ){
            $("#backtop2").show();
           } else  {
            $("#backtop2").hide();
           }
});




$(document).ready(function(){
     $(".box1>ul>li ").click(function(){
      $(".box1").find("li").css("background","url(images/05.jpg) no-repeat");
      $(this).css("background","url(images/03.png) no-repeat");
      $(".expert-box").find(".box2").removeClass("dis").addClass("undis");
      $(".expert-box").find(".box2").eq($(this).index()).removeClass("undis").addClass("dis");
     });
   });



