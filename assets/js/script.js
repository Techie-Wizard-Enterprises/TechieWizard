const text1 = "TECHIE WIZARD";
const text2 = "ASIF MUHAMMED N";
const h2_Element = document.getElementById("title");

h2_Element.onclick = function () {
    h2_Element.classList.add("fade-out"); // Add fade-out class
    setTimeout(function () {
        // Change text after fade-out is done
        h2_Element.innerHTML = h2_Element.innerHTML === text1 ? text2 : text1;
        h2_Element.classList.remove("fade-out"); // Remove fade-out
        h2_Element.classList.add("fade-in"); // Add fade-in class
    }, 500); // Timeout should match the duration of fade-out animation

    // Remove fade-in class after animation completes
    setTimeout(function () {
        h2_Element.classList.remove("fade-in");
    }, 1000); // Duration of fade-in (same as CSS transition time)
};

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

if ("windowControlsOverlay" in navigator) {
    navigator.windowControlsOverlay.addEventListener(
        "geometrychange",
        debounce((e) => {
            // Detect if the Window Controls Overlay is visible.
            const isOverlayVisible = navigator.windowControlsOverlay.visible;

            // Get the size and position of the title bar area.
            const titleBarRect = e.titlebarAreaRect;

            console.log(
                `The overlay is ${
          isOverlayVisible ? "visible" : "hidden"
        }, the title bar width is ${titleBarRect.width}px`
            );
        }, 200)
    );
}

const main_logo = document.getElementById("main-logo");
const overlay_logo = document.getElementById("overlay-logo");
const overlay_content = document.getElementById("overlay-content");

main_logo.onclick = function () {
    if (main_logo.classList.contains("fixed-logo")) {
        main_logo.classList.remove("fixed-logo");
        overlay_logo.classList.add("hide");
    } else {
        main_logo.classList.add("fixed-logo");
        overlay_content.classList.add("fade-out"); // Add fade-out class
        overlay_logo.classList.remove("hide");
        setTimeout(function () {
            overlay_content.classList.remove("fade-out"); // Remove fade-out
            overlay_content.classList.add("fade-in"); // Add fade-in class
        }, 500);
        // Remove fade-in class after animation completes
        setTimeout(function () {
            overlay_content.classList.remove("fade-in");
        }, 1000); // Duration of fade-in (same as CSS transition time)
    }
};