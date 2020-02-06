import React from "react";
import "./CourseEditorComponent.css"

class LessonTabs extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="wbdv-course-editor wbdv-close col-sm-1"
                       href="../course-list/course-list.template.client.html">
                        <i className="fa fa-times fa-2x fa-inverse"></i>
                    </a>
                    <h4 className="wbdv-course-title col-sm-3">CS5610-WebDev</h4>
                    <ul className="nav nav-tabs wbdv-page-tab col-sm-6">
                        {this.props.lessons.map(lesson =>
                            <li key={lesson._id} className="nav-item">
                                <a className="nav-link wbdv-white" href="#">{lesson.title}</a>
                            </li>
                        )}
                    </ul>
                    <a className="wbdv-new-page-btn col-sm-1">
                        <i className="fa fa-plus fa-2x fa-inverse"></i>
                    </a>
                </nav>
            </div>
        )
    }
}

export default LessonTabs