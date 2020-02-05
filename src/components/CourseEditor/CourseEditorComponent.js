import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import "./CourseEditorComponent.css"

const CourseEditorComponent = ({hideEditor}) =>
    <div>
    <nav className="navbar navbar-dark bg-dark">
        <a className="wbdv-course-editor wbdv-close col-sm-1"
           href="../course-list/course-list.template.client.html">
            <i className="fa fa-times fa-2x fa-inverse"></i>
        </a>
        <h4 className="wbdv-course-title col-sm-3">CS5610-WebDev</h4>
        <ul className="nav nav-tabs wbdv-page-tab col-sm-6">
            <li className="nav-item">
                <a className="nav-link" href="#">Build</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#">Pages</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Theme</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Store</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Apps</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Settings</a>
            </li>
        </ul>
        <a className="wbdv-new-page-btn col-sm-1">
            <i className="fa fa-plus fa-2x fa-inverse"></i>
        </a>
    </nav>
    <div>
        <button onClick={hideEditor}> Close</button>
        <h3> Course Editor</h3>

        <div className="row">
            <div className="col-4">
                <ModuleListComponent
                    modules={[
                        {_id: "123", title: "Module 1-jQuery"},
                        {_id: "234", title: "Module 2-React"},
                        {_id: "345", title: "Module 3-Redux"},
                        {_id: "345", title: "Module 4-Native"},
                        {_id: "345", title: "Module 5-Angular"},
                        {_id: "345", title: "Module 6-Node"},
                        {_id: "345", title: "Module 7-Mongo"}
                    ]}
                />
            </div>
            <div className="col-8">
                <LessonTabs/>
                <TopicPills/>
            </div>
        </div>
    </div>
    </div>

export default CourseEditorComponent