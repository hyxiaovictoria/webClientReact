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
    // modules, lessons, widgets
})

const store = createStore(reducers)



const CourseEditorComponent = ({hideEditor, match, courseId, moduleId, history}) =>
    <Provider store={store}>
        <div>
            {/*<button onClick={() => history.push("/")}>XX</button>*/}
            {/*<LessonTabs lessons={this.state.lessons} hideEditor={this.props.hideEditor}/>*/}
            <LessonTabs courseId={courseId} moduleId={moduleId}/>

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
                    <WidgetList topicId={"111"}></WidgetList>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditorComponent