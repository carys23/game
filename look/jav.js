const clueChoice = () => {
    let clueOptions = prompt("Did the poison kill Neil?");
    if (clueOptions.toLowerCase() == "yes") {
        alert("Yes the poison did kill Neil");
        goodEnding(); 
        return;
    }else {
        if (clueOptions.toLowerCase() == "no"){
            alert("Ok then!!");
            otherChoice();
            return;
        }}}
        const otherChoice = () => {
            let otherClue = prompt("What do you think ?");
            let weapon = ["knife","axe","fire","tie"];
            for(let i =0;i < weapon.length;i++){
            if(otherClue.toLocaleLowerCase() == weapon[i]){
                alert("It was a trick to trap you!Game Over");
                badEnding();
                return;
             } 
            }
               alert("Try Again!");
               return;
             
           
        }
    const goodEnding = () => {
        alert("But who did it?");
        who();}
    const who = () => {
        let optionsName = prompt("Was it Tam, Pedro or Jay?");
        if (optionsName.toLowerCase() == "tam"){
        alert("Yes !but the question is where was he when you saw him the last time?");
        room();
        return;
     }else {
        if (optionsName.toLowerCase() == "pedro" || "jay"){
            alert("Game over mate");
            badEndingTwo();
            return;}}}
const startGame = () => {
    alert("Let's begin");
    clueChoice()
}
document.getElementById("startBtn");
let button = document.getElementById("startBtn");
button.addEventListener("click", () => {
    startGame();
});
const room = () => {
    let guess = prompt("Which room are you talking about?")
    let guessRoom = ["bathroom","bedroom","hall","kitchen"];
    for(let i=0;i < guessRoom.length;i++){
        if(guess.toLocaleLowerCase() == "kitchen"){
            alert("You are absolutly right");
            winner();
            return;
        }
        alert("you are too close!");
        room();    
    }
}