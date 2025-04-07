// Study Schedule Planner

// Function to set study session
function setSession(start, end, activity) {
  let startTime = new Date();
  startTime.setHours(start.split(":")[0], start.split(":")[1], 0);

  let endTime = new Date();
  endTime.setHours(end.split(":")[0], end.split(":")[1], 0);

  console.log(`${activity} from ${startTime.toLocaleTimeString()} to ${endTime.toLocaleTimeString()}`);
}

// Study routine based on the described schedule
function studySchedule() {
  console.log("Daily Study Routine:");

  setSession("06:00", "08:30", "Study Session 1");
  setSession("08:45", "13:45", "Study Session 2");
  setSession("14:30", "18:30", "Study Session 3");
  setSession("19:00", "20:30", "Study Session 4");
  setSession("21:00", "23:00", "Study Session 5");

  console.log("Remember to take the following breaks:");
  console.log("Breakfast: 08:30 to 08:45");
  console.log("Lunch: 13:45 to 14:30");
  console.log("Brisk Walk: 18:30 to 19:00");
  console.log("Dinner: 20:30 to 21:00");

  console.log("Go to sleep at 23:00 and wake up at 05:45!");
}

// Call the study schedule function
studySchedule();
