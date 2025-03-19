let expandedElement = null; // Track the currently expanded element


function Expension(element) {
    if (expandedElement && expandedElement !== element) {
        // Reset any previously expanded element
        expandedElement.style.transform = 'scale(1)';
        expandedElement.style.zIndex='1';
        expandedElement = null;
    }

    if (element.style.transform === 'scale(1.5)') {
        // Shrink back to original size
        element.style.transform = 'scale(1)';
        expandedElement.style.zIndex='1';
        expandedElement = null;
    } else {
        // Expand using scale
        element.style.transform = 'scale(1.5)';
        expandedElement = element;
        expandedElement.style.zIndex='10';

        //ça c'est une tentative de centrage après click
        expandedElement.position = "absolute";
        var wy = window.innerHeight / 2;
        var wx = window.innerWidth / 2;
        var py = element.offsetHeight / 2;
        var px = element.offsetWidth / 2;
        var pageTop = wy - py;
        var pageLeft = wx - px;
        expandedElement.style.top = pageTop + "px";
        expandedElement.style.left = pageLeft + "px";
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