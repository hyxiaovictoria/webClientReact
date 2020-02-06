import React from "react"
import "./CourseEditorComponent.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"

class WidgetComponent extends React.Component {
    render() {
        return(
            <div className="wbdv-margin-top-50px">
                <div className="form-row fixed-right">
                    <button className="btn btn-primary wbdv-button wbdv-save btn-success">Save</button>
                    <label>Preview</label>
                    <label className="switch">
                        <input type="checkbox" id="customSwitch1"/>
                            <span className="slider round"></span>
                    </label>
                </div>
                <div className = "form-row">
                    <div className = "col-8">
                        <h5> Heading widget </h5>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-arrow-circle-up"></i>
                        <i className="fas fa-arrow-circle-down"></i>
                    </div>
                </div>

                <div className="form-row">
                    <input className="form-control wbdv-width-100"
                           type="text"
                           placeholder="Heading text"/>
                </div>
                <div className="form-row">
                    <select id="inputState" className="form-control wbdv-width-100">
                        <option selected>Heading 1</option>
                        <option>Heading 2</option>
                        <option>Heading 3</option>
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
            </div>)
    }
}

export default WidgetComponent