# Project Name- 
Full Stack To Do App



## Description

For this project, I created an app that lets a user add, delete, and update tasks on a to a to do list. The user can fill out an input with a task they need to do and click 'Add'. When the user clicks the 'Add' button, that task gets appended to the DOM in a table below the input. Next to each task that is appended, a complete and delete button is also appended next to each task. When the 'Complete' button is clicked, the background of the corresponding row turns green and the the date that the user marked the task as complete is appended to the DOM below the complete button. That button has a toggle feature so that if it is clicked again, the row color changes back to the original color of the table and the task is no longer marked as complete. That complete status is also stored and updated in the database when the user clicks that button. Finally, if the user clicks the delete button, the task will be deleted from the database and also deleted from the DOM.

To solve this problem, I began by creating a database with Postico and adding a table with data types and sample data. Next, I created a wireframe and created the basic layout in the HTML file. After that, I thought about which type of AJAX requests I would need for each button and feature. I started with the Add button, which takes the user's input, adds it to the database, and appends it to the DOM. I made a click listener for the ADD button in the onReady function in the client.js file and created a function called newTask that included a POST AJAX request. This POST request sends the user's input to the server in an object. I used Postman to test the POST request since I didn't have the server set up yet. Next, I set up the server.js file and a pool.js file to connect the server to the database. I made a tasks.router.js file to put the endpoints for each AJAX request and imported express and the const pool into that file. I also exported the router and imported it into the server.js file so that those files were connected. In the POST endpoint, I used SQL to send a command to the database to insert the user's input into the database. To handle the complete button, I created a function newTask that included a PUT AJAX request in the client.js file, and created an endpoint for it in the task.router.js file. The PUT endpoint sent an SQL command to the database to update the status of the task. Since the data type of the status was a boolean, I used SQL to add a toggle feature to that boolean value (which had a default of false). To handle the delete button, I created a function that used a DELETE request in the client.js file. In the endpoint in the router file, I used SQL to send a command to remove the task next to the button that was clicked by using the id of the task to identify which one to delete. I also created a function with a GET request that would be called at the end of the .then() of the POST, PUT, and DELETE AJAX requests, so that the database would send back the updated list of tasks to the client. This function was also called in the onReady function so that the list of tasks would appear on pageload. Finally, at the end of the GET request, the render function is called. This function in the client.js file loops through the array that is sent back from the database and appends the information to the DOM by calling the desired properties of each object in the array. Within this function, I also included an if/else statement to handle the change in background color of the row in the case that the complete button is clicked (when the status of complete is true). To do this, I added a class to the row of the complete button and created two separate classes in CSS with different background colors. I then changed the name of the class based on if the status of complete was true or false. To append the date the task was completed on, I used SQL to get the date from the server within the GET request (along with the status). When I initially displayed the date coming from the database to the DOM, it included the date and time. I only wanted it to display the month, day, and year. So, in the render function I first formatted the date before appending it by using the getDate() method. Once I checked that everything was working and appending correctly, I then styled the HTML elements by using CSS and Bootstrap. 



## Technologies
JavaScript
JQuery
SQL
Node
Express

## Acknowledgements 

Thank you to Prime Digital Academy for the tools to complete this and support on this project!
