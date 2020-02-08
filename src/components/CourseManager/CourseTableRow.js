import React from "react";
import {Link} from "react-router-dom";

class CourseTableRow extends React.Component {
    state = {
        editing: false,
        updatedCourseTitle: ''
    }

    render() {
        return(
            <tr className="wbdv-row">
            <td>
                {!this.state.editing &&
                    <Link to="/course-editor/xyz">
                        {this.props.course.title}
                    </Link>
                }
                {this.state.editing && <input
                    id='courseEditInput'>
                </input>}
            </td>
            <td>me
            </td>
            <td>{this.props.course.time}
            </td>
            <td> {
                <>
                <a onClick={() => {
                    this.setState({editing:true})
                    this.setState({updatedCourseTitle: this.props.course.title})
                    console.log('editing initialized to: ' + this.state.updatedCourseTitle)
                }}>
                    <i className="fas fa-edit fa-2x"></i>
                </a>
                <a onClick={() => this.props.deleteCourse(this.props.course)}>
                    <i className="fas fa-trash fa-2x"></i>
                </a>
                <a onClick={() => {
                    this.state.updatedCourseTitle = document.getElementById('courseEditInput').value
                    // this.props.course.title = this.state.updatedCourseTitle

                    this.props.saveCourse(this.props.course, this.state.updatedCourseTitle)
                    this.setState({editing: false})
                }}>
                    <i className="fas fa-check-circle fa-2x"></i>
                </a>
                </>
            }
            </td>
            </tr>
        )
    }
}

export default CourseTableRow

// <span className="float-right">
//     <a>
//     <i classNmae="fa fa-pencil"></i>
// </a>
//
// <a>
// <i className="fa fa-trash"></i>
// </a>
// </span>