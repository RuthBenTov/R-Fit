# R-Fit
A website that assists gyms and studios in managing their training schedules for their clients. The site includes several pages:

Homepage

A well-designed page with a button that directs users to the login section.

LOGIN
Navigation bar for easy transition between the login and registration pages.
The login page contains two fields for username and password, which are verified using MySQL user data.
If the data is verified, users are redirected to the schedule page.
An option on the page allows access to the registration page for users not in the database.
In case of any error, a managed error message appears (toast).


REGISTER
Navigation bar for easy movement between the login and register pages.
The registration page includes fields for username, name, email, date of birth, phone number, password, and password verification.
Information is sent to the database and stored uniquely (email and username) and passwords are well encrypted.
Managed error messages (toast) appear if any issues arise.
The user is kept in a connected cookie for an hour - using a token that encrypts the information

MANAGER-PAGE
Access to this page is restricted to administrators.
The page displays a monthly/weekly/daily diary and an event addition form.
Each event includes training name, coach name, time, date, and hour. There is an option to add events regularly if they occur every week.
When adding an event, only existing events in the studio can be selected.
The added event is sent to the database and immediately appears on the schedule.
Clicking on an event prompts a message confirming the deletion of the event (training). If confirmed, the event is removed from the database.


SCHEDULE
This page is visible to users and displays the monthly/weekly training diary based on the manager's choice.
Events are directly fetched from the database saved on redux (on mount) and applied to the calendar.
At the top of the page is a button that navigates to the profile page.
At the left end of the page there is a button that appears only for the admin -
and leads him to the management page



PROFILE
The profile page displays all editable user information, including email, phone number, and date of birth.
Users can edit this information using a popup panel.