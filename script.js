const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCountSpan = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");

let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const team = teamSelect.value;
  const teamName = teamSelect.options[teamSelect.selectedIndex].text;

  console.log(`Attendee Name: ${name}`);
  console.log(`Team: ${team}`);
  console.log(`Team Name: ${teamName}`);

  count++;
  console.log("Total Check-Ins:", count);

  attendeeCountSpan.textContent = count;

  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);

  progressBar.style.width = percentage;

  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  const message = `Welcome, ${name} from ${teamName}!`;
  console.log(message);

  const greeting = document.getElementById("greeting");
  greeting.textContent = message;

  form.reset();
});
