import React from "react";
import "../CourseEditor/CourseEditorComponent.css"
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "../CourseManager/CourseGridComponent";

class CourseManagerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

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
                        <span className="wbdv-button wbdv-add-course active float-right"
                        onClick={this.props.addCourse}>
                            <i className="fas fa-plus-circle fa-3x fa-inverse bg-red"/>
                        </span>
                    </div>

                </div>
                {this.props.state.layout === "table" &&
                    <div className="row couese-manager-subheader-row">
                        <div className="wbdv-title col-sm-9 col-md-7 col-lg-6 col-9">
                            Title
                            <i className="wbdv-icon-black wbdv-sort fas fa-caret-up"></i>
                        </div>

                        <div className="wbdv-owner col-md-3 col-lg-2 col-2 d-none d-sm-none d-md-block">
                            Owned by
                        </div>

                        <div className="wbdv-last-modified col-lg-2 col-2 d-none d-md-none d-lg-block">
                            Last modified
                        </div>

                        <div className="wbdv-icon-black col-sm-3 col-md-2 col-lg-2 col-3 float-right">
                            <span onClick={this.props.toggle}>
                                <i className="wbdv-icon-black wbdv-sort fas fa-grip-horizontal"></i>
                            </span>
                            &emsp;
                            <i className="wbdv-icon-black wbdv-button wbdv-list-layout fas fa-sort-alpha-down"></i>
                        </div>
                    </div>
                }
                {this.props.state.layout === "grid" &&
                    <div className="row couese-manager-subheader-row">
                        <div className="wbdv-title col-sm-8 col-md-7 col-lg-8 col-8">
                            Recent documents
                        </div>

                        <div className="wbdv-owner col-md-2 col-lg-2 col-2 d-none d-sm-none d-md-block">
                            Owned by me
                            &nbsp;
                            <i className="wbdv-owner wbdv-sort fas fa-caret-down"></i>
                        </div>

                        <div className="wbdv-icon-black col-sm-4 col-md-3 col-lg-2 col-4 float-right">
                            <span onClick={this.props.toggle}>
                                <i className="wbdv-icon-black wbdv-sort fas fa-list"></i>
                            </span>
                            &emsp;
                            <i className="wbdv-icon-black wbdv-button wbdv-list-layout fas fa-sort-alpha-down"></i>

                            &emsp;
                            <i className="fas fa-folder"></i>
                        </div>
                    </div>
                }

                <div>
                    {
                        this.props.state.layout === 'table' &&
                        <CourseTableComponent
                            deleteCourse={this.props.deleteCourse}
                            saveCourse={this.props.saveCourse}
                            courses={this.props.state.courses}
                            state={this.props.state}
                        />
                    }
                    {
                        this.props.state.layout === 'grid' &&
                        <CourseGridComponent
                            deleteCourse={this.props.deleteCourse}
                            saveCourse={this.props.saveCourse}
                            courses={this.props.state.courses}
                            state={this.props.state}
                        />
                    }
                </div>
            </div>
        )
    }
}


export default CourseManagerComponent

