import React from "react";
import "./CourseEditorComponent.css"
import {createStore} from "redux";
import {Provider, connect} from "react-redux";

let initialState = {
    modules :
        [
            {_id: "123", title: "Module 1-jQuery"},
            {_id: "234", title: "Module 2-React"},
            {_id: "345", title: "Module 3-Redux"},
            {_id: "456", title: "Module 4-Native"},
            {_id: "678", title: "Module 5-Angular"},
            {_id: "789", title: "Module 6-Node"},
            {_id: "890", title: "Module 7-Mongo"},
            {_id: "901", title: "Module 8-XXXX"},
            {_id: "012", title: "Module 9-YYYY"}
        ]
}

const ModuleListComponent = ({modules}) =>
    <div>
    <ul className="bg-dark list-group wbdv-module-list">
        {modules.map(module =>
            <li key={module._id}
                className="wbdv-module-item">
                <span>
                    <span className="wbdv-module-item-title">
                    {module.title}
                    </span>
                    <i className="fa fa-edit wbdv-module-item-delete-btn"></i>
                </span>
            </li>
        )}
        <a onClick={() => console.log("Test two")}>
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

const moduleReducer = () => {
    return initialState
}

const stateToPropertiesMapper = (state) => (
    {
        modules: state.modules
    }
)

let store = createStore(moduleReducer)

const ModuleListContainer = connect(stateToPropertiesMapper) (ModuleListComponent)


const ModuleListComponentTest = () =>
    <Provider store={store}>
        <ModuleListContainer/>
    </Provider>

export default ModuleListComponentTest