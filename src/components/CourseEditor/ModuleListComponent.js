import React from "react";
import "./CourseEditorComponent.css"

const ModuleListComponent = ({modules}) =>
    <div>
    <ul className="bg-dark list-group wbdv-module-list">
        {modules.map(module =>
            <li key={module._id}
                className="wbdv-module-item">
                <span>
                    <span className="wbdv-module-item-title">
                    {module.title}
                    </span>
                    <i className="fa fa-edit wbdv-module-item-delete-btn"></i>
                </span>
            </li>
        )}
        <li className="wbdv-module-item">
            <a>
                <span className="wbdv-module-item-title">
                Click to add new
                    <i className="fa fa-plus wbdv-module-item-delete-btn"></i>
                </span>
            </a>
        </li>
    </ul>
    </div>

export default ModuleListComponent