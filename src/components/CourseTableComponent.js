import React from "react";
import CourseRow from "./CourseEditor/CourseRow";

const CourseTableComponent = ({courses, deleteCourse, saveCourse, showEditor}) =>
    <div>
        <h2> Course Table Component {courses.length}</h2>
        <ul>
            {
                courses.map(function (course, index) {
                    return (
                        <CourseRow
                        course={course}
                        showEditor={showEditor}
                        deleteCourse={deleteCourse}
                        saveCourse={saveCourse}/>
                    )
                })
            }
        </ul>
    </div>

export default CourseTableComponent