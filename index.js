const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonKey = this.innerHTML.toLowerCase(); // Get the key related to the button text
        playSound(buttonKey); // Play sound
        buttonAnimation(buttonKey); // Trigger animation
    });
});

// Add Event Listener for keyboard press
document.addEventListener("keydown", function (event) {
    playSound(event.key); // Play sound when key is pressed
    buttonAnimation(event.key); // Trigger animation when key is pressed
});

// Function to play sound
function playSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log("Invalid key: " + key);
    }
}

// Function to add animation to the button that is pressed
function buttonAnimation(key) {
    const activeButton = document.querySelector(`.${key}`);
    if (activeButton) {
        activeButton.classList.add("pressed");

        // Remove the "pressed" class after 100ms
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
