import  React from 'react'
import {FormControl, FormGroup} from "react-bootstrap";

const ImageWidget = ({widget , updateWidget , preview})=>{
    let input;
    return(
        <div>
            <div style={preview?{"display": "none"}:{"display": "inline"}}>
                <h2>Image Widget</h2>
                <FormGroup controlId="formControlsTextarea">
                <FormControl
                    className={'my-3'}
                    componentClass="input"
                    type="text"
                    inputRef={(ref) => {input = ref}}
                    placeholder="Widget Name"
                    // value={widget.url}
                    // onChange={()=>handleChangeImage(widget.id , input.value)}
                    onChange={(e) => {
                        widget.url = e.target.value;
                        updateWidget(widget)
                    }}
                />
                <FormControl
                    className={'my-3'}
                    componentClass="input"
                    type="text"
                    inputRef={(ref) => {input = ref}}
                    onChange={(e) => {
                        widget.name = e.target.value;
                        updateWidget(widget)
                    }}
                    placeholder="Widget Name" />
                </FormGroup>
            </div>
            <img src={widget.url} width="300" alt="Picture not found"/>
        </div>
    )
};

export default ImageWidget