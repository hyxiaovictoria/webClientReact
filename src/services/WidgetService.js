import {WIDGETS_API_URL, TOPICS_WIDGETS_API_URL} from "../constants";

export const findAllWidgets = () =>
    fetch(WIDGETS_API_URL)
        .then(response => response.json())

export const createWidget = (topicId, widget) =>
    fetch(TOPICS_WIDGETS_API_URL(topicId), {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export const findWidgetsForTopic = (topicId) =>
    fetch(TOPICS_WIDGETS_API_URL(topicId))
        .then(response => response.json())

//
// export const updateTopic = async (topic) => {
//     const response = await fetch(`${TOPICS_API_URL}/${topic._id}`, {
//         method: 'PUT',
//         body: JSON.stringify(topic),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
//     return await response.json()
// }
//
// export const deleteTopic = (topicId) =>
//     fetch(`${TOPICS_API_URL}/${topicId}`, {
//         method: 'DELETE'
//     }).then(response =>response.json())