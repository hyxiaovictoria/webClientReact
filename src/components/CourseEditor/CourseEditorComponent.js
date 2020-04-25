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
import {findCourseById} from "../../services/CourseService";

const reducers = combineReducers({
    modules, lessons, topics, widgets
})

const store = createStore(reducers)

export default class CourseEditorComponent extends React.Component {
    state = {course: ""};

    componentDidMount() {
        findCourseById(this.props.courseId)
            .then(course => this.setState({course: course}));
    }

    render() {
        return (
            <Provider store={store}>
                <div className="row course-manager-header-row">
                    <span
                        onClick={() => this.props.history.push("/")}
                        className="wbdv-course-editor wbdv-close">
                        <i className="course-manager-header-row black fa fa-times fa-2x fa-inverse"/>
                    </span>
                    <span className="course-editor-header-title">
                        {this.state.course.title}
                        {/*{this.state.course === undefined ? "" : this.state.course["title"]}*/}
                    </span>
                </div>

                <div className="row">
                    <div className="col-4">
                        <ModuleListContainer
                            moduleId={this.props.moduleId}
                            history={this.props.history}
                            courseId={this.props.courseId}
                        />
                    </div>
                    <div className="col-8">
                        <LessonTabs courseId={this.props.courseId} moduleId={this.props.moduleId}
                                    lessonId={this.props.lessonId} topicId={this.props.topicId}
                                    history={this.props.history}/>
                        <TopicPills courseId={this.props.courseId} moduleId={this.props.moduleId}
                                    lessonId={this.props.lessonId} topicId={this.props.topicId}
                                    history={this.props.history}/>
                        <WidgetList courseId={this.props.courseId} moduleId={this.props.moduleId}
                                    lessonId={this.props.lessonId} topicId={this.props.topicId}
                                    history={this.props.history}/>
                    </div>
                </div>
                }
            </Provider>
        );
    }
}
