let zero: 0 = 0;
// zero = 2;

let name: "Mehdi" | "Mahan" = "Mehdi";
name: "Mahan";
// name = "Ali";

type DayOfWeek =
  | "Monday"
  | "Teusday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday";

function loveQuestion(answer: "Yes" | "No" | "Maybe" | string) {
  if (answer === "Yes" || answer === "No" || answer === "Maybe") {
    return `the answer is ${answer}`;
  } else {
    alert(`your answer should include one of the three answers`);
  }
}

loveQuestion("Yes");
loveQuestion("I do not know");

export {};
