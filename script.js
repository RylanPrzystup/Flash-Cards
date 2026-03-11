

let defArray=[]

let termArray=[]

let flipped=false;

function saveTerms(){
    //set var in order to push
    let term = document.getElementById('term')
    console.log(`term saved is: ${term.value}`)
    

    let def = document.getElementById('definition')
    console.log(`def saved is: ${def.value}`)
    


    //pass next funtion
    valInputs(def, term)
}

function valInputs(def, term){
    console.log(`----`)
    console.log(`def saved is: ${def.value}`)
    console.log(`term saved is: ${term.value}`)

    if(def && term ){

    termArray.push(term.value)
    defArray.push(def.value)
    console.log(`def array = ${defArray} | term array = ${termArray}`)

    }

    else{
        alert(`Invlaid Inputs, try again!`)
    }
} 


function generateFlash(){
const outputFlash = document.getElementById('outputFlash')
html=''

    for(i=0; i<termArray.length; i++){
        html+=`
        <div class="card-container" id="cardContainer" onclick="flipCard(${i})">
        <div class="card" id="card${i}">
            <!-- font side of card -->
            <div class="card-face card-front">
                <div class="icon">🤔</div>
                <h2>Term:</h2>
                <p>${termArray[i]}</p>
                <div class="hint">Click to flip</div>
            </div>

            <div class="card-face card-back">
                <div class="icon">🤔</div>
                <h2>Definition</h2>
                <p>${defArray[i]}</p>
                <div class="hint">Click to flip</div>
            </div>


        </div>
    </div>
        `
    }

    outputFlash.innerHTML=html
    
}


function flipCard(index){
    let card = document.getElementById('card'+index);
    console.log(card.style.transform)
    if( card.style.transform == 'rotateY(180deg)'){
        card.style.transform = 'rotateY(0deg)';
    }
    else{
        card.style.transform = 'rotateY(180deg)'
    }

}


function clearInputs(){
    defArray=[]
    termArray=[]
    const outputFlash = document.getElementById('outputFlash')
    let html = ''
    outputFlash.innerHTML=html

}                                   
