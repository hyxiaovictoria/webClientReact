import React from "react";
import "./CourseEditorComponent.css"


class TopicPills extends React.Component {
    render() {
        return (
            <div className="form-row">
                <ul className="nav nav-pills wbdv-topic-pill-list">
                    {this.props.topics.map(topic =>
                        <li className="nav-item wbdv-topic-pill">
                            <a className="nav-link wbdv-white" href="#">{topic.title}</a>
                        </li>
                    )}
                    <li className="nav-item wbdv-topic-pill">
                        <a className="nav-link wbdv-white" href="#">
                            <i className="fa fa-plus fa-1x"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TopicPills