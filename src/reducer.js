let lastID = 0;
import * as actions from './actionTypes'

const reducer = (state = [], action) => {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state, {
                    id: ++lastID,
                    description: action.payload.description,
                    isResolved: false
                }
            ]

        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)

        default:
            return state
    }
}

export default reducer;