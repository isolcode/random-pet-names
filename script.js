const maleDogNames = ["Max", "Charlie", "Cooper", "Buddy", "Rocky", "Bear", "Duke", "Jack", "Toby", "Tucker"]

const femaleDogNames = ["Bella", "Luna", "Daisy", "Lucy", "Zoe", "Molly", "Sadie", "Rosie", "Ruby", "Chloe"]

let maleBtn = document.getElementById("male-btn")
let femaleBtn = document.getElementById("female-btn")
let firstNameEl = document.getElementById("first-name")
let secondNameEl = document.getElementById("second-name")


function getRandomMaleName(){
    let firstName = ""
    let secondName = ""
    for(let i = 0; i < 1; i++){
        let randomIndex = Math.floor(Math.random() *maleDogNames.length)
        firstName += maleDogNames[randomIndex]
    }

    for(let i = 0; i < 1; i++){
        let randomIndex = Math.floor(Math.random() *maleDogNames.length)
        secondName += maleDogNames[randomIndex]
    }

    firstNameEl.textContent = firstName
    secondNameEl.textContent = secondName
    firstNameEl.style.backgroundColor = "skyblue";
    secondNameEl.style.backgroundColor = "skyblue";
}
maleBtn.addEventListener("click", getRandomMaleName);

function getRandomFemaleName(){
    let firstName = ""
    let secondName = ""
    for(let i = 0; i < 1; i++){
        let randomIndexTwo = Math.floor(Math.random() *femaleDogNames.length)
        firstName += femaleDogNames[randomIndexTwo] 
    }

    for(let i = 0; i < 1; i++){
        let randomIndexTwo = Math.floor(Math.random() *femaleDogNames.length)
        secondName += femaleDogNames[randomIndexTwo] 
    }

    firstNameEl.textContent = firstName
    secondNameEl.textContent = secondName
    firstNameEl.style.backgroundColor = "pink";
    secondNameEl.style.backgroundColor = "pink";
}
femaleBtn.addEventListener("click", getRandomFemaleName);