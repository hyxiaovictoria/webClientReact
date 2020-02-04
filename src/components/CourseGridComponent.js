import React from "react";
import CourseTableRow from "./CourseEditor/CourseTableRow";

const CourseGridComponent = ({courses, deleteCourse, saveCourse, showEditor}) =>
    <div className="row row-narrow"  style={{marginLeft:'150px',marginRight:'150px'}}>
        <h1> Course Grid Component</h1>
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
            courses.map(function (course, index) {
                return (
                    <CourseTableRow
                        course={course}
                        showEditor={showEditor}
                        deleteCourse={deleteCourse}
                        saveCourse={saveCourse}/>
                )
            })
        }
    </div>

export default CourseGridComponent