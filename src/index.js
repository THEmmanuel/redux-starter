import store from './store';

// console.log("Hello World!");

const unsubscribe = store.subscribe(() => {
    console.log('The store was updated', store.getState())
})

store.dispatch({
    type: 'BUG_ADDED',
    payload: {
        description: 'A new bug with the title of BUG1 was added'
    }
})

unsubscribe();

store.dispatch({
    type : 'BUG_REMOVED',
    payload: {
        id: 1
    }
})

console.log(store.getState())