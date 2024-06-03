// Adjusts the selection of the navbar targets for the floating header //

window.addEventListener("hashchange", function() {
    window.scrollTo(window.scrollX, window.scrollY - 75);
});