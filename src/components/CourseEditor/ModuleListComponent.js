import React from "react";
import "./CourseEditorComponent.css"

const ModuleListComponent = ({modules}) =>
    <div>
    <div className = "bg-dark" >
        <div className = "list-group wbdv-module-list" style={{margin:"20px"}}>
            <a href = "#" className = "list-group-item wbdv-module-item" style={{margin:"5px"}} >
                <h6 className = "wbdv-module-item-title" > Module 1 - jQuery </h6>
                <i className="fa fa-times fa-right wbdv-module-item-delete-btn"></i>
            </a>
            <a href="#" className="list-group-item wbdv-module-item active wbdv-selected" style={{margin:"5px"}}>
                <h6 className="wbdv-module-item-title">Module 2 - React</h6>
                <i className="fa fa-times fa-right wbdv-module-item-delete-btn"></i>
            </a>
        </div>
    </div>
        <ul>
            {modules.map(module =>
                <li key={module._id}>
                    {module.title}
                </li>
            )}
        </ul>
    </div>

export default ModuleListComponent