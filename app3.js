// const clueChoice2 = () => {
//     let clueChoice2 = prompt("Was Neil strangled to death")
//     if (clueChioce2.toLowerCase() == "no"){
//         alert("no he wasn't strangled to death");
//         correct();
//     }else{
//         if(clueChoice2.toLowerCase () == "yes"){
//             optionsName();
//         } 
//     }
// }

// const anotherRoom = () =>{
//     let = roomChoice}

// const back = () => {
//     for( let back; = 0; back ){
//     if (correctRoom == "no"){
//         roomChoice();
//     }}

const roomChoice = () => {
    let roomChoice = prompt("Which room would you like to investigate the bedroom, kitchen or bathroom?");
    if (roomChoice.toLowerCase() == "bathroom"){
        alert("There is 3 clues in this room");
        alert("Clue 1: In the bathroom the shower curtain had been pulled down like there been a struggle");
        alert("Clue 2: There was mud all over the floor");
        alert("Clue 3: The mirror was broken");
        correctRoom();
        return;
    }
     else if (roomChoice.toLowerCase() == "bedroom"){
    alert("There is 3 clues in this room");
    alert("Clue 1: There was 2 glasses in the bedroom by Neil's bed");
    alert("Clue 2: The room has ransacked");
    alert("Clue 3: There was a hat in the room that did not belong to Neil");
    correctRoom();
}
    
    else if (roomChoice.toLowerCase() == "kitchen"){
    alert("There is 3 clues in this room");
    alert("Clue 1: There is mud on the floor");
    alert("Clue 2: There is rat poison in the bin");
    alert("Clue 3: There was a knife missing ");
    correctRoomAnswer();
    return; }}

const correctRoomAnswer = () =>{
    let correctRoomAnswer = prompt("Do you think Neil was killed in this room?");
    if (correctRoomAnswer.toLowerCase() == "yes")
    weaponP();
    else if (correctRoomAnswer.toLowerCase() == "no")
    badEnding();
    }

        








const correctRoom =() =>{
    let correctRoom = prompt("Do you think Neil was killed in this room?");
    if (correctRoom.toLowerCase() == "yes"){
        alert("Game over mate");
        return;
    }else {
         if (correctRoom.toLowerCase() == "no"){
            alert("Neil was not killed in this room");
            roomChoice();
         }}}

const weaponP = () => {
    let weaponP = prompt("Did the poison kill Neil?");
    if (weaponP.toLowerCase() == "yes") {
        alert("Yes the poison did kill Neil");
        goodEnding(); 
        return;
    }else {
        if (weaponP.toLowerCase() == "no"){
            alert("Game over mate");
            badEnding();
            return;
        }}}

    const goodEnding = () => {
        alert("But who did it?");
        who();}
    
    const badEnding =() => {
        alert("Game over mate");
    }
    



    const who = () => {
        let optionsName = prompt("Was it Tam, Pedro or Jay?");
        if (optionsName.toLowerCase() == "tam"){
        alert("Yes you are a good dectective did you ever think to join the police?");
        winner();
        return;
     }else {
        if (optionsName.toLowerCase() == "pedro" || "jay"){
            alert("Game over mate");
            badEndingTwo();
            return;}}}
    
  
            
            
                
                



    
    
const plot = () => {
     alert("Everyone was at Neil's house party until early hours in the morning, drinking and playing. In the morning when everyone woke up from a tremendous night, John went upstairs to have a chat with him, little did he know Neil wasn't feeling good well actually he was dead!");
     alert("At this point we have 3 suspects which are: Tam, Pedro, Jay. We know that Tam is Neil's co-worker who's dream is to take Neil's position as a CEO. Pedro is Neil's friend since childhood, things are not going so well in their relationship, everything started when Neil stole Pedro's girlfriend. And now we have Jay, one of Neil's best friend and the only person that knows where Neil is hiding a piece of paper with information that is worth millions");
     alert("Now it's your time to shine as a detective, have fun in your investigation!");
     roomChoice();  }
    






     
     


const startGame = () => {
    alert("Let's begin");
    plot();
}
document.getElementById("startBtn");
let button = document.getElementById("startBtn");
button.addEventListener("click", () => {
    startGame();
})