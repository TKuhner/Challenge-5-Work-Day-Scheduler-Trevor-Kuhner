Work Day Scheduler

This repository is for challenge 5 of the the Northwestern University coding bootcamp. For testing and grading purposes, the 8 hour calendar has been extended to a 24 hour calendar to accommodate irregular hours as the application utilizes a real time clock.

https://tkuhner.github.io/Challenge-5-Work-Day-Scheduler-Trevor-Kuhner/

![image](https://github.com/TKuhner/Challenge-5-Work-Day-Scheduler-Trevor-Kuhner/assets/71107536/e447b051-f8ec-432c-8ac2-77e1adeb5f1a)


The Work Day Scheduler is a web application that allows users to plan and organize their work day by providing a time-block interface for each hour. Users can enter their tasks or appointments in the corresponding time blocks and save them for future reference. The interface also dynamically updates the color of each time block to indicate whether it is in the past, present, or future based on the current time.
Features

    Display of current date and time at the top of the page.
    Time blocks for each hour of the work day.
    Ability to enter and save tasks or appointments in the time blocks.
    Automatic color-coding of time blocks based on the current hour.
    Option to clear all saved tasks and appointments.

Technologies Used

    HTML
    CSS (Bootstrap)
    JavaScript (jQuery)
    Day.js
    Local Storage

Getting Started

To use the Work Day Scheduler, follow these steps:

    Load webpage at: https://tkuhner.github.io/Challenge-5-Work-Day-Scheduler-Trevor-Kuhner/
    
    or
    
    Clone the repository: git clone https://github.com/your-username/work-day-scheduler.git
    Open the index.html file in your web browser.
    
    The current date and time will be displayed at the top of the page.
    Each time block represents an hour of the Work day.
    Enter your tasks or appointments in the corresponding time blocks.
    Click the save button to save your entries.
    The time blocks will be color-coded to indicate whether they are in the past, present, or future based on the current time.
    To clear all saved entries, click the "Clear Storage" button.
    
 
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
    
    
 Technical Acceptance Criteria: 40%

    Satisfies all of the above acceptance criteria plus the following:
        Uses the Day.js library to work with date and time.

Deployment: 32%

    Application deployed at live URL.

    Application loads with no errors.

    Application GitHub URL submitted.

    GitHub repo contains application code.

Application Quality: 15%

    Application user experience is intuitive and easy to navigate.

    Application user interface style is clean and polished.

    Application resembles the mock-up functionality provided in the Challenge instructions.

Repository Quality: 13%

    Repository has a unique name.

    Repository follows best practices for file structure and naming conventions.

    Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

    Repository contains multiple descriptive commit messages.

    Repository contains a quality README file with description, screenshot, and link to deployed application.
    
    https://tkuhner.github.io/Challenge-5-Work-Day-Scheduler-Trevor-Kuhner/
