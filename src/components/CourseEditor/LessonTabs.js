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
                <div className="row course-manager-lesson-row">
                    <div className="col-sm-7 col-md-7 col-lg-8">
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

                    <div className="col-sm-5 col-md-5 col-lg-4">
                        <input
                            className="wbdv-new-lesson-btn"
                            type="text"
                            placeholder="New Lesson Title"
                            onChange={e => {
                                this.setState({newLessonTitle: e.target.value})
                            }}
                            value={this.state.newLessonTitle}
                        />
                        &emsp;
                        <span
                            onClick={() => {
                                const lesson = {
                                    title: this.state.newLessonTitle
                                }
                                this.props.addLesson(this.props.moduleId, lesson)
                            }
                            }>
                            <i className="wbdv-new-lesson-btn fa fa-plus fa-2x fa-inverse"></i>
                        </span>
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
