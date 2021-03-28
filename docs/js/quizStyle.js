$(document).ready(function(){

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
  
  setProgressBar(current);
  
  $(".next").click(function(){
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(++current);
  });
  
  $(".previous").click(function(){
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //Remove class active
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show();
  
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  previous_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(--current);
  });
  
  function setProgressBar(curStep){
  var percent = parseFloat(100 / steps) * curStep;
  percent = percent.toFixed();
  $(".progress-bar")
  .css("width",percent+"%")
  }
  
  $(".submit").click(function(){
  return false;
  })
  
  });




  ///translating tooly!
  var horas = new Date().getHours();
if (horas >= 0 && horas < 12)
    {var relativeTime = "morning";}
else if (horas >= 12 && horas < 18)
    {var relativeTime = "afternoon";}
else 
    {var relativeTime = "evening";}



var i = 0;
var qt =0;
var dog = 0;
var cat = 0;
var otter = 0;
var liger = 0;
var txt = `Good ${relativeTime} – I'm here to help determine your annual fashion footprint! Answer the following questions to see how your clothing affects the environment and economy.`; /* The text */
var textothy = `Bet! I'm on it...`;
var textothy2 = 'Finding fashion industry facts...';
var textothy3 = 'Plugging in your fashion habits...';
var textothy4 = 'Crunching the numbers...';
var textothy5 = 'Ready for your results?';
var speed = 35; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
 


next2.addEventListener("click", myFunction);



function myFunction() {

  console.log(textothy)

  if (qt < textothy.length) {
    document.getElementById("demo1").innerHTML += textothy.charAt(qt);
    qt++;
    setTimeout(myFunction, speed);
  }
  myFunction2();
}



function myFunction2() {
  
  console.log(qt);

  if (qt >= 17){

  if (dog < textothy2.length) {
    document.getElementById("demo2").innerHTML += textothy2.charAt(dog);
    dog++;
    setTimeout(myFunction2, speed);
  }
}

myFunction3();
}


function myFunction3(){

  console.log(dog);

  if (dog >=33){

  if (cat < textothy3.length) {
    document.getElementById("demo3").innerHTML += textothy3.charAt(cat);
    cat++;
    setTimeout(myFunction3, speed);
  }
}

myFunction4();


}

function myFunction4(){

  console.log(cat);

 if (cat >=34){

  if (otter < textothy4.length) {
    document.getElementById("demo4").innerHTML += textothy4.charAt(otter);
    otter++;
    setTimeout(myFunction4, speed);
  }
}

myFunction5();


}

function myFunction5(){

  console.log(otter);


  if (otter >=24){

  if (liger < textothy5.length) {
    document.getElementById("demo5").innerHTML += textothy5.charAt(liger);
    liger++;
    setTimeout(myFunction5, speed);
  }
}



}