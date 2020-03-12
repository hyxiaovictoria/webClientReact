import {WIDGETS_API_URL, TOPICS_WIDGETS_API_URL} from "../constants";

// topicId is not needed as input since widget contains that
export const createWidget = (topicId, widget) =>
    fetch(TOPICS_WIDGETS_API_URL(topicId), {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        // .then(() => findWidgetsForTopic())
        // .then(response => response.json())
        // .then(response => console.log('After creating a new widget: ' + response))

export const findWidgetsForTopic = topicId =>
    fetch(TOPICS_WIDGETS_API_URL(topicId))
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch(WIDGETS_API_URL)
        .then(response => response.json())
        // .then(response => JSON.stringify(response))
        // .then((response) => console.log('findAllWidgets' + JSON.stringify(response)))

// widgetId is not needed as input since widget contains that
export const updateWidget = widget =>
    fetch(`${WIDGETS_API_URL}/${widget.id}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteWidget = widgetId =>
    fetch(`${WIDGETS_API_URL}/${widgetId}`, {
        method: 'DELETE'
    }).then(response =>response.json())