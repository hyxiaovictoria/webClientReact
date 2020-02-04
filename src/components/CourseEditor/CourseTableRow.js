import React from "react";

class CourseTableRow extends React.Component {
    state = {
        editing: false
    }

    render() {
        return(
            <tr className="wbdv-row">
            <td>
                {!this.state.editing &&
                    <a onClick={this.props.showEditor} href="#">
                        {this.props.course.title}
                    </a>
                }
                {this.state.editing && <input/>}
            </td>
            <td>me
            </td>
            <td>{this.props.course.time}
            </td>
            <td> {
                <>
                <button onClick={() => {this.setState({editing:true})}}>Edit</button>
                <button onClick={() => this.props.deleteCourse(this.props.course)}>Delete</button>
                <button onClick={() => {
                    this.props.saveCourse(this.props.course, 'newnewTitle')
                    this.setState({editing: false})
                }}>Save</button>
                </>
            }
            </td>
            </tr>
        )
    }
}

export default CourseTableRow