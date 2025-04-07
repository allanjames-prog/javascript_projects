const studyPlan = [
  {
      week: "Week 1: Sep 25 - Sep 30 (6 Days)",
      topics: [
          "Concatenating text strings",
          "Prompts",
          "if statements",
          "Comparison operators",
          "if...else and else if statements",
          "Testing sets of conditions",
          "if statements nested",
          "Arrays"
      ]
  },
  {
      week: "Week 2: Oct 1 - Oct 7 (7 Days)",
      topics: [
          "Arrays: adding and removing elements",
          "Arrays: removing, inserting, and extracting elements",
          "for loops",
          "for loops: flags, Booleans, array length, and breaks",
          "for loops nested",
          "Changing case",
          "Strings: measuring length and extracting parts",
          "Strings: finding segments",
          "Strings: finding a character at a location",
          "Strings: replacing characters"
      ]
  },
  {
      week: "Week 3: Oct 8 - Oct 14 (7 Days)",
      topics: [
          "Rounding numbers",
          "Generating random numbers",
          "Converting strings to integers and decimals",
          "Converting strings to numbers, numbers to strings",
          "Controlling the length of decimals",
          "Getting the current date and time",
          "Extracting parts of the date and time",
          "Specifying a date and time",
          "Changing elements of a date and time"
      ]
  },
  {
      week: "Week 4: Oct 15 - Oct 21 (7 Days)",
      topics: [
          "Functions",
          "Functions: passing them data",
          "Functions: passing data back from them",
          "Functions: local vs. global variables",
          "switch statements: how to start them",
          "switch statements: how to complete them",
          "while loops",
          "do...while loops"
      ]
  },
  {
      week: "Week 5: Oct 22 - Oct 28 (7 Days)",
      topics: [
          "Placing scripts",
          "Commenting",
          "Events: link",
          "Events: button",
          "Events: mouse",
          "Events: fields",
          "Reading field values",
          "Setting field values",
          "Reading and setting paragraph text",
          "Manipulating images and text"
      ]
  },
  {
      week: "Week 6: Oct 29 - Oct 31 (3 Days)",
      topics: [
          "Swapping images",
          "Swapping images and setting classes",
          "Setting styles",
          "Target all elements by tag name",
          "Target some elements by tag name",
          "The DOM and its parts (Parents, children, nodes)",
          "Objects: Properties, Methods, and Constructors"
      ]
  },
  {
      week: "Final Review: Nov 1 - Nov 3 (Buffer Days)",
      topics: [
          "Review",
          "Quizzes",
          "Additional practice"
      ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const weeksContainer = document.getElementById("weeks-container");

  studyPlan.forEach(week => {
      const weekDiv = document.createElement("div");
      weekDiv.classList.add("week");

      const weekTitle = document.createElement("h2");
      weekTitle.textContent = week.week;
      weekDiv.appendChild(weekTitle);

      week.topics.forEach(topic => {
          const topicDiv = document.createElement("div");
          topicDiv.classList.add("topic");

          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = topic;

          const label = document.createElement("label");
          label.htmlFor = topic;
          label.textContent = topic;

          topicDiv.appendChild(checkbox);
          topicDiv.appendChild(label);
          weekDiv.appendChild(topicDiv);
      });

      weeksContainer.appendChild(weekDiv);
  });
});
