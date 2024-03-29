let d=document.querySelectorAll(".you");
const computerChoice=()=>
{
    const options=["rock","paper","scissors"]
    const rand=Math.floor(Math.random()*3);
    return options[rand];
}
const game=(userChoice)=>
{
console.log("userchoice=",userChoice);
let cc=computerChoice();
console.log("computerchoice=",cc);
let f=document.getElementById("love").innerText="other choice: "+cc;
if(userChoice==cc)
{
    let a=document.getElementById("first").innerText="game is draw";
}
else{
    if(userChoice=="rock"&&cc=="scissors")
    {
        let b=document.getElementById("first").innerText="you won the game";
    }
   else if(userChoice=="rock"&&cc=="paper")
    {
        let b=document.getElementById("first").innerText="you lost the game";
    }
   else if(userChoice=="paper"&&cc=="rock")
   {
    let b=document.getElementById("first").innerText="you won the game";
}
if(userChoice=="paper"&&cc=="scissors")
{
    let b=document.getElementById("first").innerText="you lost the game";
}
if(userChoice=="scissors"&&cc=="paper")
{
    let b=document.getElementById("first").innerText="you won the game";
}
if(userChoice=="scissors"&&cc=="rock")
{
    let b=document.getElementById("first").innerText="you lost the game";
}

}
}

d.forEach((you)=>
{
you.addEventListener("click",()=>
{
    const userChoice=you.getAttribute("id");
    game(userChoice);
    })
})