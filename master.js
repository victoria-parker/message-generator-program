// Random number generator
function randomNumber(num){
    return Math.floor(Math.random() * num)
}
// Obj with names arrays
const pirateName={
    firstName:["Fishy","Sharkbait","Sticky","Ruthless","Sassy","Red"],
    middleName:["Creepy","Hook","Wild Wind","Slappy","Beard","One-Ear","Parrot"],
    lastName:["Sea","Joe","McGee","Moonscar","Jack","Rat Breath","Sparrow"]
}

//select the element where to display the nae
const yourName=document.getElementById('yourName')

//createName function
function createName(){

    yourName.innerHTML="";
    let fullName=[];
    let formatedName="";

    let firstName=pirateName.firstName[randomNumber(pirateName.firstName.length)];
    fullName.push(firstName);
    let middleName=pirateName.middleName[randomNumber(pirateName.middleName.length)];
    fullName.push(middleName);
    let lastName=pirateName.lastName[randomNumber(pirateName.lastName.length)];
    fullName.push(lastName);

    formatedName=fullName.join(' ');
    yourName.innerHTML="<H2>"+formatedName+"</H2>";
    
}
//button and eventLister to run the programm
const btn=document.getElementById('btn');
btn.addEventListener('click', ()=>{
    createName()
})


