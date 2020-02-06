import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import "./CourseEditorComponent.css"

class CourseEditorComponent extends React.Component {
    state = {
        modules :
            [
                {_id: "123", title: "Module 1-jQuery"},
                {_id: "234", title: "Module 2-React"},
                {_id: "345", title: "Module 3-Redux"},
                {_id: "345", title: "Module 4-Native"},
                {_id: "345", title: "Module 5-Angular"},
                {_id: "345", title: "Module 6-Node"},
                {_id: "345", title: "Module 7-Mongo"}
            ],
        lessons :
            [
                {_id: "123", title: "Build"},
                {_id: "234", title: "Pages"},
                {_id: "345", title: "Theme"},
                {_id: "345", title: "Store"},
                {_id: "345", title: "Apps"},
                {_id: "456", title: "Settings"}
            ]
    }

    render() {
        return (
            <div>
                <LessonTabs lessons={this.state.lessons} hideEditor={this.props.hideEditor}/>

                <button onClick={this.props.hideEditor}> Close</button>
                <h3> Course Editor</h3>

                <div className="row">
                    <div className="col-4">
                        <ModuleListComponent
                            modules={this.state.modules}
                        />
                    </div>
                    <div className="col-8">
                        <TopicPills/>
                    </div>
                </div>
            </div>)
    }
}


export default CourseEditorComponent