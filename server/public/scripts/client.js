console.log('initializing client...')

//Gobal Variables
tasks = [];     //array to hold data on the client side
complete = '';  //changes true false to yes no.


//initialize jquery
$(document).ready(onReady);

function onReady () {

    //event listeners
    $(document  ).on("click", "#addbtn", addTask);

    //get dynamic data
    getTasks();
}

//add task with POST & INSERT
function addTask() {
    console.log('In addTask');

    //new task object to send
    const task = {
        name : $('#name').val()
    };
    console.log("In add Task, POSTING", task);

    $.ajax({
        type:'POST',
        url:'/tasks',
        data: task
    })
    .then ((response) => {
        console.log('POST response:', response);
        getTasks();
    })
    .catch ((error) => {
        console.log('POST unsuccessfull', error);
    })
}

//Ajax GET call to server asking for Array of Task Objects
function getTasks() {
    console.log('In Get Tasks');

    $.ajax({
        type:'GET',
        url:'/tasks'
    })
    .then((response) => {
        console.log(response);
        render(response);
    })
    .catch ((error) => {
        console.log('Error cannot GET tasks');
    })
}

function render(tasks) {
    console.log('In Render');

    $('viewTasks').empty();

    for (let i = 0; i < tasks.length; i ++) {
        let task = tasks[i];
        console.log(task);

        if (task.complete) {
            complete = 'Yes';
          }
          else {
            complete = 'No';
          }

        $('#viewTasks').append(`
            <tr class="taskWrapper" data-id=${task.name} data-complete=${complete}>
            <td class="taskList">
            ${task.name}
            </td>
            <td class="taskList">
            ${complete}
            </td> 
            </tr>
    `);
    }
}