import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/PararagraphWidget";
import {
    findAllWidgets,
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetsForTopic
} from "../../services/WidgetService";
import "../CourseEditor/CourseEditorComponent.css"

class WidgetList extends React.Component {
    state = {
        editingWidgetId: '',
        widget: {
            id: ''
        }
    }
    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId);
        }
    }

    saveWidget = (widget) => {
        this.setState({
            editingWidgetId: ''
        })
        this.props.updateWidget(widget.id, widget)
    }

    render(){
        return(
            <div>
                <div className="fa-right">
                    <button className="btn btn-primary wbdv-button wbdv-save btn-success">Save</button>
                    &nbsp;&nbsp;
                    <label className="text-black-50">Preview</label>
                    &nbsp;&nbsp;
                    <label className="switch">
                        <input type="checkbox" id="customSwitch1"/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="fa-top-margin-50px">
                {
                    this.props.widgets && this.props.widgets.map(widget =>
                        <div key={widget.id}>
                            {widget.type === "HEADING"   && <HeadingWidget   saveWidget={this.saveWidget} editing={this.state.widget.id === widget.id} {...this.props} widget={widget}/>}
                            {widget.type === "PARAGRAPH" && <ParagraphWidget updateWidget={this.updateWidget} editing={this.state.widget.id === widget.id} widget={widget}/>}
                            <span>
                                {
                                    <span>
                                        <h2>Heading widget</h2>
                                        <button>
                                             <i className="fas fa-arrow-circle-up fa-2x"></i>
                                        </button>
                                        <button>
                                            <i className="fas fa-arrow-circle-down fa-2x"></i>
                                        </button>
                                        <select onChange={(e) => {
                                            const newType = e.target.value
                                            this.setState(prevState => {
                                                this.state.widget.type = newType;
                                                return {
                                                    widget: {
                                                        ...widget, type: newType
                                                    }
                                                }})
                                            this.props.updateWidget(this.state.widget.id, this.state.widget)
                                        }}
                                                value={this.state.widget.type}>
                                            <option value="HEADING">Heading</option>
                                            <option value="PARAGRAPH">Paragraph</option>
                                            <option value="YOUTUBE">YouTube</option>
                                            <option value="HTML">HTML</option>
                                        </select>
                                            <button onClick={() => {
                                                this.props.deleteWidget(widget.id)
                                            }}>
                                            <i className="fas fa-trash fa-2x"></i>
                                        </button>

                                    </span>
                                }
                            </span>
                        </div>
                    )
                }
                </div>
                <div>
                    <button className="fa-right-only-50 fa-top-margin-20px"
                        onClick={
                            () =>
                                this.props.createWidget(this.props.topicId)}>
                            <span className="wbdv-button wbdv-add-course fa-stack fa-1x wd-bottom-right col-sm-1">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                            </span>
                    </button>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

const dispatchToPropertyMapper = (dispatcher) => ({
    findWidgetsForTopic: (topicId) =>
        findWidgetsForTopic(topicId)
            .then(widgets => dispatcher({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: widgets
            })),
    updateWidget: (widgetId, newWidget) =>
        updateWidget(widgetId, newWidget)
            .then(status => dispatcher({
                type: "UPDATE",
                widget: newWidget
            })),
    deleteWidget: (widgetId) =>
        deleteWidget(widgetId)
            .then(status => dispatcher({
                type: 'DELETE_WIDGET',
                widgetId: widgetId
            })),
    createWidget: (topicId) =>
        createWidget({
            title: "New Widget",
            type: "HEADING",
            topicId: topicId,
            id: (new Date()).getTime() + ""
        })
            .then(actualWidget => dispatcher({
                type: "ADD_WIDGET",
                widget: actualWidget
            })),
    findAllWidgets: () =>
        findAllWidgets()
            .then(actualWidgets => dispatcher({
                type: "FIND_ALL_WIDGETS",
                widgets: actualWidgets
            }))
})

export default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetList)