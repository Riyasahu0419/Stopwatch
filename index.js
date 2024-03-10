let second=0
let minute=0
let hours=0
let milisecond=0
let time;

let display_timer = document.querySelector(".display")


    function start(){
       time= setInterval(()=>{
            milisecond+=100;
            if(milisecond==1000){
                milisecond=0
                second+=1;

            }

           if(second==60){
            second=0
            minute++;
           } 
           if(minute==60){
            minute=0
            hours++;
           }
           display_timer.innerText=formatTime(hours)+" : " + formatTime(minute)+ " : "+ formatTime(second)+ " : " + formatTime(milisecond);
        },100)

    }

    
    function pouse(){
        clearInterval(time)
    }
    function reset(){
        second=0
        minute=0
        hours=0
        milisecond=0

        display_timer.innerText="00hr : 00min : 00s : 00ms"
                
        
    }

    // when left side timer will be 0 like hour , minute then next zero should be work in timer like sec , milisec

    function formatTime(time){
        return (time<10 ? "0" + time : time);
    }




