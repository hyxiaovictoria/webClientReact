import React from "react";
import {Link} from "react-router-dom";

class CourseTableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        updatedCourseTitle: ''
    }

    updateForm = (e) => {
        this.setState({updatedCourseTitle: e.target.value})
    }

    render() {
        return(
            <div className={`row wbdv-row ${this.props.active || this.state.editing ? 'selected':''}`}
                 onClick={() => {
                     this.props.selectCourse(this.props.course._id)
                     this.setState({activeCourseId: this.props.course._id});
                 }
                 }
            >
                <div className="col-sm-9 col-md-7 col-lg-6 col-9">
                    {!this.state.editing &&
                    <Link to={`/course-editor/${this.props.course._id}`}>
                        {this.props.course.title}
                    </Link>
                    }
                    {this.state.editing && <input
                        className="col-10"
                        id='courseEditInput'
                        onChange={this.updateForm}
                        value={this.state.updatedCourseTitle}>
                    </input>}
                </div>

                <div className="col-md-3 col-lg-2 col-2 d-none d-sm-none d-md-block">
                    Me
                </div>

                <div className="col-lg-2 col-2 d-none d-md-none d-lg-block">
                    {this.props.course.time}
                </div>

                <div className="col-sm-3 col-md-2 col-lg-2 col-3 float-right">
                    {
                        <div>
                            {!this.state.editing &&
                            <a onClick={() => {
                                this.setState({editing: true})
                                this.setState({updatedCourseTitle: this.props.course.title})
                            }}>
                                <i className="fas fa-edit fa-2x"></i>
                            </a>
                            }
                            {this.state.editing &&
                            <div>
                                <a onClick={() => {
                                    this.props.deleteCourse(this.props.course)
                                }}
                                >
                                    <i className="fas fa-trash fa-2x"></i>
                                </a>
                                <a onClick={() => {
                                    this.state.updatedCourseTitle = document.getElementById('courseEditInput').value
                                    this.props.saveCourse(this.props.course, this.state.updatedCourseTitle)
                                    this.setState({editing: false})
                                }}>
                                    <i className="fas fa-check-circle fa-2x"></i>
                                </a>
                            </div>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default CourseTableRow
