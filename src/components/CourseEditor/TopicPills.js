import React from "react";
import {connect} from "react-redux";
import "./CourseEditorComponent.css"
import {findTopicsForLesson, createTopic, updateTopic, deleteTopic} from "../../services/TopicService";
import {LESSONS_API_URL, LESSONS_TOPICS_API_URL, TOPICS_API_URL} from "../../constants";
import {createLesson, updateLesson} from "../../services/LessonService";


class TopicPills extends React.Component {

    componentDidMount() {
        if (typeof (this.props.lessonId) != 'undefined')
            this.props.findTopicsForLesson(this.props.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('this.props.lessonId' + this.props.lessonId)
        console.log('prevProps.lessonId' + prevProps.lessonId)

        if (this.props.lessonId !== prevProps.lessonId) {
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
            <div className="row course-manager-topic-row">
                <div className="col-sm-7 col-md-7 col-lg-8">
                <ul className="nav nav-pills wbdv-topic-pill-list">
                    {this.props.topics.map(topic =>
                        <li key={topic._id}
                            onClick={() => this.props.history.push(
                                `/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`)}
                            className="nav-item wbdv-topic-pill">

                            {this.state.editingTopicId !== topic._id
                            &&
                            <span className="nav-link wbdv-white">{topic.title}</span>
                            }

                            {this.state.editingTopicId === topic._id
                            &&
                            <input
                                onChange={(e) => {
                                    const newTitle = e.target.value
                                    this.setState(prevState => ({
                                        topic: {
                                            ...prevState.topic,
                                            title: newTitle
                                        }
                                    }))
                                }}
                                value={this.state.topic.title}/>
                            }
                            {this.state.editingTopicId !== topic._id
                            &&
                            <a onClick={() => {
                                this.setState({
                                    topic: topic,
                                    editingTopicId: topic._id
                                })
                            }}>
                                <i className="fas fa-edit"></i>
                            </a>
                            }


                            {this.state.editingTopicId === topic._id
                            &&
                            <a onClick={
                                () => this.props.deleteTopic(topic._id)}>
                                <i className="fas fa-trash"></i>
                            </a>
                            }
                            {this.state.editingTopicId === topic._id
                            &&
                            <a onClick={() => {
                                topic.title = this.state.topic.title;
                                this.props.updateTopic(this.state.topic)
                                    .then(() =>
                                        this.setState({
                                            editingTopicId: ''
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
                        placeholder="New Topic Title"
                        type="text"
                        onChange={e => {
                            this.setState({newTopicTitle: e.target.value})
                        }}
                        value={this.state.newTopicTitle}
                    />
                    <span className="nav-link"
                       onClick={() => {
                           const topic = {
                               title: this.state.newTopicTitle
                           }
                           this.props.createTopic(this.props.lessonId, topic);
                           this.setState({newTopicTitle: ""})
                       }
                       }>
                        <i className="wbdv-new-topic-btn fa fa-plus fa-1x"></i>
                    </span>
                </div>
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
    updateTopic: async (topic) => {
        const actualTopic = await updateTopic(topic)
        dispatcher({
            type: 'UPDATE_TOPIC',
            topic: actualTopic,
            topicId: actualTopic._id
        })
    },
    createTopic: async (lessonId, topic) => {
        const newTopic = await createTopic(lessonId, topic)
        dispatcher({
            type: 'CREATE_TOPIC',
            topic: newTopic,
            topicId: newTopic.id
        })
    },
    deleteTopic: (topicId) =>
        fetch(`${TOPICS_API_URL}/${topicId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status =>
                dispatcher({
                    type: 'DELETE_TOPIC',
                    topicId: topicId
                }))
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

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(TopicPills)
