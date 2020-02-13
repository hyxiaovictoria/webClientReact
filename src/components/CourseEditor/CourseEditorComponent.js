import React from "react";
import ModuleListComponentTest from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import "./CourseEditorComponent.css"
import WidgetComponent from "./WidgetComponent";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleListContainer from "../../containers/ModuleListContainer";
import modules from '../../reducers/moduleReducer'
import lessons from '../../reducers/lessonReducer'

const reducers = combineReducers({
    modules, lessons
    // modules, lessons, widgets
})

const store = createStore(reducers)

const CourseEditorComponent = ({hideEditor, match, courseId, moduleId, history}) =>
    <Provider store={store}>
        <div>
            {/*<LessonTabs lessons={this.state.lessons} hideEditor={this.props.hideEditor}/>*/}
            <LessonTabs moduleId={moduleId}/>

            <div className="row">
                <div className="col-4">
                    {/*<ModuleListComponent modules={this.state.modules}/>*/}
                    <ModuleListContainer
                        moduleId={moduleId}
                        history={history}
                        courseId={courseId}
                    />
                </div>
                <div className="col-8">
                    <TopicPills topics={[{_id:1,title:"Topic1"}]}/>
                    <WidgetComponent></WidgetComponent>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditorComponent