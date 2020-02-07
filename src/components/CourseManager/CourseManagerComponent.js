import React from "react";
import ModuleListComponent from "../CourseEditor/ModuleListComponent";
import LessonTabs from "../CourseEditor/LessonTabs";
import TopicPills from "../CourseEditor/TopicPills";
import "../CourseEditor/CourseEditorComponent.css"
import CourseTableComponent from "../CourseManager/CourseTableComponent";
import CourseGridComponent from "../CourseManager/CourseGridComponent";

class CourseManagerComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <form className="form-horizontal">
                        <div className="form-group row" style={{backgroundColor:"royalblue"}}>
                            <a onClick={this.props.toggle}>
                                <i className="fas fa-bars fa-2x fa-inverse col-sm-1"></i>
                            </a>
                            <a onClick={this.props.toggle}>
                                <label className="wbdv-label wbdv-course-manager">
                                    Course Manager (Click to toggle)</label>
                            </a>
                            <input type="text" className="wbdv-field wbdv-new-course form-control col-sm-6" id="email3"
                                   placeholder="New Course Title"
                                   onChange={(e) =>
                                       this.props.updateForm({
                                            newCourseTitle: e.target.value
                                       })}
                                   value={this.props.state.newCourseTitle}/>
                            <a onClick={this.props.addCourse}>
                                                <span className="wbdv-button wbdv-add-course fa-stack fa-1x wd-bottom-right col-sm-1">
                                                <i className="fas fa-circle fa-stack-2x"></i>
                                                <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                                            </span>
                            </a>
                        </div>
                    </form>
                </div>
                <div>
                    {
                        this.props.state.layout === 'table' &&
                        <CourseTableComponent
                            showEditor={this.props.showEditor}
                            deleteCourse={this.props.deleteCourse}
                            saveCourse={this.props.saveCourse}
                            courses={this.props.state.courses}/>
                    }
                    {
                        this.props.state.layout === 'grid' &&
                        <CourseGridComponent courses={this.props.state.courses}/>
                    }
                </div>
            </div>
        )
    }
}


export default CourseManagerComponent

