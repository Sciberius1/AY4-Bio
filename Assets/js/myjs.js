// This is to prevent the header from covering the section titles when clicked //
document.querySelectorAll('.navbar-item').forEach(function(item) {
    item.addEventListener('click', function() {
        window.scrollTo(window.scrollX, window.scrollY - 75);
    });
});