
let count=0
let id

// let start=document

function start(){
    
    id=setInterval(()=>{
        console.log(count)
        count+=1
        document.getElementById('countdisplay').innerText = count;
        
    },1000)
    
    
} 


function pause(){
    
    clearInterval(id);
    
}

function reset(){
    clearInterval(id);
    count=0;
    // document.getElementById('countdisplay').innerText = count;

   
    
}
