import React from "react";
import {Link} from "react-router-dom";

class CourseTableRow extends React.Component {
    state = {
        editing: false,
        updatedCourseTitle: ''
    }

    updateForm = (e) => {
        this.setState({updatedCourseTitle: e.target.value})
    }

    render() {
        return(
            <tr className={`wbdv-row ${this.props.active || this.state.editing ? 'selected':''}`}
                onClick={() => {
                    this.props.selectCourse(this.props.course._id)
                this.setState({activeCourseId: this.props.course._id});
                console.log("Current active course id: " + this.props.activeCourseId)
            }
            }>
            <td>
                {!this.state.editing &&
                    <Link to={`/course-editor/${this.props.course._id}`}>
                        {this.props.course.title}
                    </Link>
                }
                {this.state.editing && <input
                    id='courseEditInput'
                onChange={this.updateForm}
                value={this.state.updatedCourseTitle}>
                </input>}
            </td>
            <td>me
            </td>
            <td>{this.props.course.time}
            </td>
            <td> {
                <div>
                    {!this.state.editing &&
                        <a onClick={() => {
                            this.setState({editing: true})
                            this.setState({updatedCourseTitle: this.props.course.title})
                            console.log('editing initialized to: ' + this.state.updatedCourseTitle)
                        }}>
                            <i className="fas fa-edit fa-2x"></i>
                        </a>
                    }
                    {this.state.editing &&
                        <div>
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
                        </div>
                        }
                </div>
            }
            </td>
            </tr>
        )
    }
}

export default CourseTableRow
