import React from "react";
import "./CourseEditorComponent.css"
import {MODULES_API_URL} from "../../constants";
import {connect} from "react-redux";
import ModuleListItem from "./ModuleListItem";

class ModuleListComponent extends React.Component {
    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    state = {
        newModuleTitle: '',
        activeModuleId: this.props.moduleId,
        editingModuleId: '',
        module: {
            title: '',
            _id: ''
        }
    }

    updateForm = (newState) => {
        this.setState(newState)
    }

    render() {
        const active = true
        return (
            <ul className="bg-dark list-group wbdv-module-list">
                {
                    this.props.modules && this.props.modules.map(
                        module =>
                            // <li key={module._id}
                            //     className={`wbdv-module-item ${active ? 'active':''}`}>
                            //     {this.state.editingModuleId !== module._id &&
                            //         <span className="wbdv-module-item-title">
                            //             {module.title}
                            //         </span>
                            //     }
                            //     {this.state.editingModuleId === module._id &&
                            //     <input
                            //         value={this.state.module.title}/>
                            //     }
                            // {/*{editing &&*/}
                            // <span className="fa-right-only-50">
                            //     { this.state.editingModuleId !== module._id &&
                            //         <a onClick={
                            //             () => {
                            //                 this.setState({
                            //                     editingModuleId: module._id
                            //                 })
                            //             }
                            //         }>
                            //             <i className="fa fa-edit"></i>
                            //         </a>
                            //     }
                            //     {
                            //         this.state.editingModuleId === module._id &&
                            //         <div>
                            //             <a onClick={
                            //                 () => this.props.deleteModule(module._id)}>
                            //                 <i className="fas fa-trash"></i>
                            //             </a>
                            //             &nbsp;&nbsp;
                            //             <a onClick={
                            //                 () => this.setState({
                            //                     editingModuleId:''
                            //                 })
                            //             }>
                            //             <i className="fas fa-check-circle"></i>
                            //             </a>
                            //         </div>
                            //         }
                            // </span>
                            // </li>
                        <ModuleListItem
                            key={module._id}
                            edit={() => {
                                const moduleId = module._id
                                console.log('ModuleListComponent ' + this.props.courseId)
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                this.setState({
                                    editingModuleId: module._id
                                })
                            }}
                            select={() => {
                                const moduleId = module._id
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                this.setState({
                                    activeModuleId: module._id
                                })
                            }}
                            save={() => this.setState({
                                editingModuleId: ''
                            })}
                            editing={module._id === this.state.editingModuleId}
                            active={module._id === this.state.activeModuleId}
                            module={module}/>
                            )
                }
                <li className="list-group-item">
                    <input type="text" id="moduleNew"
                           placeholder="New Module Title"
                           onChange={(e) => {
                               this.updateForm({newModuleTitle: e.target.value})
                               console.log('YH(newModuleTitle): ' + e.target.value)
                                }
                           }
                           value={this.state.newModuleTitle}/>
                    <button onClick={
                        () => this.props.createModule(this.props.courseId, {title: this.state.newModuleTitle})
                    }>
                        Add
                    </button>
                </li>
            </ul>
        );
    }
}

const stateToPropertyMapper = (state) => ({
    modules: state.modules.modules
})

const dispatchToPropertyMapper = (dispatcher) => ({
    deleteModule: (moduleId) => {
        fetch(`${MODULES_API_URL}/${moduleId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status => dispatcher({
                type: 'DELETE_MODULE',
                moduleId: moduleId
            }))
    }
})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListComponent)
