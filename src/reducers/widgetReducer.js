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