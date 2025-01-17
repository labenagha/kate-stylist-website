// Select video elements
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

// Select play/pause button and its icon
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = playPauseBtn.querySelector('img');

// Define the paths for play and pause icons
const playIcon = '../assets/icons/bx-play-circle.svg'; // Path to play icon
const pauseIcon = '../assets/icons/bx-pause-circle.svg'; // Path to pause icon

// Track the currently active video
let activeVideo = video1;

// Add event listener for play/pause button
playPauseBtn.addEventListener('click', () => {
    if (activeVideo.paused) {
        activeVideo.play(); // Play the active video
        playPauseIcon.src = pauseIcon; // Change to pause icon
        playPauseIcon.alt = 'Pause'; // Update alt text
    } else {
        activeVideo.pause(); // Pause the active video
        playPauseIcon.src = playIcon; // Change to play icon
        playPauseIcon.alt = 'Play'; // Update alt text
    }
});

// Switch to video2 after video1 ends
video1.addEventListener('ended', () => {
    console.log('Video 1 ended. Switching to Video 2...');
    video1.style.display = 'none'; // Hide video1
    video2.style.display = 'block'; // Show video2
    activeVideo = video2; // Update active video
    video2.play(); // Start playing video2 automatically
});

// Switch back to video1 after video2 ends
video2.addEventListener('ended', () => {
    console.log('Video 2 ended. Switching to Video 1...');
    video2.style.display = 'none'; // Hide video2
    video1.style.display = 'block'; // Show video1
    activeVideo = video1; // Update active video
    video1.play(); // Start playing video1 automatically
});

// Debug: Log when video2 is loaded
video2.addEventListener('loadeddata', () => {
    console.log('Video 2 is loaded and ready to play.');
});


// Select elements
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.navbar__list__menu__icon');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');

    if (menuIcon && sideMenu && closeBtn) {
        // Open the sidebar
        menuIcon.addEventListener('click', () => {
            sideMenu.classList.add('open');
        });

        // Close the sidebar
        closeBtn.addEventListener('click', () => {
            sideMenu.classList.remove('open');
        });
    } else {
        console.error('Menu icon, side menu, or close button not found!');
    }
});
