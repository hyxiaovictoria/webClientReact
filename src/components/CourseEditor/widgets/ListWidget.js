import React from 'react'
import {ControlLabel, DropdownButton, FormControl, FormGroup, MenuItem} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/lib/DropdownMenu";

const ListWidget = ({widget , updateWidget , handleChangeList , preview})=>{
    let input ;
    return(
        <div>
            <div style={preview?{"display": "none"}:{"display": "inline"}}>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>The Input</ControlLabel>
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
                <p className={'my-3'}>Preview</p>
            </div>
            {widget.text ? widget.text.split(",").map((item,index)=> <li key={index}>{item}</li>) : <p></p>}
        </div>
    )
};

export default ListWidget