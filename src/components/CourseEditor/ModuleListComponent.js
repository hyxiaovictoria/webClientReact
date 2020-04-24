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
            <ul className="couese-manager-header-row list-group wbdv-module-list">
                {
                    this.props.modules && this.props.modules.map(
                        module =>
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
                            save={() => {
                                this.setState({editingModuleId: ''})
                                console.log('YH_moduleTitleToSave: '
                                    + this.props.courseId + ' '
                                    + module._id + ' '
                                    + module.title)
                            }}
                            editing={module._id === this.state.editingModuleId}
                            active={module._id === this.state.activeModuleId}
                            module={module}
                            updateForm={this.updateForm}
                        />
                            )
                }
                <li className="list-group-item wbdv-module-item">
                    <input type="text" id="moduleNew"
                           placeholder="New Module Title"
                           onChange={(e) => {
                               this.updateForm({newModuleTitle: e.target.value})
                               console.log('YH(newModuleTitle): ' + e.target.value)
                                }
                           }
                           value={this.state.newModuleTitle}
                    />
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

export default connect(
    stateToPropertyMapper
)(ModuleListComponent)
