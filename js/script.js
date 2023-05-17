$(function(){

    // ==========GO TO TOP PART START==========
  
    $('.go-to-top').on("click", function(){
      $("html,body").animate({scrollTop: 0}, 100)
    })
  
    $(window).on('scroll', function(){
      var scroll = $(this).scrollTop();
      if(scroll>300){
        $('.go-to-top').fadeIn(500)
      }else{
        $('.go-to-top').fadeOut(500)
      }
    })
  
  
    // ==========GO TO TOP PART END==========
  
  
      // ==========NAV SCR0LL START==========
  
      $(Window).scroll(function(){
        if( $(window).scrollTop() > 500){
          $(".menu").addClass('nav-scroll')
        }
        else{
          $(".menu").removeClass('nav-scroll')
        }
      });
  
      // ==========NAV SCR0LL END==========




      // ==========PROJECT NICE-SCR0LL START==========

      $(".project-slider").niceScroll({
        cursorcolor: "#3dfdff", // change cursor color in hex
        cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: "8px", // cursor width in pixel (you can also write "5px")
        cursorborder: "1px solid #3dfdff", // css definition for cursor border
        cursorborderradius: "5px", // border radius in pixel for cursor
        scrollspeed: 60, // scrolling speed
        mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
    });


      // ==========PROJECT NICE-SCR0LL END==========
  
  
  










  });









// ==========CURSOR==========

//     var c=document.getElementById("can");
// var co=c.getContext("2d");
// var colors=['#ccc7c7','#ccc7c7','#ccc7c7'];
// function init()
// {
// document.onmousemove=anim;
 

// }

// function anim(evt)
// {
//     var bodycursor= document.createElement("div");
//     bodycursor.setAttribute("class","bodycursor");
//     document.body.appendChild(bodycursor);
//     bodycursor.style.left=evt.clientX+'px';
//     bodycursor.style.top=evt.clientY+'px';
//     var clr=Math.floor(Math.random()*colors.length);
//     bodycursor.style.borderColor=colors[clr];
//     bodycursor.style.transition="all 0.4s linear 0s";
//     bodycursor.style.left=bodycursor.offsetLeft-0+'px';
//     bodycursor.style.top=bodycursor.offsetTop-0+'px';
//     bodycursor.style.width="50px";
//     bodycursor.style.height="50px";
//     bodycursor.style.borderWidth="0px";
//     bodycursor.style.opacity=0;
    
// }

// window.onload=init;



// ==========CURSOR==========

