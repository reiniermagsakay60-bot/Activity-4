/**
 * Interactive Feature: Dark/Light Mode Toggle
 * This script checks user preference, manages state switches, 
 * and updates the DOM attribute accordingly.
 */

const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for previously saved user preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateButtonIcon(savedTheme);
}

// Event listener for the theme toggle button click
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateButtonIcon('light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateButtonIcon('dark');
    }
});

// Helper function to update toggle button icon based on the active theme
function updateButtonIcon(theme) {
    if (theme === 'dark') {
        themeToggleBtn.textContent = '☀️'; // Sun icon for switching to light mode
    } else {
        themeToggleBtn.textContent = '🌙'; // Moon icon for switching to dark mode
    }
}