import {connect} from "react-redux";
import * as service from "../services/ModuleService";
import {createModule, findModulesForCourse} from "../actions/moduleActions";
import ModuleListComponent from "../components/CourseEditor/ModuleListComponent";

const stateToPropertiesMapper = (state) => (
    {
        modules: state.modules.modules,
        courseId: 'aa'
    }
)

const dispatchToPropertyMapper = (dispatch) => ({
    createModule: (courseId, module) =>
        service.createModule(courseId, module)
            .then(actualModule =>
                dispatch(createModule(actualModule))),
    findModulesForCourse: (courseId) =>
        service.findModulesForCourse(courseId)
            .then(modules =>
                dispatch(findModulesForCourse(modules)))
})

const ModuleListContainer = connect(
    stateToPropertiesMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)

// let store = createStore(moduleReducer)
//
// const ModuleListContainer = () =>
//     <Provider store={store}>
//         <ModuleListComponent/>
//     </Provider>

export default ModuleListContainer