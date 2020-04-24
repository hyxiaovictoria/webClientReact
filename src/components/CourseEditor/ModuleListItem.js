import React from "react";
import {connect} from 'react-redux'
import {COURSES_MODULES_API_URL, MODULES_API_URL} from "../../constants";
import "./CourseEditorComponent.css"
import {updateModule, findModulesForCourse, createModule, deleteModule} from "../../services/ModuleService";


const ModuleListItem = ({save, edit, editing, module, active, select, updateForm}) =>
    <li
        onClick={select}
        className={`wbdv-module-item list-group-item ${active ? 'active':''} `}
    >

        {!editing &&
        <span className="wbdv-module-item-title">
        {module.title}
        </span>
        }

        <span>
            {!editing && <a onClick={edit}>
                <i className="fa fa-edit fa-right-only-70"></i>
            </a>
            }
            {editing &&
                <input
                    onChange={e => {module.title = e.target.value}}
                    // value={module.title}
                >
            </input>}

            &nbsp;&nbsp;
            {editing &&<a onClick={() => {
                deleteModule(module._id)
                save()
            }}>
                <i className="fas fa-trash fa-right-only-70"></i>
            </a>
            }
            &nbsp;&nbsp;
            {editing &&
            <a onClick={() => {
                updateModule(module._id, module)
                save()
            }}>
                <i className="fas fa-check-circle fa-right-only-50"></i>
            </a>
            }
        </span>
    </li>

const stateToPropertyMapper = (state) => ({})
const dispatchToPropertyMapper = (dispatch) => ({
    // findModulesForCourse: courseId =>
    //     fetch(findModulesForCourse(courseId))
    //         .then(modules => dispatcher({
    //             type: 'FIND_MODULES_FOR_COURSE',
    //             modules: modules
    //         })),
    // addLesson: (moduleId) =>
    //     fetch(MODULES_LESSONS_API_URL(moduleId), {
    //         method: 'POST',
    //         body: JSON.stringify({title: 'New Lesson'}),
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }).then(response => response.json())
    //         .then(actualLesson =>
    //             dispatcher({
    //                 type: 'CREATE_LESSON',
    //                 lesson: actualLesson
    //             })),
    deleteModule: (moduleId) => {
        deleteModule(moduleId)
            .then(status => dispatch({
                type: 'DELETE_MODULE',
                moduleId: moduleId
            }))
    },
    updateModule: (moduleId, module) => {
        updateModule(moduleId, module).then(status =>
            dispatch({
                type:'UPDATE_MODULE',
                moduleId: moduleId,
                module: module
            })
        )
    }
})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListItem)
