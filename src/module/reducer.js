import * as actions from './actionType'

const initState = {
    players: []
}

const reducer = (state = initState, action) => {
    switch (action.type){
        case actions.GET_PLAYERS:
            return {
                ...state,
                players:  action.payload,
            }
        default:
            return state
    }
}

export default reducer