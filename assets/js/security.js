document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'hidden') {
        // User switched tabs, do something
        console.log('User switched tabs');
    } else {
        console.log('User came back to the tab');
    }
});