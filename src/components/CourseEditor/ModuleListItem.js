import React from "react";
import {connect} from 'react-redux'
import {COURSES_MODULES_API_URL, MODULES_API_URL} from "../../constants";
import "./CourseEditorComponent.css"

const ModuleListItem = ({save, edit, editing, module, deleteModule, active, select}) =>
    <li
        onClick={select}
        className={`wbdv-module-item ${active ? 'active':''}`}>
        <span className="wbdv-module-item-title">
        {module.title}
        </span>

        <span className="fa-right-only-50">
            {!editing && <a onClick={edit}>
                <i className="fa fa-edit"></i>
            </a>
            }
            &nbsp;&nbsp;
            {editing &&<a onClick={() =>
                deleteModule(module._id)}>
                <i className="fas fa-trash"></i>
            </a>
            }
            &nbsp;&nbsp;
            {editing &&
            <a onClick={save}>
                <i className="fas fa-check-circle"></i>
            </a>
            }
        </span>
    </li>

const stateToPropertyMapper = (state) => ({})
const dispatchToPropertyMapper = (dispatch) => ({
    deleteModule: (moduleId) => {
        fetch(`${MODULES_API_URL}/${moduleId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status => dispatch({
                type: 'DELETE_MODULE',
                moduleId: moduleId
            }))
    }
})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListItem)
