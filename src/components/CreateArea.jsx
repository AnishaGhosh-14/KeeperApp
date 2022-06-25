import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";

function CreateArea(props) {

    const[expanded,setexpanded]=useState(false)

    const[text,settext]=useState({
        title:"",
        content:""
    })
    function handleChange(event) {
        const{name,value}=event.target
      
        settext((prev)=>{

        //    console.log(prev)
           return{
            ...prev,
            [name]:value
           }
        })
      }
      function submitnote(event){
        // console.log(text)
        
        props.add(text)
        settext({
            title:"",
            content:""
        }
        )
        event.preventDefault();
       
      }
      function expand(){
        setexpanded(true)
      }

  return (
    <div>
      <form className="create-note">
      {expanded? <input onChange={handleChange} 
      
        name="title"
         placeholder="Title" value={text.title} />:null}
        <textarea onChange={handleChange} 
          onClick={expand}
          name="content" value ={text.content}placeholder="Take a note..." 
        rows={expanded} />
        <Zoom in={expanded?true:false}>
        <Fab onClick={submitnote}><AddIcon/>
        </Fab>
        </Zoom>
      
      </form>
    </div>
  );
}

export default CreateArea;