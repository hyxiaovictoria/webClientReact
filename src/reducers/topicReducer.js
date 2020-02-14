const topicReducer = (state = {topics: []}, action) => {
    switch (action.type) {
        case 'CREATE_TOPIC':
            return {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case 'DELETE_TOPIC':
            return {
                topics: state.topics.filter(
                    topic => topic._id !== action.topicId)
            }
        case 'UPDATE_TOPIC':
            return {
                topics: state.topics.map(topic =>
                    topic._id === action.topicId ? action.topic : topic
                )
            }
        case 'FIND_TOPICS_FOR_LESSON':
            return {
                topics: action.topics
            }
        case 'FIND_ALL_LESSONS':
            return {
                topics: action.topics
            }
        default:
            return state
    }
}

export default topicReducer