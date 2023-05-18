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
  
  
  
// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to animate the graph width
function animateGraph() {
  var graphs = document.getElementsByClassName('html');

  // Loop through each graph element
  for (var i = 0; i < graphs.length; i++) {
    var html = graphs[i];

    // Check if the graph section is in the viewport and scrolled to a certain threshold
    if (isInViewport(html)) {
      var width = html.dataset.width; // Get the desired width from a data attribute
      html.style.width = '100%'; // Animate the graph width
      html.style.transition = 'all linear 1s';
    }
  }


  var graphs = document.getElementsByClassName('css');

  // Loop through each graph element
  for (var i = 0; i < graphs.length; i++) {
    var css = graphs[i];

    // Check if the graph section is in the viewport and scrolled to a certain threshold
    if (isInViewport(css)) {
      var width = css.dataset.width; // Get the desired width from a data attribute
      css.style.width = '100%'; // Animate the graph width
      css.style.transition = 'all linear 1s'; // Animate the graph width
    }
  }


  var graphs = document.getElementsByClassName('JavaScript');

  // Loop through each graph element
  for (var i = 0; i < graphs.length; i++) {
    var JavaScript = graphs[i];

    // Check if the graph section is in the viewport and scrolled to a certain threshold
    if (isInViewport(JavaScript)) {
      var width = JavaScript.dataset.width; // Get the desired width from a data attribute
      JavaScript.style.width = '60%'; // Animate the graph width
      JavaScript.style.transition = 'all linear 1s'; // Animate the graph width
    }
  }


  var graphs = document.getElementsByClassName('jQuery');

  // Loop through each graph element
  for (var i = 0; i < graphs.length; i++) {
    var jQuery = graphs[i];

    // Check if the graph section is in the viewport and scrolled to a certain threshold
    if (isInViewport(jQuery)) {
      var width = jQuery.dataset.width; // Get the desired width from a data attribute
      jQuery.style.width = '70%'; // Animate the graph width
      jQuery.style.transition = 'all linear 1s'; // Animate the graph width
    }
  }


  var graphs = document.getElementsByClassName('Bootstrap');

  // Loop through each graph element
  for (var i = 0; i < graphs.length; i++) {
    var Bootstrap = graphs[i];

    // Check if the graph section is in the viewport and scrolled to a certain threshold
    if (isInViewport(Bootstrap)) {
      var width = Bootstrap.dataset.width; // Get the desired width from a data attribute
      Bootstrap.style.width = '90%'; // Animate the graph width
      Bootstrap.style.transition = 'all linear 1s'; // Animate the graph width
    }
  }


  var graphs = document.getElementsByClassName('SASS');

  // Loop through each graph element
  for (var i = 0; i < graphs.length; i++) {
    var SASS = graphs[i];

    // Check if the graph section is in the viewport and scrolled to a certain threshold
    if (isInViewport(SASS)) {
      var width = SASS.dataset.width; // Get the desired width from a data attribute
      SASS.style.width = '35%'; // Animate the graph width
      SASS.style.transition = 'all linear 1s'; // Animate the graph width
    }
  }


  var graphs = document.getElementsByClassName('Tailwind');

  // Loop through each graph element
  for (var i = 0; i < graphs.length; i++) {
    var Tailwind = graphs[i];

    // Check if the graph section is in the viewport and scrolled to a certain threshold
    if (isInViewport(Tailwind)) {
      var width = Tailwind.dataset.width; // Get the desired width from a data attribute
      Tailwind.style.width = '60%'; // Animate the graph width
      Tailwind.style.transition = 'all linear 1s'; // Animate the graph width
    }
  }






}

// Add the scroll event listener
window.addEventListener('scroll', animateGraph);













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

