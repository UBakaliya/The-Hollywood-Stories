function check() {
 
    var c = 0;
    var q1 = document.Q_page_4.q4_1.value;
    var q2 = document.Q_page_4.q4_2.value;
    var q3 = document.Q_page_4.q4_3.value;
    var result = document.getElementById("text_result")
    var quesiotns = document.getElementById("q_page_4")
 
 
    if (q1 =="Brad Pitt and George Clooney") {c++}
    if (q2 =="everything began when Clooney teased Pitt with an embarrassing note") {c++}
    if (q3== "during the making of Ocean’s Twelve") {c++}

quesiotns.textContent.discplay = "nonn"
   //  result.textContent = '$(c)';
 
if(c < 2 ){
   quesiotns.textContent = `You Failed.You got 3/${c}, Better luck next timer`
 
}else{
   quesiotns.textContent =`You Pass, You got 3/${c}`
 
   }
 }
 
  function restart() {
    window.location.replace("../index.html")
     
  }