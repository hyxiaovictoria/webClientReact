import React from 'react'
import {ControlLabel, DropdownButton, FormControl, FormGroup, MenuItem} from "react-bootstrap";

const ListWidget = ({widget , listChange , handleChangeList , preview})=>{
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
                        // onChange={()=>handleChangeList(widget.id , input.value)}
                        value={widget.text}
                    />
                </FormGroup>
                <DropdownButton
                    bsStyle="default"
                    title={'Select the Type of list'}
                    key={widget.id}
                    noCaret
                    id={`dropdown-basic-${1}`}>
                    // <MenuItem eventKey="1" onSelect={()=>listChange(widget , 1)}>Ordered List</MenuItem>
                    // <MenuItem eventKey="2" onSelect={()=>listChange(widget , 2)}>Unordered List</MenuItem>
                </DropdownButton>
                <FormControl
                    className={'my-3'}
                    componentClass="input"
                    type="text"
                    inputRef={(ref) => {input = ref}}
                    placeholder="Widget Name" />
                <p className={'my-3'}>Preview</p>
            </div>
            {widget.text ? widget.text.split(",").map((item,index)=> <li key={index}>{item}</li>) : <p></p>}
            {/*<li key="A1">A</li>*/}
            {/*<li key="B1">B</li>*/}
            {/*<li key="C1">C</li>*/}
        </div>
    )
};

export default ListWidget