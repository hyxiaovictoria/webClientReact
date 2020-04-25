import React from "react";
import {connect} from 'react-redux'
import {COURSES_MODULES_API_URL, MODULES_API_URL} from "../../constants";
import "./CourseEditorComponent.css"
import {updateModule, findModulesForCourse, createModule, deleteModule} from "../../services/ModuleService";


class ModuleListItem extends React.Component {
    render() {
        return (
            <>
                <li
                    onClick={this.props.select}
                    className={`wbdv-module-item list-group-item ${this.props.active ? 'active' : ''} `}
                >
                    {!this.props.editing &&
                    <span className="wbdv-module-item-title">
                            {this.props.module.title}
                        </span>
                    }

                    <span>
                        {!this.props.editing &&
                        <a onClick={this.props.edit}>
                            <i className="fa fa-edit fa-right-only-70"></i>
                        </a>
                        }
                        {this.props.editing &&
                        <input
                            onChange={e => {
                                const newTitle = e.target.value;
                                // console.log("newTitle: " + newTitle);
                                this.props.update(newTitle);
                            }}
                            value={this.props.updatingModule.title}
                        >
                        </input>}

                        &nbsp;&nbsp;
                        {this.props.editing &&
                        <a onClick={() => {
                            this.props.deleteModule(this.props.module._id);
                            this.props.save();
                        }}>
                            <i className="fas fa-trash fa-right-only-70"></i>
                        </a>
                        }
                        &nbsp;&nbsp;
                        {this.props.editing &&
                        <a onClick={() => {
                            this.props.updateModule(this.props.updatingModule._id,
                                this.props.updatingModule)
                            this.props.save()
                        }}>
                            <i className="fas fa-check-circle fa-right-only-50"></i>
                        </a>
                        }
                    </span>
                </li>
            </>
        )
    }

}

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
        console.log("updateModule: (" + moduleId + ") : " + JSON.stringify(module));
        updateModule(moduleId, module).then(status =>
            dispatch({
                type: 'UPDATE_MODULE',
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
