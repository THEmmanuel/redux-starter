import store from './store';
import {bugAdded} from './actions';
//* means import all

// console.log("Hello World!");

const unsubscribe = store.subscribe(() => {
    console.log('The store was updated', store.getState())
})

store.dispatch(bugAdded('Bug 1 was added'));

unsubscribe();
// store.dispatch({
//     type : actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })

console.log(store.getState())