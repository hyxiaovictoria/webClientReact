import React from "react";
import "./CourseEditorComponent.css"
import {createStore} from "redux";
import {Provider, connect} from "react-redux";
import createModule from "../../services/ModuleService"

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

const ModuleList = ({modules, dispatch}) =>
    <div>
    <ul className="bg-dark list-group wbdv-module-list">
        {modules.map(module =>
            <li key={module._id}
                className="wbdv-module-item">
                    <span className="wbdv-module-item-title">
                    {module.title}
                    </span>
                    <span className="fa-right-only-50">
                    <a onClick={
                        e => (
                            dispatch({type: 'EDIT_MODULE', _id:module._id})
                        )
                    }>
                        <i className="fa fa-edit"></i>
                    </a>
                    &nbsp;&nbsp;
                    <a onClick={
                        e => (
                            dispatch({type: 'DELETE_MODULE', _id:module._id})
                        )
                    }>
                        <i className="fas fa-trash"></i>
                    </a>
                    &nbsp;&nbsp;
                    <a onClick={
                        e => (
                            dispatch({type: 'UPDATE_MODULE', _id:module._id})
                        )
                    }>
                        <i className="fas fa-check-circle"></i>
                    </a>
                        </span>
            </li>
        )}
        <a onClick={e => (
            dispatch({type: 'CREATE_MODULE'})
        )}>
            <label>
                <li className="wbdv-module-item">
                    <span className="wbdv-module-item-title">
                        Click to add new
                        <i className="fa fa-plus wbdv-module-item-delete-btn"></i>
                    </span>
                </li>
            </label>
        </a>
    </ul>
    </div>

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case 'DELETE_MODULE':
            return {
                modules: state.modules.filter(module => (
                    module._id !== action._id
                ))
            }
        case 'CREATE_MODULE':
            return {
                modules: [
                    ...state.modules,
                    {
                        _id: '321',
                        title: 'New module'
                    }
                ]
            }
        default:
            return state
    }
}

const stateToPropertiesMapper = (state) => (
    {
        modules: state.modules
    }
)

let store = createStore(moduleReducer)

const ModuleListComponent = connect(stateToPropertiesMapper) (ModuleList)


const ModuleListContainer = () =>
    <Provider store={store}>
        <ModuleListComponent/>
    </Provider>

export default ModuleListContainer