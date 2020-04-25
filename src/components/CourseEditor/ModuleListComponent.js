import React from "react";
import "./CourseEditorComponent.css"
import {MODULES_API_URL} from "../../constants";
import {connect} from "react-redux";
import ModuleListItem from "./ModuleListItem";

class ModuleListComponent extends React.Component {
    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
        console.log(JSON.stringify(this.props.modules));
    }

    componentDidUpdate() {
        // Set first module to be active by default
        if (this.state.activeModuleId === undefined && (this.props.modules.length > 0)) {
            this.setState({activeModuleId: this.props.modules[0]._id});
            this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.modules[0]._id}`);
        }
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

    render() {
        return (
            <ul className="couese-manager-header-row list-group wbdv-module-list">
                {
                    this.props.modules && this.props.modules.map(
                        module =>
                            <ModuleListItem
                                key={module._id}
                                edit={() => {
                                    const moduleId = module._id
                                    // console.log('ModuleListComponent ' + this.props.courseId)
                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                    this.setState({
                                        editingModuleId: module._id,
                                        module: {
                                            title: module.title,
                                            _id: module._id
                                        }
                                    })
                                }}
                                update={(newTitle) => {
                                    this.setState(prevState => ({
                                        module: {
                                            ...prevState.module,
                                            title: newTitle
                                        }
                                    }));
                                    // console.log(JSON.stringify(this.state.module));
                                }
                                }
                                select={() => {
                                    const moduleId = module._id
                                    this.setState({
                                        activeModuleId: module._id
                                    })
                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                }}
                                save={() => {
                                    this.setState({editingModuleId: ''})
                                    // console.log('YH_moduleTitleToSave: '
                                    //     + this.props.courseId + ' '
                                    //     + this.state.module._id + ' '
                                    //     + this.state.module.title);
                                    module.title = this.state.module.title;

                                }}
                                editing={module._id === this.state.editingModuleId}
                                active={module._id === this.state.activeModuleId}
                                module={module}
                                updatingModule={this.state.module}
                            />
                    )
                }
                <li className="list-group-item wbdv-module-item">
                    <input type="text" id="moduleNew"
                           placeholder="New Module Title"
                           onChange={(e) => {
                               this.setState({newModuleTitle: e.target.value});
                               console.log('YH(newModuleTitle): ' + e.target.value)
                           }
                           }
                           value={this.state.newModuleTitle}
                    />
                    <button onClick={
                        () => {
                            this.props.createModule(this.props.courseId, {title: this.state.newModuleTitle});
                            this.setState({newModuleTitle: ''});
                        }
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
