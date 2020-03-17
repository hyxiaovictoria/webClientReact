import  React from 'react'
import {FormControl} from "react-bootstrap";

const ImageWidget = ({widget , handleChangeImage , preview})=>{
    let input;
    return(
        <div>
            {/*<div style={preview?{"display": "none"}:{"display": "inline"}}>*/}
            {/*    <FormControl*/}
            {/*        className={'my-3'}*/}
            {/*        componentClass="input"*/}
            {/*        type="text"*/}
            {/*        value={widget.src}*/}
            {/*        // onChange={()=>handleChangeImage(widget.id , input.value)}*/}
            {/*        // inputRef={(ref) => {input = ref}}*/}
            {/*        placeholder="Image src"*/}
            {/*    />*/}
            {/*    <FormControl*/}
            {/*        className={'my-3'}*/}
            {/*        componentClass="input"*/}
            {/*        type="text"*/}
            {/*        inputRef={(ref) => {this.input = ref}}*/}
            {/*        placeholder="Widget Name" />*/}
            {/*</div>*/}
            <img src={widget.url} width="300" alt="Picture not found"/>
        </div>
    )
};

export default ImageWidget