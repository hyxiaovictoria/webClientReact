import React from "react";
import ModuleListComponent from "./ModuleListComponent";

const CourseEditorComponent = () =>
    <div>
        <h3> Course Editor</h3>
        <ModuleListComponent
            modules={[
                {_id: "123", title: "CSS"},
                {_id: "234", title: "HTML"},
                {_id: "345", title: "React"}
            ]}
        />
        <ul>
            <li>Lesson 1</li>
            <li>Lesson 2</li>
            <li>Lesson 3</li>
        </ul>
        <ul>
            <li>Lesson 1</li>
            <li>Lesson 2</li>
            <li>Lesson 3</li>
        </ul>
    </div>

export default CourseEditorComponent