import * as actions from './actionTypes';

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description: 'A new bug with the title of BUG1 was added'
    }
})