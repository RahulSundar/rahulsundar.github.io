document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');

    // SVG paths for sun and moon
    const moonPath = '<path d="M12 21c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9zM12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/><path d="M12 17A5 5 0 1 0 12 7a5 5 0 0 0 0 10z" />';
    const sunPath = '<path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM12 5.993c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .552-.448 1-1 1zM4.993 12c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1zM12 22.007c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .552-.448 1-1 1zM22.007 12c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1zM7.05 7.05c-.39-.39-1.024-.39-1.414 0l-1.414 1.414c-.39.39-.39 1.024 0 1.414s1.024.39 1.414 0l1.414-1.414c.39-.39.39-1.024 0-1.414zM18.364 16.95c-.39-.39-1.024-.39-1.414 0s-.39 1.024 0 1.414l1.414 1.414c.39.39 1.024.39 1.414 0s.39-1.024 0-1.414l-1.414-1.414zM16.95 7.05c-.39.39-.39 1.024 0 1.414l1.414 1.414c.39.39 1.024.39 1.414 0s.39-1.024 0-1.414l-1.414-1.414c-.39-.39-1.024-.39-1.414 0zM7.05 16.95c.39-.39 1.024-.39 1.414 0s.39 1.024 0 1.414l-1.414 1.414c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414l1.414-1.414z"/>';

    const updateIcon = (theme) => {
        if (theme === 'dark') {
            themeIcon.innerHTML = sunPath; // Show sun icon to toggle to light
        } else {
            themeIcon.innerHTML = moonPath; // Show moon icon to toggle to dark
        }
    };

    // Initialize icon based on current theme
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateIcon(currentTheme);

    toggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            updateIcon('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateIcon('dark');
        }
    });
});
