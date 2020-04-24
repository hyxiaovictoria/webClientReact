import React from "react";
import "../CourseEditor/CourseEditorComponent.css"
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "../CourseManager/CourseGridComponent";

class CourseManagerComponent extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row couese-manager-header-row">
                    <div className="col-sm-2 col-2 col-md-2 col-lg-1">
                        <i className="fas fa-bars fa-2x fa-inverse col-sm-1"/>
                    </div>

                    <div className="col-xs-4 col-4 col-lg-4 d-none d-md-none d-lg-block">
                        <h1> Course Manager</h1>
                    </div>

                    <div className="col-8 col-sm-8 col-md-8 col-lg-6 couese-manager-header-row">
                        <input type="text" className="form-control form-control-lg wbdv-field wbdv-new-course "
                               id="NewCourseTitle"
                               placeholder="New Course Title"
                               onChange={(e) => {
                                   this.props.updateForm({
                                       newCourseTitle: e.target.value
                                   })
                               }
                               }
                               value={this.props.state.newCourseTitle}/>
                    </div>

                    <div className="col-2 col-sm-2 col-md-2 col-lg-1 float-right">
                        <a className="wbdv-button wbdv-add-course active float-right">
                        <i className="fas fa-plus-circle fa-3x fa-inverse bg-red"/>
                        </a>
                    </div>

                </div>
                <div>
                    {
                        this.props.state.layout === 'table' &&
                        <CourseTableComponent
                            deleteCourse={this.props.deleteCourse}
                            saveCourse={this.props.saveCourse}
                            courses={this.props.state.courses}/>
                    }
                    {
                        this.props.state.layout === 'grid' &&
                        <CourseGridComponent
                            deleteCourse={this.props.deleteCourse}
                            saveCourse={this.props.saveCourse}
                            courses={this.props.state.courses}/>
                    }
                </div>
            </div>
        )
    }
}


export default CourseManagerComponent

