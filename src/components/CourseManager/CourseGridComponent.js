import React from "react";
import CourseDeck from "./CourseDeck";

const CourseGridComponent = ({courses, deleteCourse, saveCourse, showEditor}) =>
    <div className="row row-narrow course-grid-container">
        <table className="table">
            <thead>
            <tr className="wbdv-header">
                <th className="wbdv-title">
                    Recent documents
                </th>
                <th className="wbdv-owner">
                    Owned by me
                    <i className="wbdv-header wbdv-sort fas fa-caret-down"></i>
                </th>
                <th className="wbdv-last-modified">
                    <i className="wbdv-header wbdv-sort fas fa-grip-horizontal"></i>
                    &nbsp;&nbsp;&nbsp;
                    <i className="wbdv-button wbdv-list-layout fas fa-sort-alpha-down"></i>
                    &nbsp;&nbsp;&nbsp;
                    <i className="fas fa-folder"></i>
                </th>
                <th>
                    &nbsp;
                </th>
            </tr>
            </thead>
        </table>

        {
            <CourseDeck courses={courses}
                        showEditor={showEditor}
                        deleteCourse={deleteCourse}
                        saveCourse={saveCourse}/>
        }
    </div>

export default CourseGridComponent
