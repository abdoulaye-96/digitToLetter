const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const errorEl = document.getElementById("error");

let errorTime;
let resultTime;

// Function to convert number to words dynamically
function numberToWords(num) {
    if (num < 0) return "Invalid input"; // Handle negative numbers
    if (num === 0) return "zero";

    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const scales = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion"];

    // Helper function for converting numbers below 1000
    function convertBelowThousand(n) {
        let words = "";

        if (n >= 100) {
            const hundreds = Math.floor(n / 100);
            words += `${ones[hundreds]} hundred`;
            n %= 100;
            if (n > 0) words += " and ";
        }

        if (n >= 20) {
            const tensPlace = Math.floor(n / 10);
            words += tens[tensPlace];
            n %= 10;
            if (n > 0) words += `-${ones[n]}`;
        } else if (n >= 10) {
            words += teens[n - 10];
        } else if (n > 0) {
            words += ones[n];
        }

        return words.trim();
    }

    let words = "";
    let scaleIndex = 0;

    while (num > 0) {
        const chunk = num % 1000; // Extract the last three digits
        if (chunk > 0) {
            const chunkWords = convertBelowThousand(chunk);
            words = `${chunkWords} ${scales[scaleIndex]} ${words}`.trim(); // Add scale (thousand, million, etc.)
        }
        num = Math.floor(num / 1000); // Remove the last three digits
        scaleIndex++;
    }

    return words.trim();
}

function myFunction() {
    const inputValue = parseInt(inputEl.value, 10); // Parse input as integer

    if (!isNaN(inputValue) && inputValue >= 0) {
        resultEl.innerText = numberToWords(inputValue); // Convert number to words
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            resultEl.innerText = "";
            inputEl.value = "";
        }, 10000);
    } else {
        errorEl.innerText = "Please enter a valid number";
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            errorEl.innerText = "";
            inputEl.value = "";
        }, 2000);
    }
}

inputEl.addEventListener("input", myFunction);




// const inputEl = document.getElementById("input");
// const resultEl = document.getElementById("result");
// const errorEl = document.getElementById("error");

// let errorTime;
// let resultTime;
// function myFunction() {

//     if(inputEl.value>=0){
//         resultEl.innerText = inputEl.toString();
//         clearTimeout(resultTime);
//         resultTime = setTimeout(() => {
//         resultEl.innerText = "";
//         inputEl.value = "";
//         },10000)

//     }else{
//         errorEl.innerText = "please write a number";
//         clearTimeout(errorTime);
//         errorTime = setTimeout(() => {
//         errorEl.innerText = "";
//         inputEl.value = "";
//         },2000)
//     }
// }

// inputEl.addEventListener("input", myFunction);


// const inputEl = document.getElementById("input");
// const resultEl = document.getElementById("result");
// const errorEl = document.getElementById("error");

// let errorTime;
// let resultTime;

// // Maps for digits and tens
// const onesMap = [
//     "zero", "one", "two", "three", "four", 
//     "five", "six", "seven", "eight", "nine"
// ];

// const tensMap = [
//     "", "", "twenty", "thirty", "forty", 
//     "fifty", "sixty", "seventy", "eighty", "ninety"
// ];

// const teensMap = [
//     "ten", "eleven", "twelve", "thirteen", "fourteen", 
//     "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
// ];

// // Function to convert a number to words
// function numberToWords(num) {
//     if (num < 10) {
//         return onesMap[num];
//     } else if (num >= 10 && num < 20) {
//         return teensMap[num - 10];
//     } else if (num >= 20 && num < 100) {
//         const tens = Math.floor(num / 10);
//         const ones = num % 10;
//         return ones === 0 ? tensMap[tens] : `${tensMap[tens]} ${onesMap[ones]}`;
//     } else {
//         return "Numbers beyond 99 are not supported"; // Extend this logic if needed
//     }
// }

// function myFunction() {
//     const inputValue = parseInt(inputEl.value, 10); // Parse input as integer

//     if (!isNaN(inputValue) && inputValue >= 0) {
//         resultEl.innerText = numberToWords(inputValue); // Convert number to words
//         clearTimeout(resultTime);
//         resultTime = setTimeout(() => {
//             resultEl.innerText = "";
//             inputEl.value = "";
//         }, 10000);
//     } else {
//         errorEl.innerText = "Please enter a valid number";
//         clearTimeout(errorTime);
//         errorTime = setTimeout(() => {
//             errorEl.innerText = "";
//             inputEl.value = "";
//         }, 2000);
//     }
// }

// inputEl.addEventListener("input", myFunction);
