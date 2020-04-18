import React from 'react'
import {ControlLabel, DropdownButton, FormControl, FormGroup, MenuItem} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/lib/DropdownMenu";

const ListWidget = ({widget , updateWidget , preview})=>{
    let input ;
    return(
        <div>
            <div style={preview?{"display": "none"}:{"display": "inline"}}>
                <h2>List Widget</h2>
                <FormGroup controlId="formControlsTextarea">
                    <FormControl
                        placeholder={'Enter one list item separated by comma'}
                        componentClass="textarea"
                        inputRef={(ref) => {input = ref}}
                        onChange={(e) => {
                            widget.text = e.target.value;
                            updateWidget(widget)
                        }}
                    />
                </FormGroup>
                <select onChange={(e) => {
                    widget.isInOrder = e.target.value;
                    updateWidget(widget)
                }}>
                    <option value="0">Unordered list</option>
                    <option value="1">Ordered list</option>
                </select>
                <FormControl
                    className={'my-3'}
                    componentClass="input"
                    type="text"
                    inputRef={(ref) => {input = ref}}
                    placeholder="Widget Name"
                    onChange={(e) => {
                        widget.name = e.target.value;
                        updateWidget(widget)
                    }}
                />
                <h3>Preview</h3>
            </div>
            {widget.text ? widget.text.split(",").map((item,index)=> <li key={index}>{item}</li>) : <p></p>}
        </div>
    )
};

export default ListWidget