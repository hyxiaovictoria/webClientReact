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
            <div className="container-fluid course-manager-subheader-row">
                {
                    this.props.courses.map(
                        course =>
                            <CourseTableRow
                                {...this.props}
                                key={course._id}
                                course={course}
                                active={course._id === this.state.activeCourseId}
                                selectCourse={() => this.setState({activeCourseId: course._id})}
                                deleteCourse={this.props.deleteCourse}
                                saveCourse={this.props.saveCourse}
                            />
                    )
                }
            </div>)
    }
}

export default CourseTableComponent
