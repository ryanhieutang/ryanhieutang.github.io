function displayAESTTime() {
    var auDate = new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" });
      document.getElementById('ausTime').innerText = auDate;
      setTimeout(displayAESTTime, 1000);
  }
  window.onload = displayAESTTime;
