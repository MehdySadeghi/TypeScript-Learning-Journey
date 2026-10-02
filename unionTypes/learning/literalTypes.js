let zero = 0;
// zero = 2;
let name = "Mehdi";
name: "Mahan";
let today = "Monday";
function loveQuestion(answer) {
    if (answer === "Yes" || answer === "No" || answer === "Maybe") {
        return `the answer is ${answer}`;
    }
    else {
        alert(`your answer should include one of the three answers`);
    }
}
loveQuestion("Yes");
export {};
