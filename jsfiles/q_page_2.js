function check() {
 
    var c = 0;
    var q1 = document.q_page_2.q2_1.value;
    var q2 = document.q_page_2.q2_2.value;
    var q3 = document.q_page_2.q2_3.value;
    var result = document.getElementById("text_result")
    var quesiotns = document.getElementById("Q_page_2")
 
 
    if (q1 =="wih his Dog" ) {c++}
    if (q2 == "Hillary Swank") {c++}
    if (q3== "His friend") {c++}
    //    document.write(c);
 quesiotns.textContent.discplay = "nonn"
   //  result.textContent = '$(c)';
 
    if(c < 2 ){
       quesiotns.textContent = `You Failed.You got ${c}/3, Better luck next timer`
 
    }else{
       quesiotns.textContent =`You Pass, You got ${c}/3`
 
    }
 }
 
  function restart() {
 
    window.location.replace("../index.html")
     

   }