import CourseCard from "./CourseCard";
import React from "react";

class CourseDeck extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <h1>Whiteboard</h1>
                <div className="card-deck"> {
                    this.props.courses.map((course, index) =>
                        <CourseCard course={course}
                                    showEditor={this.props.showEditor}
                                    deleteCourse={this.props.deleteCourse}
                                    saveCourse={this.props.saveCourse}/>
                    )
                }</div>
            </div>)
    }
}

export default CourseDeck