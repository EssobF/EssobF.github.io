let expandedElement = null; // Track the currently expanded element

function Expension(element) {
    if (expandedElement && expandedElement !== element) {
        // Reset any previously expanded element
        expandedElement.style.transform = 'scale(1)';
    }

    if (element.style.transform === 'scale(1.5)') {
        // Shrink back to original size
        element.style.transform = 'scale(1)';
        expandedElement = null;
    } else {
        // Expand using scale
        element.style.transform = 'scale(1.5)';
        expandedElement = element;
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