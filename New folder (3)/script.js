// Verifies the age of the person submitting 
function verify() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    if (age < 18) {
    alert(`Hello ${name}, you are not eligible to vote.`);
    } else {
    alert(`Hello ${name}, you are eligible to vote!`);
    }
}2