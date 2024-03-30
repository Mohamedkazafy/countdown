const countdown = () =>{
    const date = new Date("May 30, 2024, 00:00:00").getTime()
    const now = new Date().getTime()
    const diff = date - now
    const secounds = 1000    
    const minuts = secounds * 60
    const hours = minuts *60
    const days = hours*24
    let timeDay = Math.floor(diff / days)
    let timeHours = Math.floor((diff% days)/hours)
    let timeMinuts = Math.floor((diff % hours)/ minuts)
    let timeSecounds = Math.floor((diff % minuts)/ secounds)
    timeHours = timeHours < 10 ? "0" +timeHours:timeHours
    timeDay = timeDay < 10 ? "0" +timeDay:timeDay
    timeSecounds = timeSecounds < 10 ? "0" +timeSecounds:timeSecounds
    timeMinuts = timeMinuts < 10 ? "0" +timeMinuts:timeMinuts
    document.getElementById("days").textContent = timeDay
    document.getElementById("hours").textContent = timeHours
    document.getElementById("minuts").textContent = timeMinuts
    document.getElementById("sec").textContent = timeSecounds
}

setInterval(countdown, 1000)