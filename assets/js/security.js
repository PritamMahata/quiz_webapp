document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'hidden') {
        console.log('User switched tabs');
    } else {
        console.log('User came back to the tab');
    }
});

document.addEventListener('keyup', (e) => {
    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
        alert('This feature is not available on mobile devices.');
    } else {
        navigator.clipboard.writeText('');
        alert('Permission denied!');
    }
});