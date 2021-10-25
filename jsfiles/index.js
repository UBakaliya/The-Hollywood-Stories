window.onload = function () {
    var minute = 0;
    var sec = 30;
    setInterval(function () {
       document.getElementById("timer_1").innerHTML =
          minute + " : " + sec;
       sec--;
       if (sec < 0) {
          minute--;
        //   sec = 60;
          if (minute <0) {
             window.location.replace("Q_page_story_1.html")

          }
       }
    }, 1000);
 };



//  window.onload = function () {
    var minute_2 = 0;
    var sec_2 = 30;
    setInterval(function () {
       document.getElementById("timer_2").innerHTML =
          minute_2 + " : " + sec_2;
       sec_2--;
       if (sec_2< 0) {
          minute_2--;
        //   sec = 60;
          if (minute_2 <0) {
             window.location.replace("art151project2/htmlfiles/Q_page_story_2.html")

          }
       }
    }, 1000);
//  };

var minute_3 = 0;
var sec_3 = 30;
setInterval(function () {
   document.getElementById("timer_3").innerHTML =
      minute_3 + " : " + sec_3;
   sec_3--;
   if (sec_3< 0) {
      minute_3--;
    //   sec = 60;
      if (minute_3 <0) {
         window.location.replace("/htmlfiles/Q_page_story_3.html")

      }
   }
}, 1000);

var minute_4 = 0;
var sec_4 = 30;
setInterval(function () {
   document.getElementById("timer_4").innerHTML =
      minute_4 + " : " + sec_4;
   sec_4--;
   if (sec_4< 0) {
      minute_4--;
    //   sec = 60;
      if (minute_4 <0) {
         window.location.replace("/htmlfiles/Q_page_story_4.html")

      }
   }
}, 1000);




function check() {
 
   var c = 0;
   var q1 = document.q1_page_1.q1_1.value;
   var q2 = document.q1_page_1.q1_2.value;
   var q3 = document.q1_page_1.q1_3.value;
   var result = document.getElementById("text_result")
   var quesiotns = document.getElementById("q1_page_1")


   if (q1 =="He though that Chris came to buy food for his dog." ) {c++}
   if (q2 == "Rainy day") {c++}
   if (q3== "Petco") {c++}
      // document.write(c);
quesiotns.textContent.discplay = "nonn"
   // result.textContent = '$(c)';

   if(c < 2 ){
      quesiotns.textContent = `You Failed.You got ${c}/3, Better luck next timer`

   }else{
      quesiotns.textContent =`You Pass, You got ${c}/3`

   }
}

 function restart() {

   window.location.replace("/htmlfiles/index.html")
    
 }
