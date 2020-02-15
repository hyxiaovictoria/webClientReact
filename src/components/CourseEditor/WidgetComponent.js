import React from "react"
import "./CourseEditorComponent.css"
import {connect} from "react-redux";

class WidgetComponent extends React.Component {
    componentDidMount() {
        console.log(this.constructor.name + ' : componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.constructor.name + ' : componentDidUpdate')
        // if(this.props.widgetId !== prevProps.widgetId) {
        //     this.props.findTopicsForLesson(this.props.lessonId)
        // }
    }

    render() {
        return(
            <div className="wbdv-margin-top-50px">
                <div className="form-row">
                    <ul className="nav nav-pills wbdv-topic-pill-list">
                        {this.props.widgets.map(widget =>
                            <li key={widget._id}
                                className="nav-item wbdv-topic-pill">
                                <a className="nav-link wbdv-white" href="#">{widget.title}</a>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="form-row fixed-right">
                    <div className ="fa-right-only">
                    <button className="btn btn-primary wbdv-button wbdv-save btn-success">Save</button>
                    <label>Preview</label>
                    <label className="switch">
                        <input type="checkbox" id="customSwitch1"/>
                            <span className="slider round"></span>
                    </label>
                    </div>
                </div>
                <div className = "form-row wbdv-margin-top-50px">
                    <div className = "col-8">
                        <h1> Heading widget </h1>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-arrow-circle-up fa-2x"></i>
                        &nbsp;&nbsp;
                        <i className="fas fa-arrow-circle-down fa-2x"></i>
                    </div>
                </div>

                <div className="form-row">
                    <input className="form-control wbdv-width-100"
                           type="text"
                           placeholder="Heading text"/>
                </div>
                <div className="form-row">
                    <select id="inputState" className="form-control wbdv-width-100" defaultValue="v2">
                        <option value="v1">Heading 1</option>
                        <option value="v2">Heading 2</option>
                        <option value="v3">Heading 3</option>
                    </select>
                </div>
                <div className="form-row">
                    <input className="form-control wbdv-width-100"
                           type="text"
                           placeholder="Widget name"/>
                </div>
                <h5>Preview</h5>
                <h3>Heading text</h3>

                <div className="form-row">
                    <i className="fas fa-square fa-stack-2x bg-red"/>
                    <i className="fas fa-plus fa-stack-1x fa-inverse"/>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

export default connect (
    stateToPropertyMapper
)(WidgetComponent)