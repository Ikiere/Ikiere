document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");

    // Open sidebar
    menuToggle.addEventListener("click", function () {
        sidebar.classList.add("active");
    });

    // Close sidebar
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});
