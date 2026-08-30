let flashcards = [
    {
        question:"What is HTML?", 
        answer: "HTMl stands for Hypertext Markup Language."
    },

    {
        question:"What is CSS?",
        answer: "Css is used for styling web pages."
    },

    {
        question:"What is JavaScript?",
        answer:"JavaScripts adds interactivity to web pages."
    },
];

let current = 0;

function displayCard(){
    document.getElementById("question").innerText = flashcards[current].question;

    document.getElementById("answer").innerText = flashcards[current].answer;

    document.getElementById("answer").style.display="none";

}

function showAnswer(){
    document.getElementById("question").style.display="block"

}

function nextCard(){
    if(current<flashcards.length-1){
        current++;
    }else{
        current=0;
    }
    displayCard();
}

function prevCard(){
    if(current>0){
        current--;
    }else{
        current= flashcards.length-1;
    }
    displayCard();
}

function addCard(){
    let q = document.getElementById("newQuestion").Value;
    let a = document.getElementById("newAnswer").Value;
         
        if(q==" " || a==" "){
            alert("Enter Question and Answer");
            return;
        }
        flashcards.push({
            question:q,
            answer:a,
        });

     document.getElementById("newQuestion").Value=" ";
     document.getElementById("newAnswer").Value=" ";

            alert("Flashcards Added");

}


function editCard(){
    let q = document.getElementById("newQuestion").Value;
    let a = document.getElementById("newAnswer").Value;
         
        if(q!=" " && a!=" "){
            flashcards[current].question=q;
            flashcards[current].answer=a;
            displayCard();
            alert("Flashcard Updated");
        }
}


function deleteCard(){
    if(flashcards.length>1){
        flashcards.splice(current,1);
        current=0;
        displayCard();
        alert("Flashcard Deleted");

    }else{
        alert("Cannot delete last flascards.");
    }
}
 displayCard();
