let maximum = parseInt(prompt("Enter the maximum number!"))
while (!maximum) {
    maximum = parseInt(prompt("Enter the valid number!"))
}

const target = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess!");
let attempt = 1;

while (parseInt(guess) !== target) {
    attempt++
    if (guess > target) {
        guess = prompt("It's too big")
    }

    if (guess < target) {
        guess = prompt("Its too small")
    }
}

console.log(`Congrats! You took ${attempt} attempts.`)