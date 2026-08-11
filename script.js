document.getElementById("clickMeBtn").addEventListener("click", function () {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", { hour12: false });

  const output = document.getElementById("output");
  output.textContent = "Hello! You clicked the button at " + timeString;
});
