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
    
  }

  //Creating a function to load the tasks on the page

  function getTaks() {

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




  function renderTasks(){
    console.log('in render');

    
  }