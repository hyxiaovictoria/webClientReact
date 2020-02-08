import React from "react";
import CourseTableComponent from "../components/CourseManager/CourseTableComponent";
import CourseGridComponent from "../components/CourseManager/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse, updateCourse} from "../services/CourseService";
import './WhiteBoardContainer.css'
import CourseManagerComponent from "../components/CourseManager/CourseManagerComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

class WhiteBoardContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: 'New Course',
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
        course.title = newTitle
        console.log('save course ' + course.title)
        updateCourse(course._id, course).then(status => {
        })
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
        let curT = new Date()
        let curTime = (curT.getMonth() + 1) + '/' + curT.getDate() + '/' + curT.getFullYear()
                    + ' ' + curT.getHours() + ':' + curT.getMinutes() + ':' + curT.getSeconds()
        createCourse({
            title: this.state.newCourseTitle,
            time: curTime
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
        }
        )
    }

    updateForm = (newState) => {
        this.setState(newState)
    }

    render() {
        return(
            <div>
                <Router>
                    <Route
                        path="/course-editor/:courseId"
                        exact={true}
                        render={(props)=>
                            <CourseEditorComponent {...props} />
                        }
                    />
                    <Route
                        path="/"
                        exact={true}
                        render={()=>
                            <CourseManagerComponent
                                toggle={this.toggle}
                                state={this.state}
                                hideEditor={this.hideEditor}
                                updateForm={this.updateForm}
                                addCourse={this.addCourse}
                                saveCourse={this.saveCourse}
                                deleteCourse={this.deleteCourse}
                            />
                        }
                    />
                </Router>
            </div>
        )
    }
}

export default WhiteBoardContainer;