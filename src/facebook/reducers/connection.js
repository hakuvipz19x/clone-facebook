
const initState = {
    connectionList: [], 
    hideConnectionList: []
}

const connectionReducer = (state = initState, action) => {
    switch (action.type) {
        // case 'ADD_CONNECTION': {
        //     if (state.connectionList.length >= 3) {
        //         state.connectionList.pop(state.connectionList[0])
        //     } 

        //     return {
        //         ...state,
        //         connectionList: [...state.connectionList, action.payload],
        //     }
        // }
 
        // case 'REMOVE_CONNECTION': {
        //     state.connectionList.pop(action.payload)
        //     // console.log(state.connectionList)
        //     return {
        //         ...state,
        //         connectionList: [...state.connectionList]
        //     }
        // }

        // case 'ADD_HIDE_CONNECTION': {
        //     return {
        //         ...state,
        //         hideConnectionList: [...state.hideConnectionList, action.payload]
        //     }
        // }

        // case 'REMOVE_HIDE_CONNECTION': {
        //     state.hideConnectionList.pop(action.payload)

        //     return {
        //         ...state,
        //         hideConnectionList: [...state.hideConnectionList]
        //     }
        // }
        case 'UPDATE_LIST': {
            // console.log(action.payload)
            return {
                ...action.payload
            }
        }
        default:
            return state;

    }
}

export default connectionReducer