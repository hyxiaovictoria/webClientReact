import CourseCard from "./CourseCard";
import React from "react";

class CourseDeck extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="card-deck"> {
                    this.props.courses.map((course, index) =>
                        <CourseCard
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

export default CourseDeck
