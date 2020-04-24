import React from "react";
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

    getCurrentTime = () => {
        let curT = new Date();
        let curTime = (curT.getMonth() + 1) + '/' + curT.getDate() + '/' + curT.getFullYear()
            + ' ' + curT.getHours() + ':' + curT.getMinutes() + ':' + curT.getSeconds();

        return curTime;
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

    deleteCourse = async (courseToDelete) => {
        const status = await deleteCourse(courseToDelete._id)
        const courses = await findAllCourses()
        this.setState({courses: courses});
    }

    saveCourse = (course, newTitle) => {
        course.title = newTitle;
        course.time = this.getCurrentTime();
        updateCourse(course._id, course).then(status => {
        })
    }

    addCourse = () => {

        createCourse({
            title: this.state.newCourseTitle,
            time: this.getCurrentTime()
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
                            <CourseEditorComponent
                                {...props}
                                courseId={props.match.params.courseId}
                                hideEditor={this.hideEditor}
                            />
                        }
                    />
                    <Route
                        path="/course-editor/:courseId/module/:moduleId"
                        exact={true}
                        render={(props)=>
                            <CourseEditorComponent
                                {...props}
                                courseId={props.match.params.courseId}
                                moduleId={props.match.params.moduleId}
                                hideEditor={this.hideEditor}
                            />
                        }
                    />
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                        exact={true}
                        render={(props)=>
                            <CourseEditorComponent
                                {...props}
                                courseId={props.match.params.courseId}
                                moduleId={props.match.params.moduleId}
                                lessonId={props.match.params.lessonId}
                                hideEditor={this.hideEditor}
                            />
                        }
                    />
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                        exact={true}
                        render={(props)=>
                            <CourseEditorComponent
                                {...props}
                                courseId={props.match.params.courseId}
                                moduleId={props.match.params.moduleId}
                                lessonId={props.match.params.lessonId}
                                topicId={props.match.params.topicId}
                                hideEditor={this.hideEditor}
                            />
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
