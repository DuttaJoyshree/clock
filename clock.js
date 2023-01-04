
    var myVar = setInterval(function() {
        myTimer();
      }, 1000);
      
      function myTimer(){
        const d=new Date();
        var hr=d.getHours();
        var min=d.getMinutes();
        var sec=d.getSeconds();
        var ampm="";
        if(hr>12){
            ampm="PM";
            hr=hr-12;
        }
        else{
            ampm="AM"
        }
        document.getElementById("clockTime").innerHTML=hr+" : "+min +" : "+sec+" "+ampm;
      }
  
//   currentTime();