import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse} from "../services/CourseService";
import './CourseManagerContainer.css'

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: 'whatever',
        courses: []
    }

    componentDidMount = async () => {
        const courses = await findAllCourses()
        this.setState({
                courses: courses
            })
    }

    toggle = () => {
        this.setState(prevState => {
            if(prevState.layout === 'table') {
                return ({layout: 'grid'})
            } else {
                return ({layout: 'table'})
            }
        })
    }

    deleteCourse = (course) => {
        console.log('delete course:' + course)
        deleteCourse(course._id).then(status => {
            this.setState(prevState => {
                return ({
                    courses: prevState
                        .courses
                        .filter(function(crs) {
                            return crs._id !== course._id
                        })
                })
            })
        })
    }

    saveCourse = (course, newTitle) => {
        //course.title = newTitle
        console.log('save course' + course.title)
        // deleteCourse(course._id).then(status => {
        //     this.setState(prevState => {
        //         return ({
        //             courses: prevState
        //                 .courses
        //                 .filter(function(crs) {
        //                     return crs._id !== course._id
        //                 })
        //         })
        //     })
        // })
    }

    addCourse = (course) => {
        createCourse({
            title: this.state.newCourseTitle
        }).then(actualCourse => this.setState(prevState => {
            return ({
                courses: [
                    ...prevState.courses,
                    actualCourse
                ]
            })
        }))
    }

    showEditor = () => {
        this.setState({
            showEditor: true
        })
    }

    hideEditor = () => {
        this.setState({
            showEditor: false
        })
    }

    updateForm = (newState) => {
        this.setState(newState)
    }

    render() {
        return(
            <div>
                <div>
                    <form className="form-horizontal">
                        <div className="form-group row" style={{backgroundColor:"royalblue"}}>
                            <i className="fas fa-bars fa-2x fa-inverse col-sm-1"></i>
                            <a onClick={this.toggle}>
                                <label className="wbdv-label wbdv-course-manager">
                                    Course Manager</label>
                            </a>
                            <input type="text" className="wbdv-field wbdv-new-course form-control col-sm-6" id="email3"
                                   placeholder="New Course Title"
                                   onChange={(e) =>
                                       this.updateForm({
                                           newCourseTitle: e.target.value
                                       })}
                                   value={this.state.newCourseTitle}/>
                            <a onClick={this.addCourse}>
                        <span className="wbdv-button wbdv-add-course fa-stack fa-1x wd-bottom-right col-sm-1">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                        </span>
                            </a>
                        </div>
                    </form>
                </div>

                {
                    this.state.showEditor &&
                    <CourseEditorComponent hideEditor={this.hideEditor}/>
                }

                {
                    !this.state.showEditor &&
                    <div>
                        {
                            this.state.layout === 'table' &&
                            <CourseTableComponent
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}
                                saveCourse={this.saveCourse}
                                courses={this.state.courses}/>
                        }
                        {
                            this.state.layout === 'grid' &&
                            <CourseGridComponent courses={this.state.courses}/>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default CourseManagerContainer;