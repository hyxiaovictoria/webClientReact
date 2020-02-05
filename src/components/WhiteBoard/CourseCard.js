import React from "react";

export default class CourseCard extends React.Component
{
    render() {
        return (
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.course.title}</h5>
                    <p className="card-text">
                        <i className="fas fa-file-alt"></i>
                        Modified {this.props.course.time}
                    </p>
                    <a href="#" className="btn btn-primary">More...</a>
                </div>
            </div>
        )
    }
}