import React from "react";
import CourseTableComponent from "../components/WhiteBoard/CourseTableComponent";
import CourseGridComponent from "../components/WhiteBoard/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse} from "../services/CourseService";
import './CourseManagerContainer.css'
import CourseTableRow from "../components/CourseEditor/CourseTableRow";
import CourseManagerComponent from "../components/CourseEditor/CourseManagerComponent";

class CourseManagerContainer extends React.Component {
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
                {
                    this.state.showEditor &&
                    <CourseEditorComponent hideEditor={this.hideEditor}/>
                }

                {
                    !this.state.showEditor &&
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
            </div>
        )
    }
}

export default CourseManagerContainer;