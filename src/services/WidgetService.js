import {WIDGETS_API_URL, TOPICS_WIDGETS_API_URL} from "../constants";

// topicId is not needed as input since widget contains that
export const createWidget = widget =>
    fetch(WIDGETS_API_URL, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findWidgetsForTopic = topicId =>
    fetch(TOPICS_WIDGETS_API_URL(topicId))
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch(WIDGETS_API_URL)
        .then(response => response.json())

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