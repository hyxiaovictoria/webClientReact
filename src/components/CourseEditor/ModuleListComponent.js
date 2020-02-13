import React from "react";
//import ModuleListItem from "./ModuleListItem";
import "./CourseEditorComponent.css"
import {MODULES_API_URL} from "../../constants";
import {connect} from "react-redux";

//import "./CourseEditorComponent.css"
//import {createStore} from "redux";
//import {Provider, connect} from "react-redux";
//import createModule from "../../services/ModuleService"
//import moduleReducer from "../../reducers/modules";

class ModuleListComponent extends React.Component {

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
        const active = true
        return (
            <ul className="bg-dark list-group wbdv-module-list">
                {
                    this.props.modules && this.props.modules.map(
                        module =>
                            <li
                                className={`wbdv-module-item ${active ? 'active':''}`}>
                            <span className="wbdv-module-item-title">
                            {module.title}
                            </span>
                            {/*{editing &&*/}
                            <span className="fa-right-only-50">
                                { this.state.editingModuleId !== module._id &&
                                    <a onClick={
                                        () => {
                                            this.setState({
                                                editingModuleId: module._id
                                            })
                                            console.log('Clicked:' + module._id)
                                        }
                                    }>
                                        <i className="fa fa-edit"></i>
                                    </a>
                                }
                                &nbsp;&nbsp;
                                <a>
                                    <i className="fas fa-trash"></i>
                                </a>
                                &nbsp;&nbsp;
                                <a>
                                    <i className="fas fa-check-circle"></i>
                                </a>
                            </span>
                            </li>
                        // <ModuleListItem
                        //     key={module._id}
                        //     edit={() => {
                        //         const moduleId = module._id
                        //         console.log('ModuleListComponent ' + this.props.courseId)
                        //         this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                        //         this.setState({
                        //             editingModuleId: module._id
                        //         })
                        //     }}
                        //     select={() => {
                        //         const moduleId = module._id
                        //         this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                        //         this.setState({
                        //             activeModuleId: module._id
                        //         })
                        //     }}
                        //     save={() => this.setState({
                        //         editingModuleId: ''
                        //     })}
                        //     editing={module._id === this.state.editingModuleId}
                        //     active={module._id === this.state.activeModuleId}
                        //     module={module}/>
                            )
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
)(ModuleListComponent)
