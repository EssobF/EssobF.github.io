let expandedElement = null; // Track the currently expanded element


function Expension(element) {
    if (expandedElement && expandedElement !== element) {
        // Reset any previously expanded element
        expandedElement.style.transform = 'scale(1)';
        expandedElement.style.zIndex='1';
    }

    if (element.style.transform === 'scale(1.5)') {
        // Shrink back to original size
        element.style.transform = 'scale(1)';
        expandedElement = null;
        expandedElement.style.zIndex='1';
    } else {
        // Expand using scale
        element.style.transform = 'scale(1.5)';
        expandedElement = element;
        expandedElement.style.zIndex='10';
        var marginLeft = $(this).css({"margin-left":(windowWidth-divWidth)/2});
        var margintop = $(this).css({"margin-top":(windowHeight-divHeight)/2});

    }
}

// Add a global click event listener to unscale when clicking outside
document.addEventListener('click', (event) => {
    // Check if the click is outside the expanded element
    if (expandedElement && !expandedElement.contains(event.target)) {
        expandedElement.style.transform = 'scale(1)';
        expandedElement = null;
    }
});

window.addEventListener("scroll", function() {
    document.querySelector(".header").style.transform = `translateX(${window.scrollX}px)`;
});