import React from "react";
import CourseRow from "./CourseEditor/CourseRow";
import CourseTableRow from "./CourseEditor/CourseTableRow"
import '../containers/CourseManagerContainer.css'

const CourseTableComponent = ({courses, deleteCourse, saveCourse, showEditor}) =>
    <div className="row row-narrow"  style={{marginLeft:'150px',marginRight:'150px'}}>
        <table className="table">
            <thead>
            <tr className="wbdv-header">
                <th className="wbdv-title">
                    Title
                </th>
                <th className="wbdv-owner">Owned by
                    <i className="wbdv-header wbdv-sort fas fa-caret-down"></i>
                </th>
                <th className="wbdv-last-modified">Last modified by me
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <i className="wbdv-header wbdv-sort fas fa-grip-horizontal"></i>
                    &nbsp;&nbsp;&nbsp;
                    <i className="wbdv-button wbdv-list-layout fas fa-sort-alpha-down"></i>
                </th>
                <th>
                    &nbsp;
                </th>
            </tr>
            </thead>
            <tbody>
            <tr className="wbdv-row">
                <td>
                    <i className="wbdv-icon fa fa-file-text" aria-hidden="true"></i>
                    <a className="wbdv-title" href="../course-editor/course-editor.template.client.html">
                        CS5500 Software Engineering Graduate
                    </a>
                </td>
                <td className="wbdv-owner">me</td>
                <td className="wbdv-modified-date">6:45 PM</td>
                <td>
                    <i className="wbdv-button wbdv-delete fa fa-times" aria-hidden="true"></i>
                </td>
            </tr>
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
    </tbody>
</table>
</div>

export default CourseTableComponent