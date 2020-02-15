let initialState = {
    widgets :
        [
            {_id: "123", title: "Widget 1-jQuery"},
            {_id: "234", title: "Widget 2-React"},
            {_id: "345", title: "Widget 3-Redux"},
            {_id: "456", title: "Widget 4-Native"},
            {_id: "678", title: "Widget 5-Angular"},
            {_id: "789", title: "Widget 6-Node"},
            {_id: "890", title: "Widget 7-Mongo"}
        ]
}

 const widgetReducer = (state = initialState, action) => {
//const widgetReducer = (state = {widgets:[]}, action) => {
    switch (action.type) {
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case 'FIND_WIDGETS_FOR_TOPIC':
            return {
                widgets: action.widgets
            }
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget =>
                    widget._id === action.widgetId ? action.widget : widget
                )
            }
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => (
                    widget._id !== action.widgetId
                ))
            }
        default:
            return state
    }
}

export default widgetReducer