let vowelCount = {a: 0, 
                  e: 0, 
                  i: 0, 
                  o: 0, 
                  u: 0}

let alphabeticCharCount = 0; 
let totalVowelCount = 0;           

function countVowels(textInput) {
    let toArr = textInput.replace(/[^a-zA-Z]+/g, "").split("");
    alphabeticCharCount = toArr.length;
    for (let i = 0; i < toArr.length; i++) {
        switch (toArr[i]) {
            case "a":
                vowelCount.a++;
                totalVowelCount++;
                break;
            case "e":
                vowelCount.e++;
                totalVowelCount++;
                break;
            case "i":
                vowelCount.i++;
                totalVowelCount++;
                break;      
            case "o":
                vowelCount.o++;
                totalVowelCount++;
                break;    
            case "u":
                vowelCount.u++;
                totalVowelCount++;
                break;                                     
        }
    }
}

const countBttn = document.querySelector("#countBttn");
const clearBttn = document.querySelector("#clearBttn");
const inputBox = document.querySelector("#inputBox");

let resultArea = document.querySelector(".result-area");
let textContent = "";

countBttn.addEventListener("click", () => {
    textContent = inputBox.value;
    showAnswer(countVowels(textContent));
})

clearBttn.addEventListener("click", () => {
    inputBox.value = textContent;
    resultArea.style.display = "none";
})

function showAnswer(answer) {
    if (!textContent.trim().length) {}
    else if (alphabeticCharCount === 0) {
        resultArea.style.display = "block";
        resultArea.innerHTML = `<center>Please enter at least one alphabetic character.</center>`;
    } else if(textContent.trim().length) {
        resultArea.style.display = "block";
        resultArea.innerHTML = `Your text has <span class="number">${alphabeticCharCount}</span> 
                                alphabetic characters, <span class="number">${totalVowelCount}</span> are vowels.<br>
                                a: <span class="number">${vowelCount.a}</span><br>
                                e: <span class="number">${vowelCount.e}</span><br>
                                i: <span class="number">${vowelCount.i}</span><br>
                                o: <span class="number">${vowelCount.o}</span><br>
                                u: <span class="number">${vowelCount.u}</span>`;
    }
    resetValues();
}

function resetValues() {
    alphabeticCharCount = 0; 
    totalVowelCount = 0;   

    for (const [key] of Object.entries(vowelCount)) {
        vowelCount[key] = 0;
    }

    textContent = "";
}