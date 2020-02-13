import React from "react";
import {connect} from "react-redux";
import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../../constants";
import {findLessonsForModule, createLesson, updateLesson, deleteLesson} from "../../services/LessonService";

class LessonTabs extends React.Component {

    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }

    state = {
        selectedLessonId: '',
        editingLessonId: '',
        lesson: {
            title: '',
            _id: ''
        }
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a onClick={this.props.hideEditor}
                       className="wbdv-course-editor wbdv-close col-sm-1"
                       href="/">
                        <i className="fa fa-times fa-2x fa-inverse"></i>
                    </a>
                    <h4 className="wbdv-course-title col-sm-3">CS5610-WebDev</h4>
                    <ul className="nav nav-tabs wbdv-page-tab col-sm-6">
                        {this.props.lessons.map(lesson =>
                            <li key={lesson._id} className="nav-item">
                                {this.state.editingLessonId !== lesson._id
                                    &&
                                    <span className="wbdv-white">{lesson.title}</span>
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
                                        this.props.updateLesson(this.state.lesson)
                                            .then(() =>
                                                this.setState({
                                                    editingLessonId: ''
                                                })
                                            )
                                        console.log('Updated lesson title: ' + this.state.lesson.title)
                                    }
                                    }>
                                        <i className="fas fa-check-circle"></i>
                                    </a>
                                }
                                &emsp;&emsp;
                            </li>
                        )}
                    </ul>
                    <a className="wbdv-new-page-btn col-sm-1"
                        onClick={() => this.props.addLesson(this.props.moduleId)}>
                        <i className="fa fa-plus fa-2x fa-inverse"></i>
                    </a>
                </nav>
            </div>
        )
    }

    // render() {
    //     return(
    //         <ul className="nav nav-tabs">
    //             {
    //                 this.props.lessons && this.props.lessons.map(lesson =>
    //                     <li className={`nav-item`}
    //                         onClick={() => this.setState({
    //                             selectedLessonId: lesson._id
    //                         })}
    //                         key={lesson._id}>
    //                         <a className={`nav-link
    //                                         ${(this.state.editingLessonId === lesson._id || this.state.selectedLessonId === lesson._id)?'active':''}`}>
    //                             {this.state.editingLessonId !== lesson._id &&
    //                             <span>{lesson.title}</span>}
    //                             {this.state.editingLessonId === lesson._id &&
    //                             <input
    //                                 onChange={(e) => {
    //                                     const newTitle = e.target.value
    //                                     this.setState(prevState => ({
    //                                         lesson: {
    //                                             ...prevState.lesson,
    //                                             title: newTitle
    //                                         }
    //                                     }))
    //                                 }}
    //                                 value={this.state.lesson.title}/>}
    //                             <button onClick={() =>
    //                             {
    //                                 this.props.updateLesson(this.state.lesson)
    //                                     .then(() =>
    //                                         this.setState({
    //                                             editingLessonId: ''
    //                                         })
    //                                     )
    //                             }
    //                             }>
    //                                 Save
    //                             </button>
    //                             <button onClick={
    //                                 () => this.props.deleteLesson(lesson._id)}>
    //                                 X
    //                             </button>
    //                             <button onClick={() => {
    //                                 this.setState({
    //                                     lesson: lesson,
    //                                     editingLessonId: lesson._id
    //                                 })
    //                             }}>
    //                                 Edit
    //                             </button>
    //                         </a>
    //                     </li>)
    //             }
    //             <li className="nav-item">
    //                 <button onClick={() => this.props.addLesson(this.props.moduleId)}>+</button>
    //             </li>
    //         </ul>
    //     )
    // }
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
        const actualLesson = await updateLesson(lesson)
        dispatcher({
            type: 'UPDATE_LESSON',
            lesson: actualLesson,
            lessonId: actualLesson._id
        })
    },
    addLesson: async (moduleId) => {
        const newLesson = await createLesson(moduleId,
            {title: 'New lesson',
                    _id: new Date().getTime()})
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
