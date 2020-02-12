import React from "react";
import "./CourseEditorComponent.css"
import {createStore} from "redux";
import {Provider, connect} from "react-redux";
//import createModule from "../../services/ModuleService"
import moduleReducer from "../../reducers/modules";


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
            dispatch({type: 'CREATE_MODULE',
                    module: {
                        _id: new Date().getTime(),
                        title: 'Module ' + new Date().getTime()
                    }
            })
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