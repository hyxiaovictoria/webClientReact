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
        newWidgetType: 'HEADING',
        newWidgetSize: 1,
        newWidgetText: 'Widget text',
        newWidgetName: 'Widget name',
        editingWidgetId: '',
        widget: {
            id: ''
        }
    }
    componentDidMount() {
        // this.props.findWidgetsForTopic(this.props.topicId)
        this.props.findWidgetsForTopic('222')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId);
            console.log('YH_WidgetList_widgets: ' + JSON.stringify(this.props.widgets))
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
                <div className="float-right">
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
                            <span>
                                <h3>Heading widget</h3>
                            </span>
                            <span>
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
                            {widget.type === "HEADING"   && <HeadingWidget   saveWidget={this.saveWidget} editing={true} {...this.props} widget={widget}/>}
                            {widget.type === "PARAGRAPH" && <ParagraphWidget updateWidget={this.updateWidget} editing={this.state.widget.id === widget.id} widget={widget}/>}
                        </div>
                    )
                }
                </div>
                <div className="row fa-top-margin-rel-100px">
                    <div className="col-6">
                        {this.state.newWidgetType === 'HEADING' && <h3>Heading widget</h3>}
                        {this.state.newWidgetType === 'PARAGRAPH' && <h3>Paragraph widget</h3>}
                        {this.state.newWidgetType === 'YOUTUBE' && <h3>Youtube widget</h3>}
                        {this.state.newWidgetType === 'HTML' && <h3>HTML widget</h3>}
                    </div>
                    <div className="col-6">
                        <select onChange={(e) => {
                            this.setState({newWidgetType: e.target.value})
                        }}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="YOUTUBE">YouTube</option>
                            <option value="HTML">HTML</option>
                        </select>
                    </div>
                </div>
                <div>
                    <input className="row"
                            type="text"
                           onChange={e => this.setState({newWidgetText: e.target.value})
                           }
                           value={this.state.newWidgetText}/>
                    <select onChange={e => {this.setState({newWidgetSize: e.target.value})}}>
                        <option value='1'>Size 1</option>
                        <option value='2'>Size 2</option>
                        <option value='3'>Size 3</option>
                        <option value='4'>Size 4</option>
                        <option value='5'>Size 5</option>
                        <option value='6'>Size 6</option>
                    </select>
                    <input className="row"
                            type="text"
                           onChange={e => this.setState({newWidgetName: e.target.value})
                           }
                           value={this.state.newWidgetName}/>
                </div>
                <div>
                    <button className="fa-right-only-50 fa-top-margin-20px"
                        // onClick={
                        //     () => {
                        //         const newWidget = {
                        //             id: (new Date()).getTime() + "",
                        //             text: this.state.newWidgetText,
                        //             type: this.state.newWidgetType,
                        //             topicId: this.props.topicId,
                        //             size: this.state.newWidgetSize
                        //         }
                        //         console.log('YH_WidgetList_click_Add: ' + JSON.stringify(newWidget))
                        //         this.props.createWidget(this.props.topicId, newWidget)
                        //     }
                        // }
                    >
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
    createWidget: (topicId, widget) =>
        // createWidget({
        //     title: "New Widget",
        //     type: "HEADING",
        //     topicId: topicId,
        //     id: (new Date()).getTime() + ""
        // })
        createWidget(topicId, widget)
            .then(widget => dispatcher({
                type: "CREATE_WIDGET",
                widget: widget
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