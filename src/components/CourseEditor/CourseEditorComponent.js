import React from "react";
import ModuleListComponentTest from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import "./CourseEditorComponent.css"
//import WidgetComponent from "./WidgetListComponent";
import WidgetList from "./WidgetList";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleListContainer from "../../containers/ModuleListContainer";
import modules from '../../reducers/moduleReducer'
import lessons from '../../reducers/lessonReducer'
import topics from '../../reducers/topicReducer'
import widgets from '../../reducers/widgetReducer'

const reducers = combineReducers({
    modules, lessons, topics, widgets
})

const store = createStore(reducers)

const CourseEditorComponent = ({hideEditor, match, courseId, moduleId, lessonId, topicId, history}) =>
    <Provider store={store}>
        <div>
            <div className="row course-manager-header-row">
                <span
                    onClick={() => history.push("/")}
                    className="wbdv-course-editor wbdv-close">
                    <i className="course-manager-header-row black fa fa-times fa-2x fa-inverse"/>
                </span>
                <span className="course-editor-header-title">
                    {courseId}
                    {/*{this.state.course === undefined ? "" : this.state.course["title"]}*/}
                </span>
            </div>
            {/*<button onClick={() => history.push("/")}>XX</button>*/}
            {/*<LessonTabs lessons={this.state.lessons} hideEditor={this.props.hideEditor}/>*/}

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
                    <LessonTabs courseId={courseId} moduleId={moduleId} lessonId={lessonId} topicId={topicId} history={history}/>
                    <TopicPills courseId={courseId} moduleId={moduleId} lessonId={lessonId} topicId={topicId} history={history}/>
                    <WidgetList courseId={courseId} moduleId={moduleId} lessonId={lessonId} topicId={topicId} history={history}/>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditorComponent
