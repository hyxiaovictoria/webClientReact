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
                <a onClick={() => {this.setState({editing:true})}}>
                    <i className="fas fa-edit fa-2x"></i>
                </a>
                <a onClick={() => this.props.deleteCourse(this.props.course)}>
                    <i className="fas fa-trash fa-2x"></i>
                </a>
                <a onClick={() => {
                    this.props.saveCourse(this.props.course, 'newnewTitle')
                    this.setState({editing: false})
                }}>
                    <i className="fas fa-check-circle fa-2x"></i>
                </a>
                </>
            }
            </td>
            </tr>
        )
    }
}

export default CourseTableRow

// <span className="float-right">
//     <a>
//     <i classNmae="fa fa-pencil"></i>
// </a>
//
// <a>
// <i className="fa fa-trash"></i>
// </a>
// </span>