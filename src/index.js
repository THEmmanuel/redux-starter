import store from './store';

// console.log("Hello World!");

store.dispatch({
    type: 'BUG_ADDED',
    payload: {
        description: 'A new bug with the title of BUG1 was added'
    }
})

store.dispatch({
    type : 'BUG_REMOVED',
    payload: {
        id: 1
    }
})

console.log(store.getState())