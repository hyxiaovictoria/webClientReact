import React from "react";
import CourseRow from "../CourseEditor/CourseRow";
import CourseTableRow from "../CourseEditor/CourseTableRow"
import '../../containers/CourseManagerContainer.css'

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