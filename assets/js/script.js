const time = document.getElementById('time')
const minutes = document.getElementById('minutes')


let myInterval;
let userMinutes;
let userSeconds;

const startMinCountdown = () => {
    userMinutes = minutes.value
    userSeconds = userMinutes * 60
    console.log(userMinutes);
    if(userMinutes > 0){
        document.getElementById("pauseTimer").disabled = false
        document.getElementById("startTimer").disabled = true
        document.getElementById("restartTimer").disabled = true

        myInterval = setInterval(countDown, 1000)
    }
}    

const pauseMinCountdown = () => {
    if(startTimer){
        document.getElementById("pauseTimer").disabled = true
        document.getElementById("startTimer").disabled = false
        document.getElementById("restartTimer").disabled = false
        clearInterval(myInterval)
    }
}
const restartMinCountdown = () => {
    if(userSeconds > 0 && startTimer && pauseTimer){
        document.getElementById("pauseTimer").disabled = false
        document.getElementById("startTimer").disabled = true
        document.getElementById("restartTimer").disabled = true
        myInterval = setInterval(countDown, 1000)
    }
}

const countDown = () => {
    console.log("ss")
    let interMin = Math.floor(userSeconds / 60)
    let interSec = userSeconds % 60
    --userSeconds
    console.log(interMin, ":", interSec);
    time.innerHTML = `${interMin < 10 ? "0" + interMin : interMin}:${interSec < 10 ? "0" + interSec : interSec}`
    if (userSeconds < 0) {
        clearInterval(myInterval)
    }

}