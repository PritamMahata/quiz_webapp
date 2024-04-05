document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'hidden') {
        console.log('User switched tabs');
    } else {
        console.log('User came back to the tab');
    }
});

document.addEventListener('keyup', (e) => {
    navigator.clipboard.writeText('');
    alert('Permission denied!');
});

// Check if the device supports touch events before preventing the default behavior and showing the alert message
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function (e) {
        e.preventDefault();
        alert('Screenshot not allowed!');
    });
}
