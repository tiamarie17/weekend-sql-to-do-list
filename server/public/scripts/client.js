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
        $('#taskTable').on('click', '.completeBtn', markComplete);
        $('#taskTable').on('click', '.deleteBtn', deleteTask);
        


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

        let taskId = $(this).data('id');

        $.ajax({
            method: 'DELETE',
            url: `/tasks/${taskId}`
        })
        .then(function(response) {
            console.log('in .then DELETE', response);
            getTasks();
 
        })
        .catch(function(err){
            console.log('error on DELETE', err);
            
        });
  }



  function markComplete(){
       
        //Getting data id of the button clicked
        taskId = $(this).data('id');
        console.log('task id is', taskId);

        $.ajax({
            method: 'PUT',
            url: `/tasks/${taskId}`,
        })
        .then((response=>{
            console.log('in markComplete');
            console.log(response)
            
            getTasks();

            
        }))
        .catch((err=>{
            console.log('in tasks PUT error', err);
        }));


  }

  function renderTasks(tasks){
        console.log('in render');
        //emptying table
        $('#taskTable').empty();
        //Appending first row of table with titles (so it is always there)
        $('#taskTable').append(`
            <tr>
                <td>Task</td>
                <td>Status</td>??
                <td></td>
            </tr>

        `);

    for(let task of tasks){

        //Changing the date format to take away the time
        //Making an object from the task.date string


        let dateObject = new Date(task.date);
        //Getting a string from the object and formatting it
        let dateFormat = dateObject.getMonth()+1 +"-"+dateObject.getDate() + "-" + dateObject.getFullYear();
        console.log(dateFormat);
    

        if(task.status){
            $('#taskTable').append(
            `
                <tr class="rowBackgroundGreen">
                <td>${task.task}</td>
                <td><button class="completeBtn" data-id="${task.id}">Complete</button><br>
                    ${dateFormat}
                
                </td>
                <td><button class="deleteBtn" data-id="${task.id}">Delete</button>
                </td>
                </tr>
                `)
            
        } else{
            $('#taskTable').append(
                `
                    <tr class="rowBackground">
                    <td>${task.task}</td>
                    <td><button class="completeBtn" data-id="${task.id}">Complete</button></td>
                    <td><button class="deleteBtn" data-id="${task.id}">Delete</button></td>
                    </tr>
                    `)
        }
    }
  }