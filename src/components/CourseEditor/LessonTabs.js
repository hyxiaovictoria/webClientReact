import React from "react";
import {connect} from "react-redux";
import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../../constants";
import {findLessonsForModule, createLesson, updateLesson, deleteLesson} from "../../services/LessonService";
import {findCourseById} from "../../services/CourseService";

class LessonTabs extends React.Component {
    componentDidMount() {
        if (typeof (this.props.moduleId) != "undefined")
            this.props.findLessonsForModule(this.props.moduleId);

        findCourseById(this.props.courseId)
            .then(course => this.setState({course: course}));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }

    state = {
        newLessonTitle: '',
        selectedLessonId: '',
        editingLessonId: '',
        lesson: {
            title: '',
            _id: ''
        },
        course: ''
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row course-manager-header-row">
                    <div className="col-sm-4 col-md-4 col-lg-3">
                        <span
                            onClick={() => this.props.history.push("/")}
                            className="wbdv-course-editor wbdv-close">
                            <i className="course-manager-header-row black fa fa-times fa-2x fa-inverse"/>
                        </span>
                        <span className="course-editor-header-title">
                            {this.state.course === undefined ? "" : this.state.course["title"]}
                        </span>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-7">
                    <ul className="nav nav-tabs wbdv-page-tab">
                        {this.props.lessons.map(lesson =>
                            <li onClick={() => {
                                this.props.history.push(
                                    `/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`)
                                this.setState({
                                    activeLessonId: lesson._id
                                })
                            }
                            }
                                key={lesson._id} className="nav-item">
                                {this.state.editingLessonId !== lesson._id
                                &&
                                <span className="wbdv-black">{lesson.title}</span>
                                }

                                {this.state.editingLessonId === lesson._id
                                &&
                                <input
                                    onChange={(e) => {
                                        const newTitle = e.target.value
                                        this.setState(prevState => ({
                                            lesson: {
                                                ...prevState.lesson,
                                                title: newTitle
                                            }
                                        }))
                                    }}
                                    value={this.state.lesson.title}/>
                                }

                                {this.state.editingLessonId !== lesson._id
                                &&
                                <a onClick={() => {
                                    this.setState({
                                        lesson: lesson,
                                        editingLessonId: lesson._id
                                    })
                                }}>
                                    <i className="fas fa-edit"></i>
                                </a>
                                }

                                {this.state.editingLessonId === lesson._id
                                &&
                                <a onClick={
                                    () => this.props.deleteLesson(lesson._id)}>
                                    <i className="fas fa-trash"></i>
                                </a>
                                }
                                {this.state.editingLessonId === lesson._id
                                &&
                                <a onClick={() => {
                                    lesson.title = this.state.lesson.title;
                                    this.props.updateLesson(this.state.lesson)
                                        .then(() =>
                                            this.setState({
                                                editingLessonId: ''
                                            })
                                        )
                                }
                                }>
                                    <i className="fas fa-check-circle"></i>
                                </a>
                                }
                                &emsp;&emsp;
                            </li>
                        )}
                    </ul>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <input
                            type="text"
                            placeholder="New Lesson Title"
                            onChange={e => {
                                this.setState({newLessonTitle: e.target.value})
                            }}
                            value={this.state.newLessonTitle}
                        />
                        <a className="wbdv-new-page-btn col-sm-1"
                           onClick={() => {
                               const lesson = {
                                   title: this.state.newLessonTitle
                               }
                               this.props.addLesson(this.props.moduleId, lesson)
                           }
                           }>
                            <i className="fa fa-plus fa-2x fa-inverse"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    lessons: state.lessons.lessons
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findLessonsForModule: moduleId =>
        fetch(MODULES_LESSONS_API_URL(moduleId))
            .then(response => response.json())
            .then(lessons => dispatcher({
                type: 'FIND_LESSONS_FOR_MODULE',
                lessons: lessons
            })),
    updateLesson: async (lesson) => {
        const actualLesson = await updateLesson(lesson);
        dispatcher({
            type: 'UPDATE_LESSON',
            lesson: actualLesson,
            lessonId: actualLesson._id
        })
    },
    addLesson: async (moduleId, lesson) => {
        const newLesson = await createLesson(moduleId, lesson);
        dispatcher({
            type: 'CREATE_LESSON',
            lesson: newLesson,
            lessonId: newLesson._id
        })
    },
    deleteLesson: (lessonId) =>
        fetch(`${LESSONS_API_URL}/${lessonId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status =>
                dispatcher({
                    type: 'DELETE_LESSON',
                    lessonId: lessonId
                })),
    findAllLessons: () =>
        fetch(LESSONS_API_URL)
            .then(response => response.json())
            .then(lessons =>
                dispatcher({
                    type: 'FIND_ALL_LESSONS',
                    lessons: lessons
                })
            )
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(LessonTabs)
