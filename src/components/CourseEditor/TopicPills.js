import React from "react";
import {connect} from "react-redux";
import "./CourseEditorComponent.css"
import {findTopicsForLesson, createTopic, updateTopic, deleteTopic} from "../../services/TopicService";
import {LESSONS_API_URL, LESSONS_TOPICS_API_URL} from "../../constants";
import {createLesson, updateLesson} from "../../services/LessonService";


class TopicPills extends React.Component {

    componentDidMount() {
        if (typeof(this.props.lessonId) != 'undefined')
            this.props.findTopicsForLesson(this.props.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('this.props.lessonId' + this.props.lessonId)
        console.log('prevProps.lessonId' + prevProps.lessonId)

        if(this.props.lessonId !== prevProps.lessonId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }

    state = {
        newTopicTitle: '',
        selectedTopicId: '',
        editingTopicId: '',
        topic: {
            title: '',
            _id: ''
        }
    }


    render() {
        return (
            <div className="form-row">
                <ul className="nav nav-pills wbdv-topic-pill-list">
                    {this.props.topics.map(topic =>
                        <li key={topic._id}
                            onClick={() => this.props.history.push(
                                `/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`)}
                            className="nav-item wbdv-topic-pill">
                            <a className="nav-link wbdv-white">{topic.title}</a>
                        </li>
                    )}
                    <input
                        onChange={e => {this.setState({newTopicTitle: e.target.value})}}
                        // value={module.title}
                    >
                    </input>
                    <li className="nav-item wbdv-topic-pill">
                        <a className="nav-link wbdv-white"
                        onClick={() => {
                            const lesson = {
                                title: this.state.newTopicTitle,
                                _id: new Date().getTime()
                            }
                            this.props.createTopic(this.props.lessonId, lesson)
                        }
                        }>
                            <i className="fa fa-plus fa-1x"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    topics: state.topics.topics
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findTopicsForLesson: lessonId =>
        fetch(LESSONS_TOPICS_API_URL(lessonId))
            .then(response => response.json())
            .then(topics => dispatcher({
                type: 'FIND_TOPICS_FOR_LESSON',
                topics: topics
            })),
    // updateLesson: async (lesson) => {
    //     const actualLesson = await updateLesson(lesson)
    //     dispatcher({
    //         type: 'UPDATE_LESSON',
    //         lesson: actualLesson,
    //         lessonId: actualLesson._id
    //     })
    // },
    createTopic: async (lessonId, topic) => {
        const newTopic = await createTopic(lessonId,topic)
        dispatcher({
            type: 'CREATE_TOPIC',
            topic: newTopic,
            topicId: newTopic.id
        })
    }//,
    // deleteLesson: (lessonId) =>
    //     fetch(`${LESSONS_API_URL}/${lessonId}`, {
    //         method: 'DELETE'
    //     }).then(response => response.json())
    //         .then(status =>
    //             dispatcher({
    //                 type: 'DELETE_LESSON',
    //                 lessonId: lessonId
    //             })),
    // findAllLessons: () =>
    //     fetch(LESSONS_API_URL)
    //         .then(response => response.json())
    //         .then(lessons =>
    //             dispatcher({
    //                 type: 'FIND_ALL_LESSONS',
    //                 lessons: lessons
    //             })
    //         )
})

export default connect (
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(TopicPills)