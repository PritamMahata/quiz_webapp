function checkTime() {
  console.log("Checking time...");
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var timeString = hours + ":" + minutes + ":" + seconds;
  // console.log(timeString);
  // Define the start and end times to show/hide the text
  var startTimeToShow = "16:34:00"; // Example: Show text from 8:00 AM
  var endTimeToHide = "16:35:00"; // Example: Hide text from 5:00 PM

  if (timeString >= startTimeToShow && timeString <= endTimeToHide) {
    console.log("Time to show the text");
    document.getElementById("timestamp").innerText = timeString;
  } else {
    console.log("Time to hide the text");
    document.getElementById("timestamp").innerText = "Text to hide";
  }
}
