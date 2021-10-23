function check() {
 
    var c = 0;
    var q1 = document.q_page_3.q3_1.value;
    var q2 = document.q_page_3.q3_2.value;
    var q3 = document.q_page_3.q3_3.value;
    var result = document.getElementById("text_result")
    var quesiotns = document.getElementById("Q_page_3")
 
 
    if (q1 =="NYC") {c++}
    if (q2 =="Hillary Swank") {c++}
    if (q3== "None of the above") {c++}
    //    document.write(c);
quesiotns.textContent.discplay = "nonn"
   // result.textContent = '$(c)';

   if(c < 2 ){
      quesiotns.textContent = `You Failed.You got 3/${c}, Better luck next timer`

   }else{
      quesiotns.textContent =`You Pass, You got 3/${c}`

   }
}

function restart() {
   window.location.replace("/htmlfiles/index.html")
 }

 
 