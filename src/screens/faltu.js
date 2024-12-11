// A function to display a random greeting
function displayRandomGreeting() {
    const greetings = [
        "Hello, World!",
        "Hi there!",
        "Greetings, human!",
        "Welcome!",
        "Howdy, partner!",
        "Good to see you!",
    ];

    // Get a random index
    const randomIndex = Math.floor(Math.random() * greetings.length);

    // Log the random greeting to the console
    console.log(greetings[randomIndex]);
}

// Call the function when the script loads
displayRandomGreeting();

// Add event listener for a button click
document.getElementById("greetButton")?.addEventListener("click", () => {
    displayRandomGreeting();
});
