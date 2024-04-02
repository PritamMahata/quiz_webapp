// Function to get the current time in a specified format
function getCurrentTime(format = 'HH:mm:ss') {
    const currentDate = new Date();
    let hours = String(currentDate.getHours()).padStart(2, '0');
    let minutes = String(currentDate.getMinutes()).padStart(2, '0');
    let seconds = String(currentDate.getSeconds()).padStart(2, '0');

    if (format === 'HH:mm:ss') {
        return `${hours}:${minutes}:${seconds}`;
    } else if (format === 'hh:mm:ss') {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = String(hours % 12 || 12).padStart(2, '0');
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    } else {
        console.error('Invalid time format');
        return null;
    }
}

// Function to save the formatted current time to local storage
function saveCurrentTime(format = 'HH:mm:ss') {
    const currentTime = getCurrentTime(format);
    if (currentTime) {
        localStorage.setItem('currentTime', currentTime);
    }
}

// Call the function to save the current time when the file is loaded
 // Change the format as needed
