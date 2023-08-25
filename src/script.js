// Get the element with the id "bottom-skull" and store it in the constant "bottomJaw"
const bottomJaw = document.getElementById("bottom-skull");

// Get the element with the id "skull-container" and store it in the constant "skullContainer"
const skullContainer = document.getElementById("skull-container");

// Get all elements with the class "eyes" and store them in the constant "eyes"
const eyes = document.querySelectorAll(".eyes");

// Function that is triggered when mouse is over the skull container
function mouseOver() {
	// Set animation for opening the mouth
	bottomJaw.style.animation = "openMouth 1s forwards";
	input0.style.animation = "showInput 1s forwards";
}

// Add event listener to the body for double-click event, calling the closeMouth function
document.body.addEventListener("dblclick", () => {
	closeMouth();
});

// Function to close the mouth
function closeMouth() {
	// Set animation for closing the mouth
	bottomJaw.style.animation = "closeMouth 1s forwards";
	input0.style.animation = "hideInput 1s forwards";
}

// Add event listener to the skull container for mouseover event, calling the mouseOver function
skullContainer.onmouseover = () => {
	mouseOver();
};

// Add event listener to the skull container for mouseout event, calling the closeMouth function
skullContainer.onmouseout = () => {
	closeMouth();
};

// Iterate over each eye element
eyes.forEach((eye, index) => {
	// Set a timeout function to start the animation for each eye after 4 seconds
	setTimeout(() => {
		eyes[index].style.animation = "eyes 10s linear 2s forwards";
	}, 4000);
});
