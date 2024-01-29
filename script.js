function displayAESTTime() {
    // Create a new Date object representing the current time in Australia/Sydney time zone
    var auDate = new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" });
  
    // Get the HTML element with the id 'aest-time' and update its text content
    document.getElementById('aest-time').innerText = auDate;
  
    // Schedule the displayAESTTime function to be called again after 1000 milliseconds (1 second)
    setTimeout(displayAESTTime, 1000);
  }
  
  // Call the displayAESTTime function when the page has finished loading
  window.onload = displayAESTTime;
