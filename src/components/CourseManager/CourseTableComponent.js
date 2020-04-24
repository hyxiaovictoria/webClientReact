import React from "react";
import CourseTableRow from "./CourseTableRow"
import '../../containers/WhiteBoardContainer.css'

class CourseTableComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        activeCourseId: ''
    }

    render() {
        return(
            <div className="container-fluid couese-manager-subheader-row">
                <div className="row">
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
                        <i className="wbdv-icon-black wbdv-sort fas fa-grip-horizontal"></i>
                        &emsp;
                        <i className="wbdv-icon-black wbdv-button wbdv-list-layout fas fa-sort-alpha-down"></i>
                    </div>
                </div>
                {
                    this.props.courses.map(
                        course =>
                            <CourseTableRow
                                key={course._id}
                                course={course}
                                active={course._id === this.state.activeCourseId}
                                selectCourse={() => this.setState({activeCourseId: course._id})}
                                deleteCourse={() => this.props.deleteCourse}
                                saveCourse={() => this.props.saveCourse}
                            />
                    )
                }
            </div>)
    }
}

export default CourseTableComponent
