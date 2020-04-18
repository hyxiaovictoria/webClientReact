import React from "react";
import CourseTableRow from "./CourseTableRow"
import '../../containers/WhiteBoardContainer.css'

class CourseTableComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        activeCourseId: ''
    }

    render() {
        return(
        <div className="row row-narrow" style={{marginLeft: '150px', marginRight: '150px'}}>
            <table className="table">
                <thead>
                <tr className="wbdv-header">
                    <th className="wbdv-title bg-warning">
                        Title (click below link to Course Editor)
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
                    this.props.courses.map(
                        course =>
                            <CourseTableRow
                                key={course._id}
                                course={course}
                                active={course._id === this.state.activeCourseId}
                                selectCourse={() => this.setState({activeCourseId: course._id})}
                                deleteCourse={() => this.props.deleteCourse}
                                saveCourse={() => this.props.saveCourse}
                            />
                    )
                }
                </tbody>
            </table>
        </div>)
    }
}

export default CourseTableComponent
