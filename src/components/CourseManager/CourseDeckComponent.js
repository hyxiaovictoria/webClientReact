import CourseCardComponent from "./CourseCardComponent";
import React from "react";

class CourseDeckComponent extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="card-deck"> {
                    this.props.courses.map((course, index) =>
                        <CourseCardComponent
                                    key={index}
                                    course={course}
                                    showEditor={this.props.showEditor}
                                    deleteCourse={this.props.deleteCourse}
                                    saveCourse={this.props.saveCourse}/>
                    )
                }</div>
            </div>)
    }
}

export default CourseDeckComponent
