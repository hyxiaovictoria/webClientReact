import React from "react";
import {Link} from "react-router-dom";

export default class CourseCard extends React.Component
{
    state = {
        editing: false,
        updatedCourseTitle: ''
    }

    updateForm = (e) => {
        this.setState({updatedCourseTitle: e.target.value})
    }

    render() {
        return (
            <div className="card wbdv-card">
                <img className="card-img-top"
                     src="https://picsum.photos/250/250"/>
                <div className="card-body">
                    {!this.state.editing &&
                    <Link to={`/course-editor/${this.props.course._id}`}>
                        <h5 className="card-title">
                        {this.props.course.title}
                        </h5>
                    </Link>
                    }
                    {this.state.editing && <input
                        id='courseEditInput'
                        onChange={this.updateForm}
                        value={this.state.updatedCourseTitle}>
                    </input>}
                    <div>
                    </div>
                    <div className="row form-row">
                        <div className="col-8">
                            <p className="card-text">
                                <i className="fas fa-file-alt fa-2x"></i>
                                &nbsp;
                                Modified {this.props.course.time}
                            </p>
                        </div>
                        <div className="col-4">
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

                                    this.props.saveCourse(this.props.course, this.state.updatedCourseTitle)
                                    this.setState({editing: false})
                                }}>
                                    <i className="fas fa-check-circle fa-2x"></i>
                                </a>
                            </div>
                            }
                        </div>
                    </div>
                    {/*<a href="#" className="btn btn-primary">More...</a>*/}
                </div>
            </div>
        )
    }
}
