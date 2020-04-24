import React from "react";
import CourseDeckComponent from "./CourseDeckComponent";

const CourseGridComponent = ({courses, deleteCourse, saveCourse, showEditor}) =>
    <div className="row row-narrow course-grid-container">
        {
            <CourseDeckComponent courses={courses}
                                 showEditor={showEditor}
                                 deleteCourse={deleteCourse}
                                 saveCourse={saveCourse}/>
        }
    </div>

export default CourseGridComponent
