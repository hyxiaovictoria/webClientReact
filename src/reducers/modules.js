import {CREATE_MODULE, FIND_MODULES_FOR_COURSE, DELETE_MODULE} from "../actions/moduleActions";


let initialState = {
    modules :
        [
            {_id: "123", title: "Module 1-jQuery"},
            {_id: "234", title: "Module 2-React"},
            {_id: "345", title: "Module 3-Redux"},
            {_id: "456", title: "Module 4-Native"},
            {_id: "678", title: "Module 5-Angular"},
            {_id: "789", title: "Module 6-Node"},
            {_id: "890", title: "Module 7-Mongo"}
        ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            }
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => (
                    module._id !== action._id
                ))
            }
        case 'UPDATE_MODULE':
        {
            console.log('UPDATE_MODULE')
            return state
        }
        case 'EDIT_MODULE':
        {
            console.log('EDIT_MODULE')
            return state
        }
        default:
            return state
    }
}

export default moduleReducer