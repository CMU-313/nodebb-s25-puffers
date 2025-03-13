// $(document).ready(function () {
//     // Check user's saved preference and apply dark mode
//     if (config.user && config.user.settings.darkMode) {
//         $('body').addClass('dark-mode');
//         $('#darkModeToggle').prop('checked', true);
//     }

//     // Toggle dark mode when user changes the setting
//     $('#darkModeToggle').change(function () {
//         const isDarkMode = $(this).prop('checked');
//         $('body').toggleClass('dark-mode', isDarkMode);
//         $.post('/api/user/settings', { darkMode: isDarkMode ? '1' : '0' });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");

    function applyDarkMode(isEnabled) {
        if (isEnabled) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "true");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "false");
        }
    }

    // Load setting from local storage
    applyDarkMode(localStorage.getItem("darkMode") === "true");

    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", function () {
            applyDarkMode(this.checked);
        });
    }
});
