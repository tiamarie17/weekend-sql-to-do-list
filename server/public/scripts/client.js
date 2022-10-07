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

        $('#addBtn').on('click', handleAdd);
    
  }

  //Creating a function to load the tasks on the page
  function getTasks() {

        $.ajax({
        type: 'GET',
        url: '/tasks'

        }).then(function(response) {
        console.log(response);

        renderTasks(response);

        }).catch(function(error){
        console.log('error in GET', error);
        });
  }

  function handleAdd(){
        console.log('add button clicked');
        //Creating an object to send to the server using input from the DOM
        let task = {
            task: $('#taskIn').val()
        };
        console.log(task);

        //call newTask function and pass that object into it
        newTask(task);
  }

  function newTask(task){
        console.log('in newTask');

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

  function renderTasks(){
    console.log('in render');
    


  }