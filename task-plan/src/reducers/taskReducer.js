const initState = {
    tasks: [
        {id: '1', title: 'Task Title 1', content: 'Content 1'},
        {id: '2', title: 'Task Title 2', content: 'Content 2'},
        {id: '3', title: 'Task Title 3', content: 'Content 3'},
    ]
};

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            return state;
        
        case 'CREATE_TASK_ERROR':
            return state;
    
        default:
            return state;
    }
};

export default taskReducer;
