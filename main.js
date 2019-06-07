





var carr = document.getElementById("walll");
var glass = document.querySelector(".lay2");
//all nikith elements
var nikith =document.getElementById("nikith");
var nik1=document.getElementById("nik11");
var nik2=document.getElementById("nik22");
var nikithbt=(-($(window).height() - nikith.offsetTop - nikith.offsetHeight))- nikith.offsetHeight;
var nik1bt=(-($(window).height() - nik1.offsetTop - nik1.offsetHeight))- nik1.offsetHeight;
var nik2bt=(-($(window).height() - nik2.offsetTop - nik2.offsetHeight))- nik2.offsetHeight;


var newp=document.getElementById("newp");

window.addEventListener("scroll",function(){

var off = window.pageYOffset;
//console.log(off+'off');

glass.style.borderRadius = (28+(off * 0.5)) + "px";//glass

//wall toggle
/*
if(off>=1500){
  
   // carr.classList.add("cs");
    carr.style.display="none";
}
else{
    //carr.classList.remove("cs");
    carr.style.display="block";
}
*/

//nikith image

    //sety=(351+(off * -0.1));
    
    //console.log(off * -0.1);
    nikith.style.transform="translate3d("+0+","+((off) * 0.03)+"px,0";


nik1.style.transform="translate3d("+0+","+((off-1500) * -0.05)+"px,0";


nik2.style.transform="translate3d("+0+","+((off-1500) * -0.05)+"px,0";



/* new parralax   */
newp.style.transform="translate3d("+0+","+((off-1300) * -0.03)+"px,0";


});


/*
window.addEventListener("DOMContentLoaded",scrollLoop,false);
var xsc,ysc;
function scrollLoop(e){
xsc=window.scrollX;
ysc=window.scrollY;
console.log(ysc);
setpo(0,ysc,carr);
requestAnimationFrame(scrollLoop);







}

function setpo(setx,sety,el){
    el.style.transform="translate3d("+setx+","+(sety*-0.1)+"px,0";
}
*/











        $(document).ready(function(){
        
        
            var scrollLink = $('.nav-item');
          
          
          
          
          $('.nav-link').click(function(e){
          var ref = $(this).attr('href');
          
          e.preventDefault();
          $('body,html').animate({
          scrollTop: $(ref).offset().top
          },1000);
          
          
          
          var controller = new ScrollMagic.Controler();
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t2'
          .setClassToggle('.t2','show')
          .addTo(controller)
          
          })
          
          
          
          
          
          
          });
          
          
          
          //active link switch
          /*
          $(window).scroll(function() {
              var scrollbarLocation = $(this).scrollTop();
              
              scrollLink.each(function() {
                
                var sectionOffset = $(this.hash).offset().top - 20;
                
                if ( sectionOffset <= scrollbarLocation ) {
                  $(this).parent().addClass('active');
                  //$(this).parent().siblings().removeClass('active');
                }
              })
              
            
            
          })
          
          */
     



          });
          
          
          
         
          
          $(document).ready(function(){
          var controller = new ScrollMagic.Controller();
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t2'
          
          })
          .setClassToggle('.t2','show')
          .addTo(controller);
          
          //////////////////////////////////////////////////
          
          var scene = new ScrollMagic.Scene({
            triggerElement: '#newp'
            
            })
            .setClassToggle('.carr','cs')
            .addTo(controller);

            var scene = new ScrollMagic.Scene({
                triggerElement: '#nikith'
                
                })
                .setClassToggle('.carr.cs','cs1')
                .addTo(controller);



          var scene = new ScrollMagic.Scene({
          triggerElement: '.t3'
          
          })
          .setClassToggle('.t3','show3')
          
          
          .addTo(controller);
          
          //////////////////////////////////////////////////nik image appear
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.nik'
          
          })
          .setClassToggle('.nik','show4')
          
          
          .addTo(controller);
          
          
          //////////////////////////////////////////////////car disapper 
          
          
          
          
          //////////////////////////////////////////////////bars
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t4'
          
          })
          
          .setClassToggle('.t4','show5')
          
          .addTo(controller);
          
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t5'
          
          })
          
          .setClassToggle('.t5','show6')
          
          .addTo(controller);
          
          
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t6'
          
          })
          
          .setClassToggle('.t6','show7')
          
          .addTo(controller);
          
          
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t7'
          
          })
          
          .setClassToggle('.t7','show8')
          
          .addTo(controller);
          
          
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t8'
          
          })
          
          .setClassToggle('.t8','show9')
          
          .addTo(controller);
          
          
          
          
          
          ////////////////////////////under specialities
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t2'
          
          })
          
          .setClassToggle('.t11','show12')
          
          .addTo(controller);
          
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t11'
          
          })
          
          .setClassToggle('.t12','show13')
          
          .addTo(controller);
          
          
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t12'
          
          })
          
          .setClassToggle('.t13','show14')
          
          .addTo(controller);
          
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t13'
          
          })
          
          .setClassToggle('.t14','show15')
          
          .addTo(controller);
          
          
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t14'
          
          })
          
          .setClassToggle('.t15','show16')
          
          .addTo(controller);
          
          
          
          
          /////////middle row
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t2'
          
          })
          
          .setClassToggle('.t16','show17')
          
          .addTo(controller);
          
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t16'
          
          })
          
          .setClassToggle('.t17','show18')
          
          .addTo(controller);
          
          
          
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t17'
          
          })
          
          .setClassToggle('.t18','show19')
          
          .addTo(controller);
          
          
          
          
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t18'
          
          })
          
          .setClassToggle('.t19','show20')
          
          .addTo(controller);
          
          
          /////right col
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t2'
          
          })
          
          .setClassToggle('.t20','show21')
          
          .addTo(controller);
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t20'
          
          })
          
          .setClassToggle('.t21','show22')
          
          .addTo(controller);
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t21'
          
          })
          
          .setClassToggle('.t22','show23')
          
          .addTo(controller);
          
          
          
          
          var scene = new ScrollMagic.Scene({
          triggerElement: '.t22'
          
          })
          
          .setClassToggle('.t23','show24')
          
          .addTo(controller);
          
          
          });