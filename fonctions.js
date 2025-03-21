let expandedElement = null; // Track the currently expanded element


function Expension(element) {
    if (expandedElement && expandedElement !== element) {
        // Reset any previously expanded element
        expandedElement.style.transform = 'scale(1)';
        expandedElement.style.zIndex='1';
        expandedElement.style.position="absolute";
        expandedElement = null;
    }

    if (element.style.transform === 'scale(1.5)') {
        // Shrink back to original size
        element.style.transform = 'scale(1)';
        expandedElement.style.zIndex='1';
        expandedElement.style.position ="absolute";
        expandedElement = null;
    } else {
        // Expand using scale
        element.style.transform = 'scale(1.5)';
        expandedElement = element;
        expandedElement.style.zIndex='10';

        //ça c'est une tentative de centrage après click
        expandedElement.style.position = "fixed"; 
        expandedElement.style.top = "50px";
        expandedElement.style.left = "50px";
        expandedElement.style.height= "30%";
        expandedElement.style.width="30%"
    }
}

// Add a global click event listener to unscale when clicking outside
document.addEventListener('click', (event) => {
    // Check if the click is outside the expanded element
    if (expandedElement && !expandedElement.contains(event.target)) {
        expandedElement.style.transform = 'scale(1)';
        expandedElement.style.zIndex='1';
        expandedElement = null;
    }
});

window.addEventListener("scroll", function() {
    document.querySelector(".header").style.transform = `translateX(${window.scrollX}px)`;
});