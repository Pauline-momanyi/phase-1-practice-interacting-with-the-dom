let counter = document.getElementById('counter')
let counterCont = Number(counter.textContent)
console.log(counterCont);

function timed(){
    counterCont += 1;
    counter.innerHTML = counterCont;
}
let start = setInterval( timed,1000)

document.getElementById('minus').addEventListener('click', ()=>{
    counter.innerHTML = counterCont --
    console.log(counterCont);
})

document.getElementById('plus').addEventListener('click', () =>{
    counter.innerHTML = counterCont ++
})

document.getElementById('heart').addEventListener('click', () =>{
    let likes = document.createElement('li')
    likes.innerHTML = `${counterCont} has been liked 1 time`
    document.querySelector('.likes').appendChild(likes)
})

let pauseTimer = document.getElementById('pause')
pauseTimer.addEventListener('click', pauseResume)
function pauseResume(){
    if(pauseTimer.textContent === "pause"){
        console.log("Working")
        clearInterval(start)
        pauseTimer.innerText = "resume"

        document.getElementById('submit').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('plus').disabled = true;
        document.getElementById('heart').disabled = true;
  
    }else if(pauseTimer.innerText === 'resume'){
        console.log('Sheesh')
        start = setInterval(timed,1000)
        
        pauseTimer.textContent = "pause"
        document.getElementById('submit').disabled = false;
        document.getElementById('minus').disabled = false;
        document.getElementById('plus').disabled = false;
        document.getElementById('heart').disabled = false;
       
    }
}
    

let form = document.querySelector('form')
console.log(form);
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let comment = form.querySelector('#comment-input').value 
    console.log(comment);
    let newCom = document.createElement('p')
    newCom.textContent = comment
   document.querySelector('#list').appendChild(newCom)
   e.target.reset();
})
