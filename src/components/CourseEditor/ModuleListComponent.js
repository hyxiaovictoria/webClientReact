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
                    <i className="fa fa-times wbdv-module-item-delete-btn"></i>
                </span>
            </li>
        )}
    </ul>
    </div>

export default ModuleListComponent