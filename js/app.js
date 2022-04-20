
/*
Pravila igre
-Igrac mora da pogodi broj izmedju minimalnog i maksimalnog
-Igrac ima odredjeni broj pokusaja
-Igrac se obavestava o preostalim pokusajima
-Ako igrac izgubi, program ga obavestava o ispravnom odgovoru
-Igrac moze odabrati da igra ponovo
*/

//vrednosti igre
let min=1;
let max=10;
let winningNum=getWinNum(min,max);
let guessesLeft=3;

//elementi korisnickog interfesja
const game=document.getElementById('game');
const minNum=document.getElementById('minNum');
const maxNum=document.getElementById('maxNum');
const guessBtn=document.getElementById('guessBtn');
const guessNum=document.getElementById('guessNum');
const message=document.getElementById('message');
const playAgain=document.getElementById('playAgain');

minNum.innerText=min;
maxNum.innerText=max;
//callback za pogadjanje broja
guessBtn.addEventListener('click', ()=>{
    let guess=parseInt(guessNum.value);
    if(guess!==NaN){
        if(guess>=1&&guess<=10){
          setMessage(`${guess} није број који смо тражили, имате ${guessesLeft-1} покушаја`, 'red');
          guessesLeft-=1; 
          clearInput();
          if(guessesLeft==0){
            gameOver();
            setMessage(`Изгубили сте, тражени број је био ${winningNum}`, 'red');
          }
        if(guess==winningNum){
            setMessage(`ПОБЕДА! ${winningNum} је број који смо тражили`, 'green');

             gameOver();
            guessNum.style.borderColor='green';
        }
       
       

        }
        else{
            setMessage(`Рекли смо од 1 до 10, а ви сте унели ${guessNum.value}`, 'red')
            clearInput();
        }

    }
 
})

//osluskivac za playAgain
playAgain.addEventListener('click',()=>{
    window.location.reload();
})

//postavljanje poruke
function setMessage(msg, color){
    message.innerText=msg;
    message.style.color=color;
}
function gameOver(){
  guessBtn.disabled=true;
  guessNum.disabled=true;
  playAgain.style.display='block';
}
function clearInput(){
    guessNum.value='';
}

//generisanje broja
function getWinNum(min, max){
const num=Math.floor(Math.random()*(max-min+1)+min);
return num;
}