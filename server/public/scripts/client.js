console.log('initializing client...')

//Gobal Variables
//tasks = [];     //array to hold data on the client side
let complete = '';  //changes true false to yes no.
let element;

//initialize jquery
$(document).ready(onReady);

function onReady () {


    //event listeners
    $(document).on("click", "#addbtn", addTask);
    $(document).on("click", "#deletebtn", deleteTask);
    $(document).on("click", ".pikachu", scrollUp);
    $(document).on("click", ".squidward", scrollDown);
    $(document).on("click", ".unicorn", scrollDown);


    //get dynamic data
    getTasks();

    //reset page position to input
    scrollUp();
}

//set position of page to beginning on reload or clicking pikachu
function scrollUp() {
        document.getElementById('title').scrollIntoView();
}

//set position to newest item on list.
function scrollDown() {
    document.getElementById('scrolltome').scrollIntoView();
}


//clear input from text box
function clearInput() {
    $('#name').attr('placeholder', 'Enter');
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
        scrollDown();
    })
    .catch ((error) => {
        console.log('POST unsuccessfull', error);
    })
}

function deleteTask() {
    console.log('In deleteTask');

    let id = $(this).parent('tr').data('id');

    $.ajax ({
        method: 'DELETE',
        url: `/tasks/${id}`
    })
    .then (() => {
        getTasks();

    })
    .catch ((error) => {
        console.log('ERROR could not DELETE', error);
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
        $('#newTasks').empty();
        $('#name').val('');
        render(response);
            clearInput();
    })
    .catch ((error) => {
        console.log('Error cannot GET tasks');
    })
}

function render(tasks) {
    console.log('In Render');


    $('#viewTasks').empty();
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
            <tr class="taskWrapper" data-id=${task.id} data-complete=${complete}>
                <td id="deletebtn" class="taskList">
                    ${task.name}
                </td>
                <td id="completebtn" class="taskList">
                    ${complete}
                </td> 
            </tr>
    `);
    }
}