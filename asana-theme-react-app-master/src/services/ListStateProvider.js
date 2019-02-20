var taskList = [
    {
        key: 4314,
        text: 'Do CS371 Homework',
        status: 'Backlog'
    },
    {
        key: 1524,
        text: 'Go to classes',
        status: 'In Progress'
    },
    {
        key: 1624,
        text: 'Rock Climb / exercise',
        status: 'To Do'
    },
    {
        key: 41324,
        text: 'Clean apartment for cleaning checks.',
        status: 'To Do'
    },
    {
        key: 15024,
        text: 'Write a paper',
        status: 'Completed'
    },
    {
        key: 1324,
        text: 'Finish SystemTech Coding challenge',
        status: 'Completed'
    }
    ];

export function getList() {
    var columnList = [];
    columnList = taskList;
    return columnList;
}

export function addTaskToList(text, status) {
    var newTask = { 
        text: text,
        status: status,
        key: Date.now()  
    };

    taskList.push(newTask);
    // console.log(taskList);
}

export function filteredTasks(columnName, task) {
    
    var columnList = [];

    for (var i= 0; i < taskList.length; i++) {
        if (taskList[i].status === columnName) {
            columnList.push(taskList[i]);
        }
    }
    return columnList;
}

export function deleteTask(key) {

    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].key === key) {
            var index = i;
        }
    }
    
    for (var i = index; i < taskList.length; i++) {
        if (i + 1 < taskList.length) {
            taskList[i] = taskList[i + 1];
            
        }
    }
    taskList.length--;
    // console.log("TASKLIST SIZE: " + taskList.length);
}

export function moveTaskLeft(columnName, key) {

    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].key === key) {
            var index = i;
        }
    }

    if (columnName === "Backlog") {
        taskList[index].status = "Completed";
    }
    else if (columnName === "To Do") {
        taskList[index].status = "Backlog";
    }
    else if (columnName === "In Progress") {
        taskList[index].status = "To Do";
    }
    else if (columnName === "Completed") {
        taskList[index].status = "In Progress"; 
    }
}

export function moveTaskRight(columnName, key) {

    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].key === key) {
            var index = i;
        }
    }

    if (columnName === "Backlog") {
        taskList[index].status = "To Do";
    }
    else if (columnName === "To Do") {
        taskList[index].status = "In Progress";
    }
    else if (columnName === "In Progress") {
        taskList[index].status = "Completed";
    }
    else if (columnName === "Completed") {
        taskList[index].status = "Backlog"; 
    }
}