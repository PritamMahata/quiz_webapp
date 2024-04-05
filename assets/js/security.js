document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'hidden') {
        console.log('User switched tabs');
    } else {
        console.log('User came back to the tab');
    }
});

document.addEventListener('keyup', (e)=>{
    navigator.clipboard.writeText('')
    alert('Screen capture is disabled for security reasons.')
})

window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });