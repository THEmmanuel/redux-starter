import store from './store';
import * as actions from './actionTypes'

//* means import all

// console.log("Hello World!");

const unsubscribe = store.subscribe(() => {
    console.log('The store was updated', store.getState())
})

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: 'A new bug with the title of BUG1 was added'
    }
})

unsubscribe();

store.dispatch({
    type : actions.BUG_REMOVED,
    payload: {
        id: 1
    }
})

console.log(store.getState())