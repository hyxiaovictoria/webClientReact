import React from "react";
import ModuleListComponentTest from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import "./CourseEditorComponent.css"
import WidgetComponent from "./WidgetComponent";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleListContainer from "../../containers/ModuleListContainer";
import modules from '../../reducers/modules'
import lessons from '../../reducers/lessons'

const reducers = combineReducers({
    modules, lessons
    // modules, lessons, widgets
})

const store = createStore(reducers)

const CourseEditorComponent = ({hideEditor, match, courseId, moduleId, history}) =>
    <Provider store={store}>
        <div>
            {/*<LessonTabs lessons={this.state.lessons} hideEditor={this.props.hideEditor}/>*/}
            <h3> Course Editor</h3>

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
                    <LessonTabs moduleId={moduleId}/>
                    {/*<TopicPills topics={this.state.topics}/>*/}
                    <WidgetComponent></WidgetComponent>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditorComponent