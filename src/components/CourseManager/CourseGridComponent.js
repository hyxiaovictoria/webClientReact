import React from "react";
import CourseDeck from "./CourseDeck";

const CourseGridComponent = ({courses, deleteCourse, saveCourse, showEditor}) =>
    <div className="row row-narrow course-grid-container">
        {
            <CourseDeck courses={courses}
                        showEditor={showEditor}
                        deleteCourse={deleteCourse}
                        saveCourse={saveCourse}/>
        }
    </div>

export default CourseGridComponent
