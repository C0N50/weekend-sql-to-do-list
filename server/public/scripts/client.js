console.log('initializing client...')

//initialize jquery
$(document).ready(onReady);

function onReady () {

    //event listeners
    $('addbtn').on('click', addTask);

    //get dynamic data
    getTasks();
}

//add task with POST & INSERT
function addTask() {
    console.log('In addTask');
}

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

        $('#viewTasks').append(`
            <tr class="taskWrapper" data-id=${task.name} data-complete=${task.complete}>
            <td class="taskList">
            ${task.name}
            </td>
            <td class="taskList">
            ${task.complete}
            </td> 
            </tr>
    `);
    }
}