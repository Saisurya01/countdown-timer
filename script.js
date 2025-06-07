const countdownInput=document.getElementById("Countdown");
const startbutton=document.getElementById("startbtn");
const timerdisplay=document.getElementById("Timerdisplay");
let mycountdown;
startbutton.addEventListener("click",()=>{
    clearInterval(mycountdown);
    let minutesInput = parseFloat(countdownInput.value);
    if (isNaN(minutesInput) || minutesInput < 0) {
        timerdisplay.textContent = "Please enter a valid number of minutes.";
        return;
    }

    let seconds = Math.floor(minutesInput * 60);
    mycountdown=setInterval(()=>{
        if(seconds<=0){
            clearInterval(mycountdown);
            timerdisplay.textContent="Time is up";
        }else{
            const minutes=Math.floor(seconds/60);
            const remainingSeconds =seconds%60;
             const formattedTime =
                (minutes < 10 ? "0" : "") + minutes + ":" +
                (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
                 timerdisplay.textContent = formattedTime;
            seconds--; 
        }
    },1000);
});
