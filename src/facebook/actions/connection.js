
const addConnection = (payload) => {
    return {
        type: 'ADD_CONNECTION',
        payload
    }
}

const removeConnection = (payload) => {
    return {
        type: 'REMOVE_CONNECTION',
        payload
    }
}

const addHideConnection = (payload) => {
    return {
        type: 'ADD_HIDE_CONNECTION',
        payload
    }
}

const removeHideConnection = (payload) => {
    return {
        type: 'REMOVE_HIDE_CONNECTION',
        payload
    }
}

const updateList = payload => {
    return {
        type: 'UPDATE_LIST',
        payload
    }
}
export {addConnection, removeConnection, addHideConnection, removeHideConnection, updateList}