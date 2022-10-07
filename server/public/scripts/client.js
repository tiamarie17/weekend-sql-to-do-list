console.log('in client.js');

$( document ).ready( function(){
        console.log( 'JQ' );
        // Establish Click Listeners
        addClickListeners();

        // load existing tasks on page load
        getTasks();
  });

  function addClickListeners(){
    console.log('in addClickListeners');
        $('#addBtn').on('click', newTask);
        $('#taskTable').on('click', '#completeBtn', markComplete);
        $('#taskTable').on('click', '#deleteBtn', deleteTask);
        


  }

  //Creating a function to load the tasks on the page
  function getTasks() {
        console.log('in get tasks');

        $.ajax({
        type: 'GET',
        url: '/tasks',

        }).then(function(response) {
        console.log(response);

        renderTasks(response);

        }).catch(function(error){
        console.log('error in GET', error);
        });
  }


  function newTask(){
        console.log('in newTask');

        //Creating an object to send to the server using input from the DOM
        let task = {
            task: $('#taskIn').val()
        };
        console.log(task);

        $.ajax({
            type: 'POST',
            url: '/tasks',
            data: task
        }).then( function (response) {
            //emptying input after user clicks add
            $('#taskIn').val('');
            //calling getTasks function to load updated tasks to the DOM
            getTasks();
        })
            .catch((err)=>{
                console.log('in POST error', err);
            })
  }

  function deleteTask(){
        console.log('in DeleteTask');
  }



  function markComplete(){
        console.log('in markComplete');
  }


  function renderTasks(tasks){
        console.log('in render');
        //emptying table
        $('#taskTable').empty();
        //Appending first row of table with titles (so it is always there)
        $('#taskTable').append(`
            <tr>
                <td>Task</td>
                <td>Status</td>
            </tr>

        `);
    for(let task of tasks){
        $('#taskTable').append(`
            <tr>
            <td>${task.task}</td>
            <td><button class="completeBtn" data-id="${task.id}">Complete</button></td>
            <td><button class="deleteBtn" data-id="${task.id}">Delete</button></td>
            </tr>
        `)
  }
  }