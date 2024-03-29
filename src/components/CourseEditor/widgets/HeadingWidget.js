import React from "react";
import "../CourseEditorComponent.css"

class HeadingWidget extends React.Component {
    state = {
        editing: this.props.editing,
        widget: this.props.widget
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.editing !== this.props.editing) {
            this.setState({
                editing: this.props.editing
            })
        }
    }

    render () {
        return(
            <div>
                {
                    !this.state.editing &&
                    <div>
                        {this.props.widget.size === 1 && <h1>{this.props.widget.text}</h1>}
                        {this.props.widget.size === 2 && <h2>{this.props.widget.text}</h2>}
                        {this.props.widget.size === 3 && <h3>{this.props.widget.text}</h3>}
                        {this.props.widget.size === 4 && <h4>{this.props.widget.text}</h4>}
                        {this.props.widget.size === 5 && <h5>{this.props.widget.text}</h5>}
                        {this.props.widget.size === 6 && <h6>{this.props.widget.text}</h6>}
                    </div>
                }
                {
                    this.state.editing &&
                    <div>
                        <span>
                            <h3>Heading widget</h3>
                        </span>
                        <div className="form-row">
                            <input className="form-control wbdv-width-100"
                                   type="text"
                                onChange={(e) => {
                                    const newTitle = e.target.value;
                                    this.setState(prevState => {
                                        prevState.widget.text = newTitle;
                                        return prevState
                                    })
                                }}
                                // value={this.state.widget.text}/>
                                value = "Heading text"/>
                        </div>
                        <div className="wbdv-width-100">
                            <select
                                onChange={(e) => {
                                    const newSize = parseInt(e.target.value);
                                    this.setState(prevState => {
                                        prevState.widget.size = newSize;
                                        return prevState
                                    })
                                }}
                                value={this.state.widget.size}>
                                <option value={1}>Heading 1</option>
                                <option value={2}>Heading 2</option>
                                <option value={3}>Heading 3</option>
                                <option value={4}>Heading 4</option>
                                <option value={5}>Heading 5</option>
                                <option value={6}>Heading 6</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <input className="form-control wbdv-width-100"
                                value = "Widget name"
                                type="text"/>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default HeadingWidget