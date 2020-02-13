import React from "react";
import ModuleListItem from "./ModuleListItem";
import "./CourseEditorComponent.css"

//import "./CourseEditorComponent.css"
//import {createStore} from "redux";
//import {Provider, connect} from "react-redux";
//import createModule from "../../services/ModuleService"
//import moduleReducer from "../../reducers/modules";

export default class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    state = {
        activeModuleId: this.props.moduleId,
        editingModuleId: '',
        module: {
            title: '',
            _id: ''
        }
    }

    render() {
        return (
            <ul className="bg-dark list-group wbdv-module-list">
                {
                    this.props.modules && this.props.modules.map(module =>
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
                            module={module}/>)
                }
                <li className="list-group-item">
                    <button onClick={
                        () => this.props.createModule(this.props.courseId, {title: 'New Module'})
                    }>
                        Add
                    </button>
                </li>
            </ul>
        );
    }
}


// const stateToPropertiesMapper = (state) => (
//     {
//         modules: state.modules
//     }
// )
//
// let store = createStore(moduleReducer)
//
// const ModuleListComponent = connect(stateToPropertiesMapper) (ModuleList)
//
//
// const ModuleListContainer = () =>
//     <Provider store={store}>
//         <ModuleListComponent/>
//     </Provider>
//
// export default ModuleListContainer